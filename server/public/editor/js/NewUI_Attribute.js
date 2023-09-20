import { NewUI_AttributeObject } from "./NewUI_AttributeObject.js";
import { UIDiv } from "./libs/ui.js";

function NewUI_Attribute(editor) {
	const strings = editor.strings;
	const signals = editor.signals;

	const container = new UIDiv();
	container.setId("attribute");

	const attributeItem = new UIDiv();
	attributeItem.setId("attributeItem");

	// header
	const attributeHeader = new UIDiv();
	attributeHeader.setId("attributeHeader");
	attributeHeader.setTextContent(strings.getKey("sidebar/attribute"));
	attributeHeader.onClick(function () {
		toggleAccordion();
	});
	const attributeIcon = document.createElement("img");
	attributeIcon.src = "images/dropUp.svg";
	attributeHeader.dom.appendChild(attributeIcon);
	// adding header in list
	attributeItem.add(attributeHeader);

	//content
	const attributeContent = new UIDiv();
	attributeContent.setId("attributeContent");

	// adding properties in Content
	attributeContent.add(new NewUI_AttributeObject(editor));

	// adding content in list
	attributeItem.add(attributeContent);

	container.add(attributeItem);

	function toggleAccordion() {
		const content = document.querySelector("#attributeContent");
		const icon = document.querySelector("#attributeHeader img");
		const header = document.querySelector("#attributeHeader");
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

export { NewUI_Attribute };
