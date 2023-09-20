import { NewUI_MaterialColor } from "./NewUI_MaterialColor.js";
import { NewUI_MaterialMap } from "./NewUI_MaterialMap.js";
import { UIDiv } from "./libs/ui.js";

function NewUI_Material(editor) {
	const strings = editor.strings;
	const signals = editor.signals;

	const container = new UIDiv();
	container.setId("material");

	const materialItem = new UIDiv();
	materialItem.setId("materialItem");

	// header
	const materialHeader = new UIDiv();
	materialHeader.setId("materialHeader");
	materialHeader.setTextContent(strings.getKey("sidebar/material"));
	materialHeader.onClick(function () {
		toggleAccordion();
	});
	const materialIcon = document.createElement("img");
	materialIcon.src = "images/dropUp.svg";
	materialHeader.dom.appendChild(materialIcon);
	// adding header in list
	materialItem.add(materialHeader);

	//content
	const materialContent = new UIDiv();
	materialContent.setId("materialContent");

	// adding map in Content
	materialContent.add(new NewUI_MaterialMap(editor));

	// adding color in Content
	materialContent.add(new NewUI_MaterialColor(editor));

	// adding content in list
	materialItem.add(materialContent);
	// adding item in container
	container.add(materialItem);

	function toggleAccordion() {
		const content = document.querySelector("#materialContent");
		const icon = document.querySelector("#materialHeader img");
		const header = document.querySelector("#materialHeader");
		if (content.style.display === "none") {
			content.style.display = "flex";
			icon.style.transform = "rotate(180deg)";
			header.style.borderBottom = "none";
		} else {
			content.style.display = "none";
			icon.style.transform = "rotate(0deg)";
			header.style.borderBottom = "0.5px solid #313131";
		}
	}

	return container;
}

export { NewUI_Material };
