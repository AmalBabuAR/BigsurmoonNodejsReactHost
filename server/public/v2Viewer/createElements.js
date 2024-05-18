import {
	detectBrowser,
	autoRotationSvg,
	annotationSvg,
	environmentSvg,
	qrAutorSvg,
	sideBarBtnSvg,
	hotsportSwipePrevBtnSvg,
	hotsportSwipeNextBtnSvg,
	qrCloseBtnSvg,
	fullScreenSvg,
	getQueryParam,
} from "./exportFunctions.js";

const detect = detectBrowser();

const modelViewer = document.querySelector("model-viewer");

if (
	detect === "chrome" ||
	detect === "firefox" ||
	detect === "safari" ||
	detect === "edge" ||
	detect === "opera"
) {
	createDesktopCollapse();
	createDesktopAnimationAndAr();
	createDesktopFullScreenBtn();
} else if (detect === "chromeMobile" || detect === "safariMobile") {
	createMobileCollapse();
	createMobConfigButton();
	createPlayPauseButton();
}

function createDesktopCollapse() {
	const mainContainer = document.createElement("div");
	mainContainer.setAttribute("id", "mainContainer");
	const controlsContainer = document.createElement("div");
	controlsContainer.setAttribute("id", "controlsContainerCollapse");
	controlsContainer.style.display = "none";

	const sideDiv = document.createElement("div");
	sideDiv.setAttribute("class", "sideDiv");

	const button = document.createElement("button");
	button.setAttribute("id", "sideBtn");

	button.innerHTML = sideBarBtnSvg;

	sideDiv.appendChild(button);

	const controlSection = document.createElement("div");
	controlSection.setAttribute("class", "controlSection");
	controlSection.setAttribute("id", "contentToCollapse");

	const annotationContainer = document.createElement("div");
	annotationContainer.setAttribute("id", "annotationContainer");
	annotationContainer.style.display = "none";

	const annotationSpan = document.createElement("span");
	annotationSpan.textContent = "Annotation";

	const annotationControls = document.createElement("div");
	annotationControls.setAttribute("class", "annotationControls");

	const prevButton = document.createElement("button");
	prevButton.setAttribute("id", "hotsportSwipePrevButton");

	prevButton.innerHTML = hotsportSwipePrevBtnSvg;

	const inputSpan = document.createElement("span");
	inputSpan.setAttribute("id", "hotsportSwipeInput");

	const nextButton = document.createElement("button");
	nextButton.setAttribute("id", "hotsportSwipeNextButton");

	nextButton.innerHTML = hotsportSwipeNextBtnSvg;

	annotationControls.appendChild(prevButton);
	annotationControls.appendChild(inputSpan);
	annotationControls.appendChild(nextButton);

	annotationContainer.appendChild(annotationSpan);
	annotationContainer.appendChild(annotationControls);

	const variantContainer = document.createElement("div");
	variantContainer.setAttribute("id", "varientContainer");
	variantContainer.style.display = "none";

	const variantSpan = document.createElement("span");
	variantSpan.textContent = "Colour Variant";

	const select = document.createElement("select");
	select.setAttribute("id", "variant");

	variantContainer.appendChild(variantSpan);
	variantContainer.appendChild(select);

	const otherButtonContainer = document.createElement("div");
	otherButtonContainer.setAttribute("id", "otherButtonContainer");

	const autoRotateContainer = document.createElement("div");
	autoRotateContainer.setAttribute("id", "autoRotateContainer");

	const autoRotateButton = document.createElement("button");
	autoRotateButton.setAttribute("id", "autoRotateButton");
	autoRotateButton.innerHTML = autoRotationSvg;

	const autoRotateSpan = document.createElement("span");
	autoRotateSpan.textContent = "AutoRotate";

	autoRotateContainer.appendChild(autoRotateButton);
	autoRotateContainer.appendChild(autoRotateSpan);

	const annotationBtnContainer = document.createElement("div");
	annotationBtnContainer.setAttribute("id", "annotationBtnContainer");

	const annotationBtnButton = document.createElement("button");
	annotationBtnButton.setAttribute("id", "annotationBtnButton");
	annotationBtnButton.innerHTML = annotationSvg;

	const annotationBtnSpan = document.createElement("span");
	annotationBtnSpan.textContent = "Annotation";

	annotationBtnContainer.appendChild(annotationBtnButton);
	annotationBtnContainer.appendChild(annotationBtnSpan);

	const environmentContainer = document.createElement("div");
	environmentContainer.setAttribute("id", "environmentContainer");

	const environmentButton = document.createElement("button");
	environmentButton.setAttribute("id", "environmentButton");
	environmentButton.innerHTML = environmentSvg;

	const environmentSpan = document.createElement("span");
	environmentSpan.textContent = "Environment";

	environmentContainer.appendChild(environmentButton);
	environmentContainer.appendChild(environmentSpan);

	otherButtonContainer.appendChild(autoRotateContainer);
	otherButtonContainer.appendChild(annotationBtnContainer);
	otherButtonContainer.appendChild(environmentContainer);

	controlSection.appendChild(annotationContainer);
	controlSection.appendChild(variantContainer);
	controlSection.appendChild(otherButtonContainer);

	controlsContainer.appendChild(sideDiv);
	controlsContainer.appendChild(controlSection);

	mainContainer.appendChild(controlsContainer);
	modelViewer.appendChild(mainContainer);

	button.addEventListener("click", sideBarButtonClick);
}

