// import * as THREE from "three";
import { UIButton, UIPanel, UISpan } from "./libs/ui.js";

function NewUI_MenubarImport(editor) {
	const strings = editor.strings;
	const container = new UIPanel();
	container.setClass("newImport");

	//import form
	const form = document.createElement("form");
	form.style.display = "none";
	document.body.appendChild(form);

	const fileInput = document.createElement("input");
	fileInput.multiple = true;
	fileInput.type = "file";
	fileInput.addEventListener("change", function () {
		editor.loader.loadFiles(fileInput.files);
		form.reset();
	});
	form.appendChild(fileInput);

	//import svg
	const importImg = document.createElement("img");
	importImg.src = "images/importArrow.svg";

	const title = new UISpan();
	title.setClass("title");
	title.setId("importTitle");
	title.setTextContent(strings.getKey("menubar/import"));

	const importBtn = new UIButton();
	importBtn.dom.className = "importButton";
	importBtn.dom.appendChild(importImg);
	importBtn.add(title);

	importBtn.onClick(function () {
		fileInput.click();
	});

	container.add(importBtn);
	return container;
}

export { NewUI_MenubarImport };
