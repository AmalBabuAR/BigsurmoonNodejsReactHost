function getQueryParam(param) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	return urlParams.get(param);
}

// Function to fetch model data and set up the viewer
async function setupModelViewer() {
	try {
		// Set up model viewer
		const modelViewer = document.querySelector("model-viewer");

		const idFromUrl = getQueryParam("id");
		const response = await fetch(`/editor/api/getModel/${idFromUrl}`);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const data = await response.json();

		setUpPoster(modelViewer, data?.poster?.url);

		console.log("data", data);

		// Fetch GLB data
		const glbResponse = await fetch(data?.model?.url);
		if (!glbResponse.ok) {
			throw new Error("Failed to fetch GLB data");
		}
		console.log("glbResponse", glbResponse);
		const glbData = await glbResponse.arrayBuffer();
		console.log(glbData);
		const blob = new Blob([glbData]);
		console.log("blob", blob);

		const objectUrl = URL.createObjectURL(blob);

		setUpUrl(modelViewer, objectUrl);

		setUpConfig(modelViewer, data?.config);

		if (data?.hotspot?.length > 0) {
			console.log("hot called", data.hotspot.length);
			// Set up hotspots
			setupHotspots(modelViewer, data?.hotspot);
			setUpHotspotSwipeButton(modelViewer, data?.hotspot);
		}
		console.log("++", data?.hotspot);

		// Set up variant selector
		setupVariantSelector(modelViewer, data?.hotspot);

		setupEnvironment(
			modelViewer,
			data?.environment,
			data?.config?.useEnvAsSkybox
		);
	} catch (error) {
		console.log(error);
	}
}

function setUpPoster(modelViewer, posterUrl) {
	modelViewer.poster = posterUrl;
}

function setUpUrl(modelViewer, objectUrl) {
	modelViewer.src = objectUrl;
}

function setUpConfig(modelViewer, config) {
	const { exposure, shadowIntensity, shadowSoftness, toneMapping, autoplay } =
		config || {};

	if (exposure) {
		modelViewer.exposure = exposure;
	}

	if (shadowIntensity) {
		modelViewer.shadowIntensity = shadowIntensity;
	}

	if (shadowSoftness) {
		modelViewer.shadowSoftness = shadowSoftness;
	}

	if (toneMapping) {
		modelViewer.toneMapping = toneMapping;
	}

	if (autoplay) {
		setUpAutoPlay(modelViewer);
	}
}

// Function to set up hotspots
function setupHotspots(modelViewer, hotspots) {
	hotspots.forEach((hotspot, index) => {
		console.log("______", hotspot);
		const button = document.createElement("button");
		button.className = "Hotspot";
		button.setAttribute("slot", `hotspot-${index + 1}`);
		if (hotspot.position) {
			button.setAttribute("data-position", hotspot.position);
		}
		if (hotspot.normal) {
			button.setAttribute("data-normal", hotspot.normal);
		}
		if (hotspot.surface) {
			button.setAttribute("data-surface", hotspot.surface);
		}
		button.setAttribute("data-visibility-attribute", "visible");

		const annotation = document.createElement("div");
		annotation.className = "HotspotAnnotation";
		annotation.textContent = hotspot.annotation;

		button.appendChild(annotation);

		button.addEventListener("click", () => {
			handleHotspotClick(modelViewer, hotspot);

			updateInput(index, hotspots, modelViewer);
			updateIndex(index);
		});

		modelViewer.appendChild(button);
		hotspotNames(hotspot.annotation);
	});
}
function updateIndex(index) {
	return index;
}

function hotspotNames(names) {
	console.log("names", names);
}

// Function to handle hotspot click
function handleHotspotClick(modelViewer, hotspot) {
	console.log("handleHotspotClick", hotspot, hotspot.target);
	modelViewer.cameraTarget = hotspot.target;
	modelViewer.cameraOrbit = hotspot.orbit;
	modelViewer.fieldOfView = hotspot.fov;
}

function setUpHotspotSwipeButton(modelViewer, hotspots) {
	console.log("hotspots", hotspots[0]);
	let currentIndex = 0;

	const index = updateIndex();
	if (index) {
		currentIndex = index;
	}

	document
		.getElementById("hotsportSwipePrevButton")
		.addEventListener("click", () => {
			currentIndex = (currentIndex - 1 + hotspots.length) % hotspots.length;
			updateInput(currentIndex, hotspots, modelViewer);
		});

	document
		.getElementById("hotsportSwipeNextButton")
		.addEventListener("click", () => {
			currentIndex = (currentIndex + 1) % hotspots.length;
			updateInput(currentIndex, hotspots, modelViewer);
		});
	updateInput(currentIndex, hotspots, modelViewer);
}

function updateInput(currentIndex, hotspots, modelViewer) {
	const spanInput = document.getElementById("hotsportSwipeInput");
	const seletedHotspot = hotspots[currentIndex];
	console.log("seletedHotspot", seletedHotspot.annotation);
	spanInput.textContent = seletedHotspot.annotation;
	handleHotspotClick(modelViewer, seletedHotspot);
}