function sideBarButtonClick() {
	// console.log("click");
	let contentToCollapse = document.getElementById("contentToCollapse");
	let sideBtnIconLeft = document.getElementById("sideBtnIconLeft");
	let sideBtnIconRight = document.getElementById("sideBtnIconRight");
	let controlsContainerCollapse = document.getElementById(
		"controlsContainerCollapse"
	);
	const annotationContainer = document.getElementById("annotationContainer");
	const varientContainer = document.getElementById("varientContainer");

	const otherButtonContainer = document.getElementById("otherButtonContainer");

	if (annotationContainer.style.display === "none") {
		console.log("annotationContainer display", "none");
	} else {
		console.log("annotationContainer display", "block");
	}

	if (varientContainer.style.display === "none") {
		console.log("varientContainer display", "none");
	} else {
		console.log("varientContainer display", "block");
	}

	// console.log("height", controlsContainerCollapse.style);
	if (contentToCollapse.style.display === "none") {
		contentToCollapse.style.display = "flex";
		sideBtnIconLeft.style.display = "block";
		sideBtnIconRight.style.display = "none";
		controlsContainerCollapse.style.width = "auto";
		contentToCollapse.style.width = "100%";
		controlsContainerCollapse.style.height = "auto";
	} else {
		contentToCollapse.style.display = "none";
		sideBtnIconLeft.style.display = "none";
		sideBtnIconRight.style.display = "block";
		controlsContainerCollapse.style.width = "30px";
		controlsContainerCollapse.style.height = "100px";
		contentToCollapse.style.width = "0";
	}
}

