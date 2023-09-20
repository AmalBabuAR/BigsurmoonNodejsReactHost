import { NewUI_Texture } from "./NewUI_Texture.js";
import { NewUI_TextureList } from "./NewUI_TextureList.js";
import { getConfig } from "./SaveConfigartionFun.js";
import { UIButton, UIDiv, UISpan } from "./libs/ui.js";

function NewUI_ModelList(editor) {
	const strings = editor.strings;
	const signals = editor.signals;

	const container = new UIDiv();
	container.setId("newModelList");
	const configNamesArray = [];
	signals.modelVariantResponse.add(async function (data) {
		console.log("modelVariantResponse in NewUI_ModelList :", data);
		if (data !== null) {
			const response = await getConfig();
			console.log(response);
			if (response.success) {
				response.data.forEach((model) => {
					if (model.variant === "ModelVariant") {
						if (!configNamesArray.includes(model.configname)) {
							configNamesArray.push(model.configname);
							// Create the list for header and content
							const newModelItemList = new UIDiv();
							newModelItemList.setId("newModelItemList");
							// header
							const newModelListHeader = new UIDiv();
							newModelListHeader.setClass("newModelListHeader");
							newModelListHeader.setId(`${model.configname}Header`);
							// dropdown button
							const modelDropDownBtn = new UIButton();
							modelDropDownBtn.setClass("modelDropDownBtn");
							modelDropDownBtn.setId(`${model.configname}Btn`);
							// dropdown icon
							const modelDropDown = document.createElement("img");
							modelDropDown.src = "images/dropDown.svg";
							// adding icon in dropdown btn
							modelDropDownBtn.dom.appendChild(modelDropDown);
							// btn click
							modelDropDownBtn.onClick(function () {
								toggleAccordion(model.configname);
							});
							// adding drop in header
							newModelListHeader.add(modelDropDownBtn);
							// model text
							const modelInputTitleList = new UISpan();
							modelInputTitleList.setId("modelInputTitleList");
							modelInputTitleList.setTextContent(
								strings.getKey("sidebar/configurations/modelName")
							);
							// adding text in the header
							newModelListHeader.add(modelInputTitleList);
							// model Name
							const modelInputNameList = new UISpan();
							modelInputNameList.setId("modelInputTitleList");
							modelInputNameList.setTextContent(model.configname);
							// adding modelName in the header
							newModelListHeader.add(modelInputNameList);
							// pencil button
							const newModelConfirmListBTN = new UIButton();
							newModelConfirmListBTN.setId("newModelConfirmListBTN");
							// conform icon
							const newModelConfirmList = document.createElement("img");
							newModelConfirmList.id = "newModelConfirmList";
							newModelConfirmList.src = "images/pencil.svg";
							// adding icon in confirm btn
							newModelConfirmListBTN.dom.appendChild(newModelConfirmList);
							// adding confirm btn in header
							newModelListHeader.add(newModelConfirmListBTN);
							// delete button
							const newModelDeleteListBTN = new UIButton();
							newModelDeleteListBTN.setId("newModelDeleteListBTN");
							// delete icon
							const newModelDeleteList = document.createElement("img");
							newModelDeleteList.id = "newModelDeleteList";
							newModelDeleteList.src = "images/modelCross.svg";
							// adding delete icon in delete btn
							newModelDeleteListBTN.dom.appendChild(newModelDeleteList);
							// adding delete btn in header
							newModelListHeader.add(newModelDeleteListBTN);
							// addin header in the list
							newModelItemList.add(newModelListHeader);
							// content
							const newModelListContent = new UIDiv();
							newModelListContent.setClass("newModelListContent");
							newModelListContent.setId(`${model.configname}Content`);
							// creating btm
							const createTextureBtn = new UIButton();
							createTextureBtn.dom.className = "createTextureBtn";

							//button icon
							const createTextureBtnIcon = document.createElement("img");
							createTextureBtnIcon.src = "images/plus.svg";
							//button title
							const createTextureBtnTitle = new UISpan();
							createTextureBtnTitle.setTextContent(
								strings.getKey("sidebar/configurations/createTexture")
							);
							// adding icon & title into btn
							createTextureBtn.dom.appendChild(createTextureBtnIcon);
							createTextureBtn.add(createTextureBtnTitle);
							// adding btn in the content
							newModelListContent.add(createTextureBtn);
							// btn clicked
							createTextureBtn.onClick(function () {
								newModelListContent.add(
									new NewUI_Texture(editor, model.configname)
								);
							});
							// adding texture List
							newModelListContent.add(
								new NewUI_TextureList(editor, model.configname)
							);
							// adding content in the list
							newModelItemList.add(newModelListContent);
							// full list is clicked
							// const header = document.getElementById(`${model.configname}Header`);
							// newModelItemList.onClick(() => {
							// 	newModelListHeader.setStyle("backgroundColor", ["red"])
							// });

							// adding list in the container
							container.add(newModelItemList);
						}
					}
				});
			}
		} else {
			const removeNewModelList = document.getElementById("newModelList");
			removeNewModelList.remove();
		}
		const trigger = true;
		signals.textureVariantResponse.dispatch(trigger);
	});

	function toggleAccordion(name) {
		const content = document.querySelector(`#${name}Content`);
		const btn = document.querySelector(`#${name}Btn`);
		const header = document.querySelector(`#${name}Header`);

		if (content.style.display === "none") {
			content.style.display = "flex";
			header.style.borderRadius = "10px 10px 0 0";
			btn.style.transform = "rotate(0deg)";
		} else {
			content.style.display = "none";
			header.style.borderRadius = "10px";
			btn.style.transform = "rotate(180deg)";
		}
	}
	// function clickModelConfig(name) {
	// 	console.log("called function");
	// 	const newModelItemList = document.getElementById("newModelItemList");
	// 	const newModelListHeader = document.getElementById(`${name}Header`);
	// 	newModelItemList.addEventListener("click", function () {
	// 		// newModelListHeader.style.backgroundColor = "red";
	// 	});
	// }

	return container;
}

export { NewUI_ModelList };
