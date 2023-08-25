import { deleteConfig, getConfig } from "./SaveConfigartionFun.js";
import {
	UIBoxType,
	UIButton,
	UIConfButton,
	UIDiv,
	UIElement,
	UIPanel,
	UIRow,
	UIText,
} from "./libs/ui.js";

function modelPannel(editor) {
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
		const newBoxType = new UIBoxType("Default Name", editor, "ModelVariant");
		confAndVarianTDiv.add(newBoxType);
	});

	btnDiv.add(addConfigurationButton);

	confAndVarianTDiv.add(btnDiv);
	// Add the "Add Configuration" button to the container
	container.add(confAndVarianTDiv);

	const configNamesArray = [];

	signals.modelVariantResponse.add(async function (data) {
		const variantRow = new UIRow();

		if (data !== null) {
			const response = await getConfig(data, editor);
			response.forEach((config) => {
				if (config.variant === "ModelVariant") {
					if (!configNamesArray.includes(config.configname)) {
						configNamesArray.push(config.configname);

						const variantDiv = new UIDiv();

						const variantNameText = new UIText(config.configname)
							.setWidth("150px")
							.setFontSize("12px")
							.setId("variantNameText")
							.setClass("vareintList");
						const deleteBTN = new UIButton("Delete Variant").setId(
							"deleteVariantBtn"
						);
						deleteBTN.onClick(async () => {
							alert("are you sure you want to delete");
							const deleteData = await deleteConfig(config.configname);
							if (deleteData.success) {
								alert(deleteData.message);
								const variantDivToRemove = document.getElementById(
									`${config.configname}`
								);
								if (variantDivToRemove) {
									variantDivToRemove.remove();
								}
							}
						});
						variantDiv
							.add(variantNameText, deleteBTN)
							.setClass("modelVariantDiv")
							.setId(config.configname);
						variantRow.add(variantDiv).setId("modelVariantListRow");
						container.add(variantRow);
					}
				}
			});
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

export { modelPannel };