function createDesktopAnimationAndAr() {
	// Create animationARContainer div
	const animationARContainer = document.createElement("div");
	animationARContainer.classList.add("animationARContainer");

	// Create playBtn button
	const playBtn = document.createElement("button");
	playBtn.id = "playBtn";
	playBtn.textContent = "Play Video";

	// Create qrBtn button
	const qrBtn = document.createElement("button");
	qrBtn.id = "qrBtn";

	qrBtn.innerHTML = qrAutorSvg;

	// Create span element
	const span = document.createElement("span");
	span.textContent = "View in your room";
	qrBtn.appendChild(span);

	// Append buttons to animationARContainer
	animationARContainer.appendChild(playBtn);
	animationARContainer.appendChild(qrBtn);

	modelViewer.appendChild(animationARContainer);

	// Create qrcode-main div
	const qrcodeMainDiv = document.createElement("div");
	qrcodeMainDiv.id = "qrcode-main";

	// Create qrcode-container div
	const qrcodeContainerDiv = document.createElement("div");
	qrcodeContainerDiv.id = "qrcode-container";

	// Create qrCloseDiv div
	const qrCloseDiv = document.createElement("div");
	qrCloseDiv.classList.add("qrCloseDiv");

	// Create qrCloseBtn button
	const qrCloseBtn = document.createElement("button");
	qrCloseBtn.id = "qrCloseBtn";

	qrCloseBtn.innerHTML = qrCloseBtnSvg;

	// Append qrCloseBtn to qrCloseDiv
	qrCloseDiv.appendChild(qrCloseBtn);
	qrcodeContainerDiv.appendChild(qrCloseDiv);

	// Create qrCodeDiv div
	const qrCodeDiv = document.createElement("div");
	qrCodeDiv.id = "qrcode";

	// Create p element for text
	const pElement = document.createElement("p");
	pElement.classList.add("text-qr");
	pElement.textContent =
		"Scan Q.R code on any mobile device to view in your space";

	// Append qrCodeDiv and pElement to qrcodeContainerDiv
	qrcodeContainerDiv.appendChild(qrCodeDiv);
	qrcodeContainerDiv.appendChild(pElement);

	// Append qrCloseDiv and qrcodeContainerDiv to qrcodeMainDiv
	// qrcodeMainDiv.appendChild(qrCloseDiv);
	qrcodeMainDiv.appendChild(qrcodeContainerDiv);

	modelViewer.appendChild(qrcodeMainDiv);
	callQrConfig();
}
function callQrConfig() {
	const idFromUrl = getQueryParam("id");
	const urlToGenerateQRCodeFor = `https://bigsurmoon.com/editor/testViewer/?id=${idFromUrl}`;

	if (!document.getElementById("qrcode").hasChildNodes()) {
		const qrcode = new QRCode("qrcode", {
			text: urlToGenerateQRCodeFor,
		});
	} else {
		console.log("QR Code already exists");
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
}

function createDesktopFullScreenBtn() {
	const fullScreenContainer = document.createElement("div");
	fullScreenContainer.id = "fulScreenContainer";

	const fullScreenBtn = document.createElement("button");
	fullScreenBtn.id = "fullScreenBtn";

	fullScreenBtn.innerHTML = fullScreenSvg;

	fullScreenContainer.appendChild(fullScreenBtn);

	modelViewer.appendChild(fullScreenContainer);

	fullScreenBtn.addEventListener("click", () => {
		if (!document.fullscreenElement) {
			modelViewer.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
	});
}

function createMobileCollapse() {
	const mobMainContainer = document.createElement("div");
	mobMainContainer.id = "mobMainContainer";
	const mobControlsContainer = document.createElement("div");
	mobControlsContainer.id = "mobControlsContainer";
	if (window.matchMedia("(orientation: landscape)").matches) {
		// Apply flex display style for landscape orientation
		mobControlsContainer.style.display = "flex";
	} else {
		// Apply none display style for portrait orientation
		mobControlsContainer.style.display = "none";
	}
	// mobControlsContainer.style.display = "none";

	const mobSideDiv = document.createElement("div");
	mobSideDiv.setAttribute("class", "mobSideDiv");

	const mobButton = document.createElement("button");
	mobButton.setAttribute("id", "mobSideBtn");

	mobButton.innerHTML = sideBarBtnSvg;

	mobSideDiv.appendChild(mobButton);

	const mobControlSection = document.createElement("div");
	mobControlSection.setAttribute("id", "mobContentToCollapse");

	const mobAnnotationContainer = document.createElement("div");
	mobAnnotationContainer.setAttribute("id", "mobAnnotationContainer");
	// mobAnnotationContainer.style.display = "none";

	const mobAnnotationSpan = document.createElement("span");
	mobAnnotationSpan.textContent = "Annotation";

	const mobAnnotationControls = document.createElement("div");
	mobAnnotationControls.setAttribute("class", "mobAnnotationControls");

	const mobPrevButton = document.createElement("button");
	mobPrevButton.setAttribute("id", "mobHotsportSwipePrevButton");

	mobPrevButton.innerHTML = hotsportSwipePrevBtnSvg;

	const mobInputSpan = document.createElement("span");
	mobInputSpan.setAttribute("id", "hotsportSwipeInput");

	const mobNextButton = document.createElement("button");
	mobNextButton.setAttribute("id", "mobHotsportSwipeNextButton");

	mobNextButton.innerHTML = hotsportSwipeNextBtnSvg;

	mobAnnotationControls.appendChild(mobPrevButton);
	mobAnnotationControls.appendChild(mobInputSpan);
	mobAnnotationControls.appendChild(mobNextButton);

	mobAnnotationContainer.appendChild(mobAnnotationSpan);
	mobAnnotationContainer.appendChild(mobAnnotationControls);

	const mobVariantContainer = document.createElement("div");
	mobVariantContainer.setAttribute("id", "mobVariantContainer");
	// mobVariantContainer.style.display = "none";

	const mobVariantSpan = document.createElement("span");
	mobVariantSpan.textContent = "Colour Variant";

	const select = document.createElement("select");
	select.setAttribute("id", "variant");

	mobVariantContainer.appendChild(mobVariantSpan);
	mobVariantContainer.appendChild(select);

	const mobOtherButtonContainer = document.createElement("div");
	mobOtherButtonContainer.setAttribute("id", "mobOtherButtonContainer");

	const mobAutoRotateContainer = document.createElement("div");
	mobAutoRotateContainer.setAttribute("id", "mobAutoRotateContainer");

	const mobAutoRotateButton = document.createElement("button");
	mobAutoRotateButton.setAttribute("id", "mobAutoRotateButton");
	mobAutoRotateButton.innerHTML = autoRotationSvg;

	const mobAutoRotateSpan = document.createElement("span");
	mobAutoRotateSpan.textContent = "AutoRotate";

	mobAutoRotateContainer.appendChild(mobAutoRotateButton);
	mobAutoRotateContainer.appendChild(mobAutoRotateSpan);

	const mobAnnotationBtnContainer = document.createElement("div");
	mobAnnotationBtnContainer.setAttribute("id", "mobAnnotationBtnContainer");

	const mobAnnotationBtnButton = document.createElement("button");
	mobAnnotationBtnButton.setAttribute("id", "mobAnnotationBtnButton");
	mobAnnotationBtnButton.innerHTML = annotationSvg;

	const mobAnnotationBtnSpan = document.createElement("span");
	mobAnnotationBtnSpan.textContent = "Annotation";

	mobAnnotationBtnContainer.appendChild(mobAnnotationBtnButton);
	mobAnnotationBtnContainer.appendChild(mobAnnotationBtnSpan);

	const mobEnvironmentContainer = document.createElement("div");
	mobEnvironmentContainer.setAttribute("id", "mobEnvironmentContainer");

	const mobEnvironmentButton = document.createElement("button");
	mobEnvironmentButton.setAttribute("id", "mobEnvironmentButton");
	mobEnvironmentButton.innerHTML = environmentSvg;

	const mobEnvironmentSpan = document.createElement("span");
	mobEnvironmentSpan.textContent = "Environment";

	mobEnvironmentContainer.appendChild(mobEnvironmentButton);
	mobEnvironmentContainer.appendChild(mobEnvironmentSpan);

	mobOtherButtonContainer.appendChild(mobAutoRotateContainer);
	mobOtherButtonContainer.appendChild(mobAnnotationBtnContainer);
	mobOtherButtonContainer.appendChild(mobEnvironmentContainer);

	mobControlSection.appendChild(mobAnnotationContainer);
	mobControlSection.appendChild(mobVariantContainer);
	mobControlSection.appendChild(mobOtherButtonContainer);

	mobControlsContainer.appendChild(mobSideDiv);
	mobControlsContainer.appendChild(mobControlSection);

	mobMainContainer.appendChild(mobControlsContainer);
	modelViewer.appendChild(mobMainContainer);

	mobButton.addEventListener("click", () => {
		const mobContentToCollapse = document.getElementById(
			"mobContentToCollapse"
		);
		const mobControlsContainer = document.getElementById(
			"mobControlsContainer"
		);
		const sideBtnIconRight = document.getElementById("sideBtnIconRight");
		const sideBtnIconLeft = document.getElementById("sideBtnIconLeft");
		if (window.matchMedia("(orientation: landscape)").matches) {
			// console.log("mob tongle btn clicked in if condition");
			if (mobContentToCollapse.style.display === "none") {
				mobContentToCollapse.style.display = "flex";
				sideBtnIconRight.style.display = "none";
				sideBtnIconLeft.style.display = "block";
				mobControlsContainer.style.width = "";
			} else {
				mobContentToCollapse.style.display = "none";
				mobControlsContainer.style.width = "30px";
				sideBtnIconLeft.style.display = "none";
				sideBtnIconRight.style.display = "block";
			}
			// Apply flex display style for landscape orientation
		} else {
			mobMainContainer.style.display = "none";
			mobControlsContainer.style.width = "";
			// Apply none display style for portrait orientation
			// mobControlsContainer.style.display = "none";
		}
	});
}
function createMobConfigButton() {
	const mobConfigButton = document.createElement("button");
	mobConfigButton.setAttribute("id", "mobConfigButton");
	mobConfigButton.textContent = "Configure";

	modelViewer.appendChild(mobConfigButton);
	mobConfigButton.addEventListener("click", () => {
		const mobMainContainer = document.getElementById("mobMainContainer");
		const mobContentToCollapse = document.getElementById(
			"mobContentToCollapse"
		);
		const mobControlsContainer = document.getElementById(
			"mobControlsContainer"
		);
		const sideBtnIconLeft = document.getElementById("sideBtnIconLeft");
		const sideBtnIconRight = document.getElementById("sideBtnIconRight");
		mobMainContainer.style.display = "flex";
		mobContentToCollapse.style.display = "flex";
		sideBtnIconLeft.style.display = "block";
		mobControlsContainer.style.width = "";
		sideBtnIconRight.style.display = "none";
	});
}
function createPlayPauseButton() {
	const playButton = document.createElement("button");
	playButton.setAttribute("id", "mobPlayButton");
	playButton.style.display = "none";
	// playButton.innerHTML = playButtonSvg;
	playButton.textContent = "Play Video";

	modelViewer.appendChild(playButton);

	const viewInAr = document.createElement("button");
	viewInAr.setAttribute("slot", "ar-button");
	viewInAr.setAttribute("id", "mobViewInArButton");
	viewInAr.innerHTML = qrAutorSvg;

	const viewInArSpan = document.createElement("span");

	viewInArSpan.textContent = "View in your room";
	viewInAr.appendChild(viewInArSpan);
	modelViewer.appendChild(viewInAr);
}

if (window.matchMedia("(orientation: landscape)").matches) {
	console.log("landscape mood");
} else {
	console.log("poterate mood");
}
