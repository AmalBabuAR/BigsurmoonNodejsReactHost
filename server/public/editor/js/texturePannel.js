import {
	deleteConfig,
	getConfig,
	getVareint,
	updateConfig,
} from "./SaveConfigartionFun.js";
import {
	UIBoxType,
	UIButton,
	UIConfButton,
	UIDiv,
	UIElement,
	UIPanel,
	UIRow,
	UIText,
	UITextWithCursor,
} from "./libs/ui.js";

function texturePannel(editor) {
	const string = editor.string;
	const signals = editor.signals;

	const container = new UIPanel();
	container.setBorderTop("0");
	container.setPaddingTop("20px");
	container.setDisplay("none");

	const confAndVarianTDiv = new UIDiv();
	const btnDiv = new UIDiv();
	btnDiv.setClass("btnConfDiv");

	//ADD CON
	//passing parameter id 1 value, 2, id
	const addConfigurationButton = new UIConfButton(
		"Add Configuration",
		"BTNconfig"
	);
	addConfigurationButton.onClick(() => {
		// Create a new instance of UIBoxType and add it to the container
		const newBoxType = new UIBoxType("Default Name", editor, "TextureVariant");
		confAndVarianTDiv.add(newBoxType);
	});

	btnDiv.add(addConfigurationButton);

	confAndVarianTDiv.add(btnDiv);
	// Add the "Add Configuration" button to the container
	container.add(confAndVarianTDiv);

	function getQueryParam(param) {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		return urlParams.get(param);
	}
	const configNamesArray = [];
	signals.textureVariantResponse.add(async function (data) {
		console.log('texture in TexturePannel');
		const variantRow = new UIRow();
		if (data !== null) {
			console.log("texturedata+++++++", data);
			// if (data.configname && data.variant) {
			// 	const configName = data.configname;
			// 	const variantName = data.variant;
			// 	const idFromUrl = getQueryParam("id");
			// 	const newFromUrl = getQueryParam("new");
			// 	const baseUrl = `https://bigsurmoon.com/editor/?id=${idFromUrl}&new=${newFromUrl}`;
			// 	console.log("baseUrl", baseUrl, idFromUrl, newFromUrl);
			// 	const queryParams = new URLSearchParams({ configName, variantName });
			// 	const urlWithConfigname = `${baseUrl}&${queryParams.toString()}`;
			// 	console.log("urlWithConfigname", urlWithConfigname);
			// 	window.location.replace(urlWithConfigname);
			// }
			const response = await getConfig(data, editor);
			if (response.success) {
				console.log("-----response------", response);
				response.data.forEach((config) => {
					if (config.variant === "TextureVariant") {
						if (!configNamesArray.includes(config.configname)) {
							configNamesArray.push(config.configname);
							const variantDiv = new UIDiv();

							const variantNameText = new UITextWithCursor(config.configname)
								.setWidth("150px")
								.setFontSize("12px")
								.setId("variantNameText")
								.setClass("vareintList");

							variantNameText.onClick(async () => {
								alert(`clicked the varient ${config.configname}`);

								const idFromUrl = getQueryParam("id");
								const newFromUrl = getQueryParam("new");
								const configName = config.configname;
								const variantName = config.variant;
								const baseUrlClick = `https://bigsurmoon.com/editor/?id=${idFromUrl}&new=${newFromUrl}`;
								console.log("baseUrl", configName, variantName);
								const queryParamsClick = new URLSearchParams({
									configName,
									variantName,
								});
								const urlWithConfignameClick = `${baseUrlClick}&${queryParamsClick.toString()}`;
								console.log("urlWithConfigname", urlWithConfignameClick);
								window.location.replace(urlWithConfignameClick);

								// let call = true;
								// signals.callTheLoader.dispatch(call);
								// const getVareintData = await getVareint(config.configname);
								// console.log("getVareintData", getVareintData);
								// if (getVareintData.success) {
								// 	signals.callExistingProject.dispatch(getVareintData.data);
								// signals.callSelectedConfigName.dispatch(config.configname);
								// }
							});

							const save = new UIButton("Save Variant").setId("reSave");
							save.onClick(async () => {
								try {
									let call = true;
									signals.callTheLoader.dispatch(call);
									console.log(config.variant, config.configname, editor);
									const res = await updateConfig(
										config.variant,
										config.configname,
										editor
									);
									console.log(res);
									if (res.success) {
										signals.stopTheLoader.dispatch(res.success);
										alert(res.message);
									} else {
										signals.stopTheLoader.dispatch(!res.success);
										alert(res.message);
									}
								} catch (error) {
									console.log(error);
								}
							});

							const deleteBTN = new UIButton("Delete Variant").setId(
								"deleteVariantBtn"
							);
							deleteBTN.onClick(async () => {
								confirm("are you sure you want to delete");
								const deleteData = await deleteConfig(
									config.variant,
									config.configname
								);
								if (deleteData.success) {
									alert(deleteData.message);
									const idFromUrl = getQueryParam("id");
									const newFromUrl = getQueryParam("new");
									const baseUrlClick = `https://bigsurmoon.com/editor/?id=${idFromUrl}&new=${newFromUrl}`;
									window.location.replace(baseUrlClick);
									const variantDivToRemove = document.getElementById(
										`${config.configname}`
									);
									if (variantDivToRemove) {
										variantDivToRemove.remove();
									}
								}
							});
							variantDiv
								.add(variantNameText, save, deleteBTN)
								.setClass("textureVariantDiv")
								.setId(config.configname);
							variantRow.add(variantDiv).setId("textureVariantListRow");
							container.add(variantRow);

							const configNameAsNull = getQueryParam("configName");

							if (configNameAsNull === null) {
								const lastVariant =
									configNamesArray[configNamesArray.length - 1];
								console.log("data in the else", lastVariant);
								signals.variantArray.dispatch(lastVariant);
							}
						}
					}
				});
			} else {
				
			}
		}
	});

	signals.objectSelected.add(function (object) {
		if (object !== null && object.type !== "Scene") {
			console.log("checking the object in event", object);

			container.setDisplay("block");

			//  updateUI(object);
		} else {
			container.setDisplay("none");
		}
	});

	const sceneJson = editor.toJSON();
	console.log("check in json of slider", sceneJson.scene);

	// function updateUI(object) {
	// 	objectType.setValue(object.type);
	// 	objectName.setValue(object.name);
	// }

	return container;
}

export { texturePannel };
