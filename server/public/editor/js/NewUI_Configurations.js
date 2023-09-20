import { NewUI_Model } from "./NewUI_Model.js";
import { NewUI_ModelList } from "./NewUI_ModelList.js";
import { UIButton, UIDiv, UISpan } from "./libs/ui.js";

function NewUI_Configurations(editor) {
	const strings = editor.strings;
	const signals = editor.signals;

	const container = new UIDiv();
	container.setId("configuration");

	const configurationItem = new UIDiv();
	configurationItem.setId("configurationItem");

	// header
	const configurationHeader = new UIDiv();
	configurationHeader.setId("configurationHeader");
	configurationHeader.setTextContent(strings.getKey("sidebar/configurations"));
	configurationHeader.onClick(function () {
		toggleAccordion();
	});
	const configurationIcon = document.createElement("img");
	configurationIcon.src = "images/dropUp.svg";
	configurationHeader.dom.appendChild(configurationIcon);

	configurationItem.add(configurationHeader);

	//content

	const configurationContent = new UIDiv();
	configurationContent.setId("configurationContent");

	// sub div for adding things when config is clicked
	const configurationContentSub = new UIDiv();
	configurationContentSub.setId("configurationContentSub");
	// creating btm
	const createVariantBtn = new UIButton();
	createVariantBtn.dom.className = "createVariantBtn";
	//button icon
	const createVariantBtnIcon = document.createElement("img");
	createVariantBtnIcon.src = "images/plus.svg";
	//button title
	const createVariantBtnTitle = new UISpan();
	createVariantBtnTitle.setTextContent(
		strings.getKey("sidebar/configurations/createVariant")
	);
	// adding icon & title into btn
	createVariantBtn.dom.appendChild(createVariantBtnIcon);
	createVariantBtn.add(createVariantBtnTitle);

	//button click
	createVariantBtn.onClick(function () {
		configurationContentSub.add(new NewUI_Model(editor));
	});

	//adding btn inside the sub div
	configurationContentSub.add(createVariantBtn);
    

	configurationContentSub.add(new NewUI_ModelList(editor));

	configurationContent.add(configurationContentSub);

	//playground
	configurationItem.add(configurationContent);

	container.add(configurationItem);

	function toggleAccordion() {
		const content = document.querySelector("#configurationContent");
		const icon = document.querySelector("#configurationHeader img");
		const header = document.querySelector("#configurationHeader");
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

export { NewUI_Configurations };
