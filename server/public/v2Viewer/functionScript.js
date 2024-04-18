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
			data?.config?.useEnvAsSkybox,
			data?.config?.skyboxHeight
		);

		setUpBestPractices(modelViewer, data?.bestPractices);
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
	const {
		exposure,
		shadowIntensity,
		shadowSoftness,
		toneMapping,
		autoplay,
		autoRotate,
	} = config || {};

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

	if (autoRotate) {
		modelViewer.autoRotate = autoRotate;
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

function setupEnvironment(modelViewer, env, skybox, skyboxHeight) {
	if (env) {
		const envImage = new Image();
		envImage.src = `../../editor/hdrImages/${env}`;
		modelViewer.environmentImage = envImage.src;
		if (skybox) {
			modelViewer.skyboxImage = envImage.src;
			if (skyboxHeight) {
				modelViewer.skyboxHeight = skyboxHeight;
			}
		}
	}
}

function setUpBestPractices(modelViewer, bestPractices) {
	if (bestPractices?.arButton) {
		createArButton(modelViewer);
		modelViewer.ar = true;
	}

	if (bestPractices?.progressBar) {
		createProgressBar(modelViewer);
	}

	if (bestPractices?.arPrompt) {
		createArPrompt(modelViewer);
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

function createArButton(modelViewer) {
	// Create button element
	const button = document.createElement("button");
	button.setAttribute("slot", "ar-button");
	button.setAttribute("id", "ar-button");

	// Create SVG element
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", "20");
	svg.setAttribute("height", "21");
	svg.setAttribute("viewBox", "0 0 25 26");
	svg.setAttribute("fill", "none");

	// Create path element within SVG
	const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path.setAttribute(
		"d",
		"M23.7393 8.75134C24.5588 8.75134 25 8.30463 25 7.49806V4.48274C25 1.82728 23.588 0.4375 20.8522 0.4375H17.7887C16.9692 0.4375 16.5154 0.871805 16.5154 1.67837C16.5154 2.47253 16.9692 2.90683 17.7887 2.90683H20.6884C21.8356 2.90683 22.4912 3.50245 22.4912 4.7061V7.49806C22.4912 8.30463 22.9324 8.75134 23.7393 8.75134ZM1.26072 8.75134C2.08018 8.75134 2.50883 8.30463 2.50883 7.49806V4.7061C2.50883 3.50245 3.15179 2.90683 4.31165 2.90683H7.2113C8.03076 2.90683 8.48462 2.47253 8.48462 1.67837C8.48462 0.871805 8.03076 0.4375 7.2113 0.4375H4.14776C1.42461 0.4375 0 1.81487 0 4.48274V7.49806C0 8.30463 0.453858 8.75134 1.26072 8.75134ZM12.5063 12.263C14.4478 12.2754 16.0237 10.6375 16.0237 8.47835C16.0237 6.45573 14.4478 4.78055 12.5063 4.78055C10.5522 4.78055 8.98891 6.45573 8.98891 8.47835C8.98891 10.6375 10.5522 12.2506 12.5063 12.263ZM6.39183 19.5593H18.6208C19.2259 19.5593 19.5285 19.1498 19.5285 18.6039C19.5285 17.1272 17.3096 13.3302 12.5063 13.3302C7.70298 13.3302 5.48412 17.1272 5.48412 18.6039C5.48412 19.1498 5.78669 19.5593 6.39183 19.5593ZM4.14776 25.044H7.2113C8.03076 25.044 8.48462 24.5973 8.48462 23.8031C8.48462 23.009 8.03076 22.5622 7.2113 22.5622H4.31165C3.15179 22.5622 2.50883 21.979 2.50883 20.7754V17.9834C2.50883 17.1769 2.06757 16.7301 1.26072 16.7301C0.441251 16.7301 0 17.1769 0 17.9834V20.9987C0 23.6542 1.42461 25.044 4.14776 25.044ZM17.7887 25.044H20.8522C23.588 25.044 25 23.6542 25 20.9987V17.9834C25 17.1769 24.5461 16.7301 23.7393 16.7301C22.9198 16.7301 22.4912 17.1769 22.4912 17.9834V20.7754C22.4912 21.979 21.8356 22.5622 20.6884 22.5622H17.7887C16.9692 22.5622 16.5154 23.009 16.5154 23.8031C16.5154 24.5973 16.9692 25.044 17.7887 25.044Z"
	);
	path.setAttribute("fill", "white");

	// Append path to SVG
	svg.appendChild(path);

	// Create span element
	const span = document.createElement("span");
	span.textContent = "View in your room";

	// Append SVG and span to button
	button.appendChild(svg);
	button.appendChild(span);

	modelViewer.appendChild(button);
}

function createProgressBar(modelViewer) {
	const progressBarContainer = document.createElement("div");
	progressBarContainer.setAttribute("class", "progress-bar hide");
	progressBarContainer.setAttribute("slot", "progress-bar");
	const updateBar = document.createElement("div");
	updateBar.setAttribute("class", "update-bar");
	progressBarContainer.appendChild(updateBar);
	modelViewer.appendChild(progressBarContainer);
}

function createArPrompt(modelViewer) {
	// Create the div element
	const arPromptDiv = document.createElement("div");
	arPromptDiv.setAttribute("id", "ar-prompt");

	// Create the image element
	const image = document.createElement("img");
	image.setAttribute("src", "../../v2Viewer/ar_hand_prompt.png");

	// Append the image to the div
	arPromptDiv.appendChild(image);

	modelViewer.appendChild(arPromptDiv);
}
