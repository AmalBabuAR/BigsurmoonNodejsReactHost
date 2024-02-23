import {
	UIButton,
	UICheckbox,
	UIDiv,
	UIPanel,
	UISpan,
	UITextArea,
} from "./libs/ui.js";

function NewUI_Publish(editor) {
	const strings = editor.strings;
	const container = new UIPanel();
	container.setClass("publishMenu");

	const importImg = document.createElement("img");
	importImg.src = "images/publish.svg";
	const title = new UISpan();
	title.setClass("title");
	title.setId("preAndPubTitle");
	title.setTextContent(strings.getKey("menubar/publish"));

	const button = new UIButton();
	button.setClass("preAndPubBtn");
	button.setId("publishBTN");
	button.dom.appendChild(importImg);
	button.add(title);
	// btn click
	button.onClick(() => {
		console.log("publish btn clicked");
		toggleEmbedDiv();
	});

	// embed box
	const embed = new UIDiv();
	embed.setId("embed");
	embed.setStyle(["display"], ["none"]);
	// input div
	const embedInputDiv = new UIDiv();
	embedInputDiv.setId("embedInputDiv");
	// input
	const textInput = new UITextArea();
	textInput.setId("embedTextInput");

	embedInputDiv.add(textInput);
	// copy btn icon
	const copyBtnImg = document.createElement("img");
	copyBtnImg.src = "images/copyClipboard.svg";
	// copy btn title
	const copyBtntitle = new UISpan();
	copyBtntitle.setId("copyBtntitle");
	copyBtntitle.setTextContent("Copy to Clipboard");
	// copy btn
	const copyBtn = new UIButton();
	copyBtn.setId("copyBtn");
	copyBtn.dom.appendChild(copyBtnImg);
	copyBtn.add(copyBtntitle);

	copyBtn.onClick(() => {
		copyTextToClipboard();
	});

	embedInputDiv.add(copyBtn);

	embed.add(embedInputDiv);

	// controll div
	const controllDiv = new UIDiv();
	controllDiv.setId("controllDiv");

	// font div
	const sizeDiv = new UIDiv();
	sizeDiv.setId("sizeDiv");

	// sizeTitle
	const sizeTitle = new UISpan();
	sizeTitle.setId("sizeTitle");
	sizeTitle.setTextContent("Width ✕ Height");
	// input div
	const inputDiv = new UIDiv();
	inputDiv.setId("inputDiv");

	sizeDiv.add(sizeTitle);
	sizeDiv.add(inputDiv);

	controllDiv.add(sizeDiv);

	// codeFormat
	const codeFormatDiv = new UIDiv();
	codeFormatDiv.setId("codeFormatDiv");

	// codeFormat Title
	const codeFormatTitle = new UISpan();
	codeFormatTitle.setId("codeFormatTitle");
	codeFormatTitle.setTextContent("Code Format");
	codeFormatDiv.add(codeFormatTitle);

	// codeFormat heading
	const codeFormatHeading = new UISpan();
	codeFormatHeading.setId("codeFormatHeading");
	codeFormatHeading.setTextContent("Use URL code");
	codeFormatDiv.add(codeFormatHeading);

	// codeFormat checkbox
	const codeFormatCheckbox = new UICheckbox();
	codeFormatCheckbox.setId("codeFormatCheckbox");

	codeFormatDiv.add(codeFormatCheckbox);

	controllDiv.add(codeFormatDiv);
	embed.add(controllDiv);

	container.add(embed);
	container.add(button);

	function toggleEmbedDiv() {
		const content = document.querySelector("#embed");
		if (content.style.display === "none") {
			content.style.display = "flex";
		} else {
			content.style.display = "none";
		}
	}

	let inputCreated = false;
	document.addEventListener("DOMContentLoaded", function () {
		if (!inputCreated) {
			const checkbox = document.getElementById("codeFormatCheckbox");

			// Add a click event listener to the checkbox

			const inputDiv = document.getElementById("inputDiv");

			if (inputDiv) {
				const widthInput = document.createElement("input");
				widthInput.type = "number";
				widthInput.className = "input";
				widthInput.id = "widthInput";
				widthInput.value = "640";

				const heightInput = document.createElement("input");
				heightInput.type = "number";
				heightInput.className = "input";
				heightInput.id = "heightInput";
				heightInput.value = "480";

				inputDiv.appendChild(widthInput);
				inputDiv.appendChild(heightInput);

				// width value - when current
				const widthCurrentValue = document.getElementById("widthInput");
				const widthDefaultValue = widthCurrentValue.value;
				// height value - when current
				const heightCurrentValue = document.getElementById("heightInput");
				const heightDefaultValue = heightCurrentValue.value;
				embedCode(widthDefaultValue, heightDefaultValue);
				// width value - when type
				widthInput.addEventListener("input", function (event) {
					const heightCurrentValue = document.getElementById("heightInput");
					const heightDefaultValue = heightCurrentValue.value;
					const typedValue = event.target.value;
					embedCode(typedValue, heightDefaultValue);
				});
				// width value - when backspace
				widthInput.addEventListener("keydown", function (event) {
					const heightCurrentValue = document.getElementById("heightInput");
					const heightDefaultValue = heightCurrentValue.value;
					if (event.key === "Backspace") {
						event.stopPropagation();
					}
					if (event.key === "Backspace") {
						event.preventDefault();
						// Manually erase the last character from the input
						const currentValue = widthInput.value;
						widthInput.value = currentValue.slice(0, -1);
						embedCode(widthInput.value, heightDefaultValue);
					}
				});
				// height value - when type
				heightInput.addEventListener("input", function (event) {
					const widthCurrentValue = document.getElementById("widthInput");
					const widthDefaultValue = widthCurrentValue.value;
					const typedValue = event.target.value;
					// console.log("Typed value: " + typedValue);
					embedCode(widthDefaultValue, typedValue);
				});
				// height value - when backspace
				heightInput.addEventListener("keydown", function (event) {
					const widthCurrentValue = document.getElementById("widthInput");
					const widthDefaultValue = widthCurrentValue.value;
					if (event.key === "Backspace") {
						event.stopPropagation();
					}
					if (event.key === "Backspace") {
						event.preventDefault();
						// Manually erase the last character from the input
						const currentValue = heightInput.value;
						heightInput.value = currentValue.slice(0, -1);

						embedCode(widthDefaultValue, heightInput.value);
					}
				});

				checkbox.addEventListener("click", function () {
					if (checkbox.checked) {
						embedCode();
						widthInput.disabled = true;
						heightInput.disabled = true;
					} else {
						widthInput.disabled = false;
						heightInput.disabled = false;
						embedCode(widthInput.value, heightInput.value);
					}
				});

				inputCreated = true;
			}
			function embedCode(width, height) {
				const booleanValue = codeFormatCheckbox.getValue();
				const idFromUrl = getQueryParam("id");
				let baseUrl = `https://bigsurmoon.com/configurator/?id=${idFromUrl}`;
				if (booleanValue) {
					textInput.setValue(baseUrl);
				} else {
					textInput.setValue(
						`<div> <iframe src="${baseUrl}" frameborder="0" width="${width}" height="${height}" > </iframe> </div>`
					);
				}
			}
		}
	});

	// copy btn click
	function copyTextToClipboard() {
		// Get the text area element
		const textArea = document.getElementById("embedTextInput");

		// Create a range and select the text within the textarea
		const range = document.createRange();
		range.selectNode(textArea);
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);

		// Copy the selected text to the clipboard
		document.execCommand("copy");

		// Deselect the text
		window.getSelection().removeAllRanges();
	}

	// for the url in the browser
	function getQueryParam(param) {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		return urlParams.get(param);
	}
	function copyTextToClipboard() {
		// Get the text area element
		const textArea = document.getElementById("embedTextInput");

		// Create a range and select the text within the textarea
		const range = document.createRange();
		range.selectNode(textArea);
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);

		// Copy the selected text to the clipboard
		document.execCommand("copy");

		// Deselect the text
		window.getSelection().removeAllRanges();
	}

	function copyTextToClipboard() {
		// console.log("btn clicked for copy");
		// Get the text area element
		const textArea = document.getElementById("embedTextInput");

		textArea.select();

		// Copy the selected text to the clipboard
		document.execCommand("copy");
	}

	return container;
}

export { NewUI_Publish };
