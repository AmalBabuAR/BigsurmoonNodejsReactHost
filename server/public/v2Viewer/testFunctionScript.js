import { getQueryParam } from "./exportFunctions.js";

const sideBarView = document.querySelector("#controlsContainerCollapse");
const mobSideBarView = document.querySelector("#mobControlsContainer");

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

		setUpLoader(data?.bestPractices?.progressBar);

		console.log("data", data);

		// setUpPoster(modelViewer, data?.poster?.url);

		// Fetch GLB data
		const glbResponse = await fetch(data?.model?.url);
		if (!glbResponse.ok) {
			throw new Error("Failed to fetch GLB data");
		}
		// console.log("glbResponse", glbResponse);
		const glbData = await glbResponse.arrayBuffer();
		// console.log(glbData);
		const blob = new Blob([glbData]);
		// console.log("blob", blob);

		const objectUrl = URL.createObjectURL(blob);

		setUpUrl(modelViewer, objectUrl);
		setupVariantSelector(modelViewer, data?.hotspot);
		if (data?.hotspot?.length > 0) {
			// console.log("hot called", data.hotspot.length);

			setupHotspots(modelViewer, data?.hotspot);
			setUpHotspotSwipeButton(modelViewer, data?.hotspot);
			setUpHotspotView();
		}
		setUpConfig(modelViewer, data?.config);

		if (data?.environment !== undefined) {
			setupEnvironment(
				modelViewer,
				data?.environment,
				data?.config?.useEnvAsSkybox,
				data?.config?.skyboxHeight
			);
		}
		setUpBestPractices(
			modelViewer,
			data?.bestPractices,
			data?.config?.autoplay
		);

		setUpAutoRotateView(modelViewer);
		if (sideBarView !== null) {
			sideBarView.style.display = "flex";
		} else if (mobSideBarView !== null) {
			mobSideBarView.style.display = "flex";
		}
	} catch (error) {
		console.log("error", error);
	}
}
setupModelViewer();

function setUpUrl(modelViewer, objectUrl) {
	modelViewer.src = objectUrl;
	const loaderOverlay = document.getElementById("loaderOverlay");
	loaderOverlay.style.display = "none";
}

function setupVariantSelector(modelViewer, hotspot) {
	const select = document.querySelector("#variant");
	// console.log("sideBarView", sideBarView);

	const variantView = document.getElementById("varientContainer");
	const mobVariantView = document.getElementById("mobVariantContainer");

	modelViewer.addEventListener(
		"load",
		() => {
			const varient = modelViewer.availableVariants;

			if (varient.length > 0) {
				varient
					.filter((name) => !name.startsWith("delete"))
					.forEach((name) => {
						const option = document.createElement("option");
						option.value = name;
						option.textContent = name;
						select.appendChild(option);
					});
				// Automatically select the first variant
				select.options[0].selected = true;
				modelViewer.variantName = select.options[0].value;
				if (sideBarView !== null) {
					sideBarView.style.display = "flex";
					variantView.style.display = "flex";
				}

				if (mobSideBarView !== null) {
					mobSideBarView.style.display = "flex";
					mobVariantView.style.display = "flex";
				}
			} else {
				if (sideBarView !== null) {
					// sideBarView.style.display = "none";
					variantView.style.display = "none";
				}
				if (mobSideBarView !== null) {
					// mobSideBarView.style.display = "none";
					mobVariantView.style.display = "none";
				}
			}
		},
		{ once: true }
	);
	select.addEventListener("input", (event) => {
		// console.log(event.target.value);
		modelViewer.variantName =
			event.target.value === "default" ? null : event.target.value;
	});
}

// Function to set up hotspots ===============================
function setupHotspots(modelViewer, hotspots) {
	hotspots.forEach((hotspot, index) => {
		// console.log("______", hotspot);
		const button = document.createElement("button");

		button.className = "Hotspot";
		button.id = `Hotspot${hotspot.name}`;
		button.setAttribute("slot", `hotspot-${index + 1}`);
		if (hotspot.position) {
			// console.log("hotspot.position", hotspot.position);
			button.setAttribute("data-position", hotspot.position);
		}
		if (hotspot.normal) {
			button.setAttribute("data-normal", hotspot.normal);
		}
		if (hotspot.surface) {
			// console.log("hotspot.surface", hotspot.surface);
			button.setAttribute("data-surface", hotspot.surface);
		}
		button.setAttribute("data-visibility-attribute", "visible");

		const annotation = document.createElement("div");
		annotation.className = "HotspotAnnotation";
		annotation.id = `annotation${hotspot.name}`;
		annotation.textContent = hotspot.annotation;
		button.addEventListener("mouseenter", () => {
			annotation.style.display = "block";
		});
		button.addEventListener("mouseleave", () => {
			annotation.style.display = "none";
		});
		button.appendChild(annotation);

		modelViewer.appendChild(button);
		button.addEventListener("click", () => {
			// console.log("eventlistener is called");
			handleHotspotClick(modelViewer, hotspot);

			updateInput(index, hotspots, modelViewer);
			updateIndex(index);
		});
	});
}
function updateIndex(index) {
	return index;
}

