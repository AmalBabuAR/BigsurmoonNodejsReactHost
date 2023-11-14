import {
	deleteConfig,
	getConfig,
	updateConfig,
} from "./SaveConfigartionFun.js";
import { getExistingProjectFromId } from "./getSavedProject.js";
import { UIButton, UIDiv, UISpan } from "./libs/ui.js";

function NewUI_Update_Texture(editor, modelName) {
	const strings = editor.strings;
	const signals = editor.signals;
	// function to call the url
	function getQueryParam(param) {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		return urlParams.get(param);
	}
	const container = new UIDiv();
	container.setClass("newTextureContainer");
	const configNamesArray = [];
	signals.textureVariantResponse.add(async function (data) {
		if (data !== null) {
			const response = await getConfig();
			if (response.success) {
				response.data.forEach((texture) => {
					if (
						texture.variant === "TextureVariant" &&
						texture.variantContainer !== null
					) {
						if (!configNamesArray.includes(texture.configname)) {
							configNamesArray.push(texture.configname);
							const textureList = new UIDiv();

							textureList.setClass("newTextureList");
							textureList.setId(`newTextureList${texture.configname}`);
							const selected = getSelectedTextureName();
							if (selected) {
								textureList.setStyle("backgroundColor", ["#1D8EE6"]);
								textureList.setStyle("borderColor", ["transparent"]);
								changeList();
							}
							// if (configNamesArray.length === 1) {
							// 	textureList.setStyle("backgroundColor", ["blue"]);
							// }
							const textureListTitle = new UISpan();
							textureListTitle.setTextContent(texture.configname);
							textureList.add(textureListTitle);

							// edit btn
							const textureEditBtn = new UIButton();
							textureEditBtn.setClass(`newTextureListEditBtn`);
							// pencil icom
							const textureEditIcon = document.createElement("img");
							textureEditIcon.src = "images/pencil2.svg";
							textureEditBtn.dom.appendChild(textureEditIcon);
							if (selected === texture.configname) {
								textureList.add(textureEditBtn);
							}

							// input
							const inputField = document.createElement("input");
							inputField.type = "text";
							inputField.placeholder = `Rename ${texture.configname}`;

							// delete icon
							const textureEditDeleteBtn = new UIButton();
							const textureEditDeleteIcon = document.createElement("img");
							textureEditDeleteIcon.src = "images/modelCross.svg";
							textureEditDeleteBtn.dom.appendChild(textureEditDeleteIcon);

							// resave btn
							const textureResaveBtn = new UIButton();
							textureResaveBtn.addClass("newTextureListResaveBtn");
							const textureResaveIcon = document.createElement("img");
							textureResaveIcon.src = "images/resave.svg";
							textureResaveBtn.dom.appendChild(textureResaveIcon);

							if (selected === texture.configname) {
								textureList.add(textureResaveBtn);
							}
							// main delete btn
							const textureDeleteBtn = new UIButton();
							textureDeleteBtn.addClass("newTextureListDeleteBtn");
							const texttureDeleteIcon = document.createElement("img");
							texttureDeleteIcon.src = "images/modelCross.svg";
							textureDeleteBtn.dom.appendChild(texttureDeleteIcon);
							textureList.add(textureDeleteBtn);
							textureDeleteBtn.onClick(() => {
								deleteTheTexture(texture.configname, texture.variant);
							});

							// edit onclick
							textureEditBtn.onClick(() => {
								textureListTitle.dom.remove();
								textureEditBtn.dom.remove();
								textureDeleteBtn.dom.remove();
								textureList.dom.appendChild(inputField);
								textureList.add(textureEditDeleteBtn);
							});
							// resave ONCLICK
							textureResaveBtn.onClick(async function () {
								const typedValue = inputField.value;

								callAlert("success", `${typedValue} Texture Updating...`);
								const res = await resaveTheTexture(
									typedValue,
									texture.configname,
									texture.variant,
									texture.variantContainer,
									texture.created_at,
									editor
								);

								if (res.type == true && res.config) {
									console.log("not");
								} else if (res) {
									inputField.value = "";
									signals.textureVariantResponse.dispatch("data");
									textureList.dom.remove();
								} else if (!res) {
									callAlert("info", "Server Error");
									inputField.value = "";
									textureList.dom.removeChild(inputField);
									textureEditDeleteBtn.dom.remove();
									textureListTitle.setTextContent(res.configname);
									textureList.add(textureListTitle);
									textureList.add(
										textureEditBtn,
										textureResaveBtn,
										textureDeleteBtn
									);
								}
							});

							// edit delete onclick
							textureEditDeleteBtn.onClick(function () {
								inputField.value = "";
								textureList.dom.removeChild(inputField);
								textureEditDeleteBtn.dom.remove();
								textureList.add(
									textureListTitle,
									textureEditBtn,
									textureResaveBtn,
									textureDeleteBtn
								);
								// signals.textureVariantResponse.dispatch("data");
							});

							// click textureListTitle
							textureListTitle.onClick(() => {
								removeBtn();
								textureList.add(textureEditBtn, textureResaveBtn);
								clickTheTexture(texture.configname, texture.variant);
							});
							// after delete data adding
							signals.textureAfterDelete.add(function (data) {
								if (data === texture.configname) {
									textureList.setStyle("backgroundColor", ["#1D8EE6"]);
									textureList.setStyle("borderColor", ["transparent"]);
									textureList.add(textureEditBtn, textureResaveBtn);
								}
							});

							container.add(textureList);

							// input button eventListeners
							inputField.addEventListener("keydown", function (event) {
								// Disable the function for 'q', 'r', 'f'
								if (
									event.key.toLowerCase() === "w" ||
									event.key.toLowerCase() === "e" ||
									event.key.toLowerCase() === "r" ||
									event.key.toLowerCase() === "z" ||
									event.key.toLowerCase() === "f" ||
									event.key === "Backspace"
								) {
									event.stopPropagation();
								}

								// Handle the backspace key separately
								if (event.key === "Backspace") {
									event.preventDefault();
									// Add your backspace handling logic here
									const currentValue = inputField.value;
									inputField.value = currentValue.slice(0, -1);
								}
							});
						}
					}
				});
			}
		}
	});

	function clickTheTexture(configName, variantName) {
		signals.callTheLoaderContent.dispatch(true);
		const idFromUrl = getQueryParam("id");

		getExistingProjectFromId(editor, idFromUrl, configName, variantName);
	}

	async function resaveTheTexture(
		typedValue,
		configName,
		variantName,
		variantContainer,
		created_at,
		editor
	) {
		if (typedValue.length > 0) {
			const res = await updateConfig(
				configName,
				variantName,
				variantContainer,
				created_at,
				editor,
				typedValue
			);
			selectedTextureName(res.data);

			if (res.success === true) {
				return true;
			} else {
				return false;
			}
		} else {
			const res = await updateConfig(
				configName,
				variantName,
				variantContainer,
				created_at,
				editor
			);

			selectedTextureName(res.data);
			if (res.success === true && res.noTyped === true) {
				const response = { type: res.noTyped, config: res.data };
				return response;
			} else {
				return false;
			}
		}
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
			if (result.isConfirmed) {
				callAlert("success", `${configName} Deleting...`);

				const deleteData = await deleteConfig(variantName, configName);
				if (deleteData.success) {
					const variantDivToRemove = document.getElementById(
						`newTextureList${configName}`
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
	function getSelectedTextureName() {
		const getSelected = localStorage.getItem("selectedTexture");

		return getSelected;
	}
	function selectedTextureName(data) {
		localStorage.setItem("selectedTexture", data);
	}

	function changeList() {
		const preName = document.querySelectorAll(".newTextureList");
		preName.forEach((element) => {
			element.style.backgroundColor = "transparent";
			element.style.borderColor = "#FFF";
		});
		const editBtns = document.querySelectorAll(".newTextureListEditBtn");
		editBtns.forEach((editBtn) => {
			editBtn.remove();
		});
		const resaveBtns = document.querySelectorAll(".newTextureListResaveBtn");
		resaveBtns.forEach((resaveBtn) => {
			resaveBtn.remove();
		});
	}
	function removeBtn() {
		const editBtns = document.querySelectorAll(".newTextureListEditBtn");
		editBtns.forEach((editBtn) => {
			editBtn.remove();
		});
		const resaveBtns = document.querySelectorAll(".newTextureListResaveBtn");
		resaveBtns.forEach((resaveBtn) => {
			resaveBtn.remove();
		});
	}

	return container;
}

export { NewUI_Update_Texture };
