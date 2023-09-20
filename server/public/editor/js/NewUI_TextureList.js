import { deleteConfig, getConfig } from "./SaveConfigartionFun.js";
import { UIButton, UIDiv, UISpan } from "./libs/ui.js";

function NewUI_TextureList(editor, modelName) {
	const strings = editor.strings;
	const signals = editor.signals;
	console.log("modelName in NewUI_TextureList :", modelName);

	const container = new UIDiv();
	container.setId("textureList");
	// function to call the url
	function getQueryParam(param) {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		return urlParams.get(param);
	}
	const configNamesArray = [];
	signals.textureVariantResponse.add(async function (data) {
		console.log("textureVariantResponse in NewUI_TextureList :", data);
		if (data !== null) {
			const response = await getConfig();
			if (response.success) {
				response.data.forEach((texture) => {
					if (
						texture.variant === "TextureVariant" &&
						texture.variantContainer !== null
					) {
						const modelNameFromVariant = getModelNameFromVariant(
							texture.variantContainer
						);
						if (modelNameFromVariant === modelName) {
							console.log(texture);
							if (!configNamesArray.includes(texture.configname)) {
								configNamesArray.push(texture.configname);
								// header
								const textureListHeader = new UIDiv();
								textureListHeader.setId("textureListHeader");
								// text
								const textureListTitle = new UISpan();
								textureListTitle.setTextContent(texture.configname);
								// adding text into header
								textureListHeader.add(textureListTitle);
								// click textureListTitle
								textureListTitle.onClick(() => {
									
									clickTheTexture(texture.configname, texture.variant);
								});
								// delete button
								const textureListDeleteBTN = new UIButton();
								textureListDeleteBTN.setId("textureListDeleteBTN");
								// delete icon
								const textureListDeleteIcon = document.createElement("img");
								textureListDeleteIcon.id = "textureListDeleteIcon";
								textureListDeleteIcon.src = "images/modelCross.svg";
								// adding delete icon in delete btn
								textureListDeleteBTN.dom.appendChild(textureListDeleteIcon);
								// adding delete btn in header
								textureListHeader.add(textureListDeleteBTN);
								// delete btn click
								textureListDeleteBTN.onClick(() => {
									deleteTheTexture(texture.configname, texture.variant);
								})
								// adding header into container
								container.add(textureListHeader);
							}
						}
					}
				});
			}
		}
	});
	function clickTheTexture(configName, variantName) {
		const idFromUrl = getQueryParam("id");
		const newFromUrl = getQueryParam("new");
		const baseUrlClick = `https://bigsurmoon.com/editor/?id=${idFromUrl}&new=${newFromUrl}`;
		const queryParamsClick = new URLSearchParams({
			configName,
			variantName,
		});
		const urlWithConfignameClick = `${baseUrlClick}&${queryParamsClick.toString()}`;
		window.location.replace(urlWithConfignameClick);
	}
	async function deleteTheTexture(configName, variantName) {
		const deleteData = await deleteConfig(
			variantName,
			configName
		);
		if (deleteData.success) {
			alert(deleteData.message);
			const idFromUrl = getQueryParam("id");
			const newFromUrl = getQueryParam("new");
			const baseUrlClick = `https://bigsurmoon.com/editor/?id=${idFromUrl}&new=${newFromUrl}`;
			window.location.replace(baseUrlClick);
			const variantDivToRemove = document.getElementById(
				`${configName}`
			);
			if (variantDivToRemove) {
				variantDivToRemove.remove();
			}
		}
	}

	function getModelNameFromVariant(variantContainer) {
		const constantPart = "ModelContainer";
		return variantContainer.replace(constantPart, "");
	}

	return container;
}

export { NewUI_TextureList };