// Function to handle hotspot click
function handleHotspotClick(modelViewer, hotspot) {
	// console.log("handleHotspotClick", hotspot, hotspot.target);
	const allHotspot = document.querySelectorAll(".Hotspot");
	allHotspot.forEach((hotspot) => {
		hotspot.style.background = "rgba(255, 255, 255, 0.75)";
		hotspot.style.borderRadius = "32px";
		hotspot.style.border = "1px solid rgb(92, 94, 98)";
		hotspot.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.25)";
		hotspot.style.boxSizing = "border-box";
		hotspot.style.cursor = "pointer";
		hotspot.style.height = "24px";
		hotspot.style.padding = "8px";
		hotspot.style.position = "relative";
		hotspot.style.transition = "opacity 0.3s";
		hotspot.style.width = "24px";
	});
	const hotspotSelect = document.getElementById(`Hotspot${hotspot.name}`);
	hotspotSelect.style.border = "7px solid #fff";
	hotspotSelect.style.height = "11px";
	hotspotSelect.style.outline = "none";
	hotspotSelect.style.width = "11px";
	hotspotSelect.style.backgroundColor = "#3a3c41";
	const allAnnotation = document.querySelectorAll(".HotspotAnnotation");
	allAnnotation.forEach((annotation) => {
		annotation.style.display = "none";
	});
	const annotationSelect = document.getElementById(`annotation${hotspot.name}`);
	annotationSelect.style.display = "block";

	modelViewer.cameraTarget = hotspot.target;
	modelViewer.cameraOrbit = hotspot.orbit;
	modelViewer.fieldOfView = hotspot.fov;

	setTimeout(() => {
		annotationSelect.style.display = "none";
	}, 5000);
}
function setUpHotspotSwipeButton(modelViewer, hotspots) {
	// console.log("hotspots", hotspots[0]);
	let currentIndex = 0;
	let initialStart = true;

	const index = updateIndex();
	if (index) {
		currentIndex = index;
	}

	const deskTopPrevBtn = document.getElementById("hotsportSwipePrevButton");
	const deskTopNextBtn = document.getElementById("hotsportSwipeNextButton");
	const mobPrvBtn = document.getElementById("mobHotsportSwipePrevButton");
	const mobNextBtn = document.getElementById("mobHotsportSwipeNextButton");

	// console.log("deskTopPrevBtn", deskTopPrevBtn);
	if (deskTopPrevBtn !== null && deskTopNextBtn !== null) {
		deskTopPrevBtn.addEventListener("click", () => {
			if (initialStart) {
				currentIndex = 0;
				initialStart = false;
			} else {
				currentIndex = (currentIndex - 1 + hotspots.length) % hotspots.length;
			}
			// console.log("currentIndex PrevButton", currentIndex);
			updateInput(currentIndex, hotspots, modelViewer);
		});

		deskTopNextBtn.addEventListener("click", () => {
			if (initialStart) {
				currentIndex = 0;
				initialStart = false;
			} else {
				currentIndex = (currentIndex + 1) % hotspots.length;
			}

			// console.log("currentIndex NextButton", currentIndex);
			updateInput(currentIndex, hotspots, modelViewer);
		});
		updateInputs(currentIndex, hotspots, modelViewer);
	}

	if (mobPrvBtn !== null && mobNextBtn !== null) {
		mobPrvBtn.addEventListener("click", () => {
			if (initialStart) {
				currentIndex = 0;
				initialStart = false;
			} else {
				currentIndex = (currentIndex - 1 + hotspots.length) % hotspots.length;
			}
			// console.log("currentIndex PrevButton", currentIndex);
			updateInput(currentIndex, hotspots, modelViewer);
		});

		mobNextBtn.addEventListener("click", () => {
			if (initialStart) {
				currentIndex = 0;
				initialStart = false;
			} else {
				currentIndex = (currentIndex + 1) % hotspots.length;
			}

			// console.log("currentIndex NextButton", currentIndex);
			updateInput(currentIndex, hotspots, modelViewer);
		});
		updateInputs(currentIndex, hotspots, modelViewer);
	}
}
function updateInputs(currentIndex, hotspots, modelViewer) {
	const spanInput = document.getElementById("hotsportSwipeInput");
	const seletedHotspot = hotspots[currentIndex];
	// console.log("seletedHotspot", seletedHotspot.annotation);
	spanInput.textContent = seletedHotspot.annotation;
	// handleHotspotClick(modelViewer, seletedHotspot);
}

