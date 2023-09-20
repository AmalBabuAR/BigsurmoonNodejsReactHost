import {
	UIButton,
	UIDiv,
	UIPanel,
	UISpan,
	UIText,
	UIToolbarButton,
} from "./libs/ui.js";

function Preview(editor) {
	const strings = editor.strings;

	const container = new UIPanel();
	container.setClass("previewMenu");

	const importImg = document.createElement("img");
	importImg.src = "images/play.svg";
	const title = new UISpan();
	title.setClass("title");
	title.setId("preAndPubTitle");
	title.setTextContent(strings.getKey("menubar/preview"));

	const button = new UIButton();
	button.setClass('preAndPubBtn')
	button.setId("previewBTN");
	button.dom.appendChild(importImg);
	button.add(title);
	

	button.onClick(() => {
		const idFromUrl = getQueryParam("id");
		console.log("BUTTON", idFromUrl);
		const url = `https://bigsurmoon.com/editor/ModelViewer/?id=${idFromUrl}`;

		// Redirect to the new URL
		// window.location.href = url
		window.open(url, "_blank");
	});

	function getQueryParam(param) {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		return urlParams.get(param);
	}

	container.add(button);

	return container;
}

export { Preview };
