import { UIButton, UIPanel, UISpan } from "./libs/ui.js";

function NewUI_Publish( editor) {
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
    button.setClass('preAndPubBtn')
	button.setId("publishBTN");
	button.dom.appendChild(importImg);
	button.add(title);
	container.add(button);

    return container;
}

export { NewUI_Publish };