function updateInput(currentIndex, hotspots, modelViewer) {
	const spanInput = document.getElementById("hotsportSwipeInput");
	const seletedHotspot = hotspots[currentIndex];
	// console.log("seletedHotspot", seletedHotspot.annotation);
	const sliceHotspot = seletedHotspot.annotation.slice(0, 10);
	// console.log("seletedHotspot slice", sliceHotspot);
	spanInput.textContent = sliceHotspot;
	handleHotspotClick(modelViewer, seletedHotspot);
}
function setUpHotspotView() {
	// desktop element
	const annotationContainer = document.getElementById("annotationContainer");
	const annotationBtnContainer = document.getElementById(
		"annotationBtnContainer"
	);
	const annotationBtnButton = document.getElementById("annotationBtnButton");
	// mob element
	const mobAnnotationContainer = document.getElementById(
		"mobAnnotationContainer"
	);
	const mobAnnotationBtnContainer = document.getElementById(
		"mobAnnotationBtnContainer"
	);
	const mobAnnotationBtnButton = document.getElementById(
		"mobAnnotationBtnButton"
	);
	// commen element
	const annotationSvg = document.getElementById("annotationSvg");
	const annotationSelectedSvg = document.getElementById(
		"annotationSelectedSvg"
	);
	const hotspotAll = document.querySelectorAll(".Hotspot");

	// condition
	if (
		annotationContainer !== null &&
		annotationBtnContainer !== null &&
		annotationBtnButton !== null
	) {
		annotationContainer.style.display = "flex";
		annotationBtnContainer.style.display = "flex";

		annotationBtnButton.addEventListener("click", annotationBtnButtonClick);
	} else if (
		mobAnnotationContainer !== null &&
		mobAnnotationBtnContainer !== null &&
		mobAnnotationBtnButton !== null
	) {
		mobAnnotationContainer.style.display = "flex";
		mobAnnotationBtnContainer.style.display = "flex";
		mobAnnotationBtnButton.addEventListener("click", annotationBtnButtonClick);
	}
	// function for btn click
	function annotationBtnButtonClick() {
		if (annotationSvg.style.display === "none") {
			annotationSelectedSvg.style.display = "none";
			annotationSvg.style.display = "block";
			hotspotAll.forEach((hotspot) => {
				hotspot.style.display = "none";
			});
		} else {
			annotationSvg.style.display = "none";
			annotationSelectedSvg.style.display = "block";
			hotspotAll.forEach((hotspot) => {
				hotspot.style.display = "block";
			});
		}
	}
}
// ---------------------hotspots ENd---------------------------------

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
	} else {
		setUpNoAutoPlayStyleMob();
	}

	if (autoRotate) {
		modelViewer.autoRotate = autoRotate;
		const autoRotationSvg = document.getElementById("autoRotationSvg");
		const autoRotationSelectedSvg = document.getElementById(
			"autoRotationSelectedSvg"
		);
		autoRotationSvg.style.display = "none";
		autoRotationSelectedSvg.style.display = "flex";
	}
}

function setUpAutoPlay(modelViewer) {
	const playBtn = document.getElementById("playBtn");
	const mobPlayButton = document.getElementById("mobPlayButton");
	const mobViewInArButton = document.getElementById("mobViewInArButton");
	if (mobViewInArButton !== null) {
		mobViewInArButton.classList.remove("mobViewInArButtonForNoAutoPlay");
	}

	if (playBtn !== null) {
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
	} else if (mobPlayButton !== null) {
		let isPlaying = false;
		modelViewer.autoplay = true;
		mobPlayButton.style.display = "block";
		mobPlayButton.addEventListener("click", () => {
			if (isPlaying) {
				modelViewer.play();
			} else {
				modelViewer.pause();
			}
			isPlaying = !isPlaying;
		});
	}
}