// Function to set up variant selector
function setupVariantSelector(modelViewer, hotspot) {
	console.log("setupVariantSelector");
	const select = document.querySelector("#variant");

	modelViewer.addEventListener(
		"load",
		() => {
			const names = modelViewer.availableVariants;
			console.log("varient", names);
			if (names.length > 0) {
				names.forEach((name) => {
					const option = document.createElement("option");
					option.value = name;
					option.textContent = name;
					select.appendChild(option);
				});
				// Automatically select the first variant
				select.options[0].selected = true;
				modelViewer.variantName = select.options[0].value;
			}
			setUpSideToggleButtin(names, hotspot);
			// // Adds a default option
			// const defaultOption = document.createElement("option");
			// defaultOption.value = "default";
			// defaultOption.textContent = "Default";
			// select.appendChild(defaultOption);
		},
		{ once: true }
	);

	select.addEventListener("input", (event) => {
		console.log(event.target.value);
		modelViewer.variantName =
			event.target.value === "default" ? null : event.target.value;
	});
}

function setUpSideToggleButtin(variant, hotspot) {
	const controlsContainer = document.getElementById(
		"controlsContainerCollapse"
	);
	const varientContainer = document.getElementById("varientContainer");
	const annotationContainer = document.getElementById("annotationContainer");
	const prevButton = document.getElementById("hotsportSwipePrevButton");
	const nextButton = document.getElementById("hotsportSwipeNextButton");

	// Hide controls container if both variant and hotspot are empty
	controlsContainer.style.display =
		variant?.length === 0 && hotspot?.length === 0 ? "none" : "";

	// Hide variant container if variant is empty
	varientContainer.style.display = variant?.length === 0 ? "none" : "";

	// Hide annotation container if hotspot is empty
	annotationContainer.style.display = hotspot?.length === 0 ? "none" : "";

	// Hide prev and next buttons if there's only one hotspot
	if (hotspot?.length === 1) {
		prevButton.style.display = "none";
		nextButton.style.display = "none";
	} else {
		prevButton.style.display = "";
		nextButton.style.display = "";
	}
}

function setUpAutoPlay(modelViewer) {
	const playBtn = document.getElementById("playBtn");
	let isPlaying = false;
	modelViewer.autoplay = true;
	playBtn.style.display = "block";
	playBtn.addEventListener("click", () => {
		if (isPlaying) {
			modelViewer.play();
		} else {
			modelViewer.pause();
		}
		isPlaying = !isPlaying;
	});
}

function setupEnvironment(modelViewer, env, skybox) {
	if (env) {
		const envImage = new Image();
		envImage.src = `../../editor/hdrImages/${env}`;
		modelViewer.environmentImage = envImage.src;
		if (skybox) {
			modelViewer.skyboxImage = envImage.src;
		}
	}
}

// Call the setupModelViewer function to initialize the model viewer
setupModelViewer();

// sideBtn view onclick handler
document.getElementById("sideBtn").addEventListener("click", function () {
	let contentToCollapse = document.getElementById("contentToCollapse");
	let sideBtnIconLeft = document.getElementById("sideBtnIconLeft");
	let sideBtnIconRight = document.getElementById("sideBtnIconRight");
	let controlsContainerCollapse = document.getElementById(
		"controlsContainerCollapse"
	);
	const mobConfig = document.getElementById("mobConfig");
	if (mobConfig.style.display === "none") {
		controlsContainerCollapse.style.display = "none";
		mobConfig.style.display = "block";
	} else if (contentToCollapse.style.display === "none") {
		contentToCollapse.style.display = "flex";
		sideBtnIconLeft.style.display = "block";
		sideBtnIconRight.style.display = "none";
		controlsContainerCollapse.style.width = "20.1vw";
		contentToCollapse.style.width = "100%";
	} else {
		contentToCollapse.style.display = "none";
		sideBtnIconLeft.style.display = "none";
		sideBtnIconRight.style.display = "block";
		controlsContainerCollapse.style.width = "30px";
		contentToCollapse.style.width = "0";
	}
});

// QR code generate
const idFromUrl = getQueryParam("id");
const urlToGenerateQRCodeFor = `https://bigsurmoon.com/editor/testViewer/?id=${idFromUrl}`;

if (!document.getElementById("qrcode").hasChildNodes()) {
	const qrcode = new QRCode("qrcode", {
		text: urlToGenerateQRCodeFor,
		width: 400,
		height: 400,
	});
}
const toggleARButton = document.getElementById("qrBtn");
const qrcodeMain = document.getElementById("qrcode-main");
const qrCloseButton = document.getElementById("qrCloseBtn");

let isQRCodeVisible = false;
toggleARButton.addEventListener("click", () => {
	if (!isQRCodeVisible) {
		qrcodeMain.style.display = "flex";
		// toggleARButton.style.zIndex = "999";
	} else {
		qrcodeMain.style.display = "none";
	}
	isQRCodeVisible = !isQRCodeVisible;
});
qrCloseButton.addEventListener("click", () => {
	if (!isQRCodeVisible) {
		qrcodeMain.style.display = "flex";
		// toggleARButton.style.zIndex = "999";
	} else {
		qrcodeMain.style.display = "none";
	}
	isQRCodeVisible = !isQRCodeVisible;
});

const mobConfig = document.getElementById("mobConfig");
mobConfig.addEventListener("click", function () {
	document.getElementById("controlsContainerCollapse").style.display = "flex";
	mobConfig.style.display = "none";
});

