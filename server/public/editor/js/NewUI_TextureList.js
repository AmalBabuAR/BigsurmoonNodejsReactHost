import { deleteConfig, getConfig } from "./SaveConfigartionFun.js";
import { getExistingProjectFromId } from "./getSavedProject.js";
import { UIButton, UIDiv, UISpan } from "./libs/ui.js";

function NewUI_TextureList(editor, modelName) {
	const strings = editor.strings;
	const signals = editor.signals;
	// console.log("modelName in NewUI_TextureList :", modelName);

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
		// console.log("textureVariantResponse in NewUI_TextureList :", data);
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
							// console.log(texture);
							if (!configNamesArray.includes(texture.configname)) {
								configNamesArray.push(texture.configname);
								// header
								const textureListHeader = new UIDiv();
								textureListHeader.setClass("textureListHeader");
								textureListHeader.setId(
									`textureListHeader${texture.configname}`
								);
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
		signals.callTheLoaderContent.dispatch(true);
		const idFromUrl = getQueryParam("id");
		// const newFromUrl = getQueryParam("new");
		// const baseUrlClick = `https://bigsurmoon.com/editor/?id=${idFromUrl}&new=${newFromUrl}`;
		// const queryParamsClick = new URLSearchParams({
		// 	configName,
		// 	variantName,
		// });
		// const urlWithConfignameClick = `${baseUrlClick}&${queryParamsClick.toString()}`;
		// window.location.replace(urlWithConfignameClick);
		getExistingProjectFromId(editor, idFromUrl, configName, variantName);
	}
	async function deleteTheTexture(configName, variantName) {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#1D8EE6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(async (result) => {
			// console.log("result of seer", result);
			if (result.isConfirmed) {
				callAlert("success", `${configName} Deleting...`);

				const deleteData = await deleteConfig(variantName, configName);
				if (deleteData.success) {
					const variantDivToRemove = document.getElementById(
						`textureListHeader${configName}`
					);
					if (variantDivToRemove) {
						variantDivToRemove.remove();
					}
					// alert(deleteData.message);
					const idFromUrl = getQueryParam("id");
					// const newFromUrl = getQueryParam("new");
					// const baseUrlClick = `http://localhost:5000/editor/?id=${idFromUrl}&new=${newFromUrl}`;
					// window.location.replace(baseUrlClick);
					let configdataNull = "null";
					let variantNameNull = "null";
					getExistingProjectFromId(
						editor,
						idFromUrl,
						configdataNull,
						variantNameNull
					);
				}
			}
		});
	}

	function callAlert(iconAlert, value) {
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 5000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener("mouseenter", Swal.stopTimer);
				toast.addEventListener("mouseleave", Swal.resumeTimer);
			},
		});

		Toast.fire({
			icon: iconAlert,
			title: value,
		});
	}

	function getModelNameFromVariant(variantContainer) {
		const constantPart = "ModelContainer";
		return variantContainer.replace(constantPart, "");
	}

	return container;
}

export { NewUI_TextureList };
