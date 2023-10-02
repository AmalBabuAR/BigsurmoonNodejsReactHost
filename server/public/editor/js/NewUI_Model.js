import { getConfig, saveConfig } from "./SaveConfigartionFun.js";
import { UIButton, UIDiv, UIInput, UISpan } from "./libs/ui.js";

function NewUI_Model(editor) {
	const strings = editor.strings;
	const signals = editor.signals;

	const container = new UIDiv();
	container.setId("newModel");

	const newModelItem = new UIDiv();
	newModelItem.setId("newModelItem");

	// // error message
	// const error = new UIDiv();
	// error.setId("newModelError");
	// error.setTextContent("error occores");
	// // error.style.display = "flex";

	// newModelItem.add(error);

	// header
	const newModelHeader = new UIDiv();
	newModelHeader.setId("newModelHeader");
	// model text
	const modelInputTitle = new UISpan();
	modelInputTitle.setId("modelInputTitle");
	modelInputTitle.setTextContent(
		strings.getKey("sidebar/configurations/modelName")
	);
	newModelHeader.add(modelInputTitle);
	// input
	const modelInput = new UIInput("");
	modelInput.setPlaceholder();
	modelInput.setId("newModelInput");
	newModelHeader.add(modelInput);
	// conform button
	const newModelConfirmBTN = new UIButton();
	newModelConfirmBTN.setId("newModelConfirmBTN");
	// conform icon
	const newModelConfirm = document.createElement("img");
	newModelConfirm.id = "newModelConfirm";
	newModelConfirm.src = "images/tick.svg";
	newModelConfirmBTN.dom.appendChild(newModelConfirm);
	newModelHeader.add(newModelConfirmBTN);
	// click the confirm button
	newModelConfirmBTN.onClick(async function () {
		const inputValue = modelInput.getValue();
		const variantContainer = null;
		const variantName = "ModelVariant";
		callAlert("success", `${inputValue} Model Saving...`);
		if (inputValue) {
			saveModelVariant(inputValue, editor, variantName, variantContainer);
		} else {
			console.log('no inputValue');
		}
	});

	// delete button
	const newModelDeleteBTN = new UIButton();
	newModelDeleteBTN.setId("newModelDeleteBTN");
	// delete icon
	const newModelDelete = document.createElement("img");
	newModelDelete.id = "newModelDelete";
	newModelDelete.src = "images/modelCross.svg";
	newModelDeleteBTN.dom.appendChild(newModelDelete);
	newModelHeader.add(newModelDeleteBTN);

	// click the delete button
	newModelDeleteBTN.onClick(() => {
		variantInputRemove();
	});

	newModelItem.add(newModelHeader);

	container.add(newModelItem);
	
	async function saveModelVariant(
		inputValue,
		editor,
		variantName,
		variantContainer
	) {
		try {
			const data = await saveConfig(
				inputValue,
				editor,
				variantName,
				variantContainer
			);
			const signals = editor.signals;
			// console.log(signals);
			if (data.success) {
				data.variant === "ModelVariant"
					? signals.modelVariantResponse.dispatch(data)
					: signals.textureVariantResponse.dispatch(data);

				variantInputRemove();
			} else {
				console.log(data.message);
				callAlert("info", data.message);
			}
		} catch (error) {
			console.log("model error:", error);
			callAlert("error", 'Server Error')
		}
	}

	function variantInputRemove() {
		// Remove the newModelHeader
		const variantInput = document.getElementById("newModel");
		variantInput.remove();
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


	return container;
}

export { NewUI_Model };
