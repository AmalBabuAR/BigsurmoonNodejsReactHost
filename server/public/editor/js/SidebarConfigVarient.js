import {
	UIInput,
	UIPanel,
	UIRow,
	UIText,
	UIBoxType,
	UIButton,
	UIConfButton,
	UIDiv,
	UIElement,
	UITabbedPanel,
} from "./libs/ui.js";
import { SetValueCommand } from "./commands/SetValueCommand.js";
// import { deleteConfig, getConfig } from "./SaveConfigartionFun.js";
import { modelPannel } from "./modelPannel.js";
import { texturePannel } from "./texturePannel.js";

function SidebarConfigVarient(editor) {
	const strings = editor.strings;

	const signals = editor.signals;
	function getQueryParam(param) {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		return urlParams.get(param);
	}

	const container = new UIPanel();
	container.setBorderTop("0");
	container.setPaddingTop("20px");
	container.setDisplay("none");

	// namesf
	const confAndVarianTDiv = new UIDiv();

	const objectNameRow = new UIRow();
	const selectedConfigName = new UIText();
	const selectName = new UIText(
		strings.getKey("sidebar/object/selectedConfiguration")
	);
	selectName.setWidth("90px").setId("confNameHead");

	// signals.callSelectedConfigName.add(function (conf) {
	// 	console.log("++++++++", conf);
	const configName = getQueryParam("configName");
	if (configName !== null) {
		selectedConfigName
			.setWidth("150px")
			.setFontSize("12px")
			.setId("confName")
			.setValue(configName);
		objectNameRow.add(selectName);
		objectNameRow.add(selectedConfigName);
	} else {
		console.log("outside else signale");
		signals.variantArray.add(function (variant) {
			console.log("inside else signale");
			if (variant) {
				selectedConfigName
					.setWidth("150px")
					.setFontSize("12px")
					.setId("confName")
					.setValue(variant);
				objectNameRow.add(selectName);
				objectNameRow.add(selectedConfigName);
			}
		});
	}
	container.add(objectNameRow);

	//ADD CON
	//passing parameter id 1 value, 2, id

	// const addConfigurationButton = new UIConfButton(
	// 	"Add Configuration",
	// 	"BTNconfig"
	// );
	// addConfigurationButton.onClick(() => {
	// 	// Create a new instance of UIBoxType and add it to the container
	// 	const newBoxType = new UIBoxType("Default Name", editor);
	// 	confAndVarianTDiv.add(newBoxType);
	// });
	// confAndVarianTDiv.add(addConfigurationButton);
	// // Add the "Add Configuration" button to the container
	// container.add(confAndVarianTDiv);

	// events
	//how we pass
	// this.signals.checking.dispatch( 'hello' )
	// //how we catch

	// const remove = new UIElement();
	// const variantRow = new UIRow();
	// const variantNameList = [];
	// signals.variantResponse.add(async function (data) {
	// 	if (data !== null) {
	// 		const configNames = await getConfig(data, editor);
	// 		configNames.forEach((configName) => {
	// 			const variantDiv = new UIDiv();
	// 			// remove.removeClass('vareintList')

	// 			const variantNameText = new UIText(configName)
	// 				.setWidth("150px")
	// 				.setFontSize("12px")
	// 				.setId("variantNameText")
	// 				.setClass("vareintList");
	// 			const deleteBTN = new UIButton("Delete Variant").setId("variantBtn");
	// 			deleteBTN.onClick(async () => {
	// 				const data = await deleteConfig(configName);
	// 			});
	// 			variantDiv.add(variantNameText, deleteBTN).setClass("variantDiv");
	// 			variantRow.add(variantDiv).setId("variantListRow");
	// 			container.add(variantRow);
	// 			//}
	// 		});
	// 	}
	// });

	signals.objectSelected.add(function (object) {
		if (object !== null && object.type !== "Scene") {
			console.log("checking the object in event", object);

			container.setDisplay("block");

			// if(object.type !== "Group"){
			modelTabbedPanel.setDisplay("block");
			// }

			// updateUI(object);
		} else {
			container.setDisplay("none");
		}
	});

	const sceneJson = editor.toJSON();
	console.log("check in json of slider", sceneJson.scene);

	// function updateUI(object) {
	// 	// objectType.setValue(object.type);
	// 	// objectName.setValue(object.name);
	// }

	// 	// objectVisible.setValue(object.visible);
	// 	// objectFrustumCulled.setValue(object.frustumCulled);
	// 	// objectRenderOrder.setValue(object.renderOrder);

	// 	// try {
	// 	// 	objectUserData.setValue(JSON.stringify(object.userData, null, "  "));
	// 	// } catch (error) {
	// 	// 	console.log(error);
	// 	// }

	// 	// objectUserData.setBorderColor("transparent");
	// 	// objectUserData.setBackgroundColor("");

	// 	// updateTransformRows(object);
	// }

	//add tabbed panel for model and texture

	const modelTabbedPanel = new UITabbedPanel();

	modelTabbedPanel.setId("modelTab");
	modelTabbedPanel.setDisplay("none");

	const model = new modelPannel(editor);
	const texture = new texturePannel(editor);

	modelTabbedPanel.addTab(
		"model",
		strings.getKey("sidebar/configurations/model"),
		model
	);
	modelTabbedPanel.addTab(
		"texture",
		strings.getKey("sidebar/configurations/texture"),
		texture
	);

	container.add(modelTabbedPanel);

	return container;
}

export { SidebarConfigVarient };
