import { UIButton, UIDiv, UIPanel } from "./libs/ui.js";

function Preview(editor) {
	const strings = editor.strings;
	const container = new UIPanel();
	container.setClass("previewMenu");
	// container.setBorderTop("0");
	// container.setPaddingTop("20px");
	// container.setDisplay("block");
	const title = new UIPanel();
	title.setClass("title");
	title.setId("previewTitle");
	title.setTextContent(strings.getKey("menubar/preview"));
	title.onClick(() => {
		const idFromUrl = getQueryParam("id");
		// console.log("BUTTON", idFromUrl);
		const url = `https://bigsurmoon.com/editor/ModelViewer/?id=${idFromUrl}`;

		// Redirect to the new URL
		// window.location.href = url
		window.open(url, "_blank");
	});

	container.add(title);

	function getQueryParam(param) {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		return urlParams.get(param);
	}
	return container;

	// const button = new UIButton("Preview Project").setId("previewProject");
	// button.onClick(() => {
	// 	const idFromUrl = getQueryParam("id");
	// 	console.log("BUTTON", idFromUrl);
	// 	const url = `https://bigsurmoon.com/editor/ModelViewer/?id=${idFromUrl}`;

	// 	// Redirect to the new URL
	// 	// window.location.href = url
	// 	window.open(url, "_blank");
	// });

	// div.add(button)

	// container.add(button).setClass("previewBTN");
}

export { Preview };