function setupEnvironment(modelViewer, env, skybox, skyboxHeight) {
	// console.log("env ", env);
	// desktop element
	const environmentContainer = document.getElementById("environmentContainer");
	const environmentButton = document.getElementById("environmentButton");
	// mob element
	const mobEnvironmentContainer = document.getElementById(
		"mobEnvironmentContainer"
	);
	const mobEnvironmentButton = document.getElementById("mobEnvironmentButton");
	// commen element
	const environmentSvg = document.getElementById("environmentSvg");
	const environmentSelectedSvg = document.getElementById(
		"environmentSelectedSvg"
	);

	if (environmentContainer !== null && environmentButton !== null) {
		environmentContainer.style.display = "flex";

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
		environmentButton.addEventListener("click", environmentButtonClick);
	} else if (
		mobEnvironmentContainer !== null &&
		mobEnvironmentButton !== null
	) {
		{
			mobEnvironmentContainer.style.display = "flex";

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
			mobEnvironmentButton.addEventListener("click", environmentButtonClick);
		}
	}
	function environmentButtonClick() {
		if (environmentSvg.style.display === "none") {
			environmentSelectedSvg.style.display = "none";
			environmentSvg.style.display = "block";
			modelViewer.environmentImage = null;
			modelViewer.skyboxImage = null;
			modelViewer.skyboxHeight = 0;
		} else {
			environmentSvg.style.display = "none";
			environmentSelectedSvg.style.display = "block";
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
}
//------------------setUpBestPractices------------------------------
function setUpBestPractices(modelViewer, bestPractices, autoplay) {
	if (bestPractices?.arButton) {
		const toggleARButton = document.getElementById("qrBtn");
		const mobToggleArButton = document.getElementById("mobViewInArButton");
		if (toggleARButton !== null) {
			toggleARButton.style.display = "flex";
		} else if (mobToggleArButton !== null) {
			mobToggleArButton.style.display = "flex";
		}
		modelViewer.ar = true;
	}

	if (bestPractices?.progressBar) {
		createProgressBar(modelViewer);
	}

	if (bestPractices?.arPrompt) {
		createArPrompt(modelViewer);
	}
}

//------------------setUpBestPractices End---------------------------

function setUpAutoRotateView(modelViewer) {
	const controlsContainerCollapse = document.getElementById(
		"controlsContainerCollapse"
	);
	const autoRotateContainer = document.getElementById("autoRotateContainer");
	const autoRotateButton = document.getElementById("autoRotateButton");
	const mobAutoRotateContainer = document.getElementById(
		"mobAutoRotateContainer"
	);
	const mobAutoRotateButton = document.getElementById("mobAutoRotateButton");

	const autoRotationSvg = document.getElementById("autoRotationSvg");
	const autoRotationSelectedSvg = document.getElementById(
		"autoRotationSelectedSvg"
	);
	if (
		autoRotateContainer !== null &&
		autoRotateButton !== null &&
		controlsContainerCollapse !== null
	) {
		controlsContainerCollapse.style.display = "flex";
		autoRotateContainer.style.display = "flex";
		autoRotateButton.addEventListener("click", function () {
			if (autoRotationSelectedSvg.style.display === "none") {
				autoRotationSvg.style.display = "none";
				autoRotationSelectedSvg.style.display = "block";
				modelViewer.autoRotate = true;
			} else {
				autoRotationSelectedSvg.style.display = "none";
				autoRotationSvg.style.display = "block";
				modelViewer.autoRotate = false;
			}
		});
	} else if (mobAutoRotateContainer !== null && mobAutoRotateButton !== null) {
		mobAutoRotateContainer.style.display = "flex";
		mobAutoRotateButton.addEventListener("click", function () {
			// console.log("mob auto clicked");
			if (autoRotationSelectedSvg.style.display === "none") {
				autoRotationSvg.style.display = "none";
				autoRotationSelectedSvg.style.display = "block";
				modelViewer.autoRotate = true;
			} else {
				autoRotationSelectedSvg.style.display = "none";
				autoRotationSvg.style.display = "block";
				modelViewer.autoRotate = false;
			}
		});
	}
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

function setUpNoAutoPlayStyleMob() {
	const mobViewInArButton = document.getElementById("mobViewInArButton");
	if (mobViewInArButton !== null) {
		mobViewInArButton.style.margin = "0 6vw";
		mobViewInArButton.style.width = "88vw";
		mobViewInArButton.classList.add("mobViewInArButtonForNoAutoPlay");
	}
}

// set up loader
function setUpLoader(loader) {
	console.log("loader", loader);
	const loaderOverlay = document.getElementById("loaderOverlay");
	loader
		? (loaderOverlay.style.display = "flex")
		: (loaderOverlay.style.display = "none");
}
