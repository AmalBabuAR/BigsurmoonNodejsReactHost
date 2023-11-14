import { NewUI_Update_Texture } from "./NewUI_Update_Texture.js";
import { saveConfig } from "./SaveConfigartionFun.js";
import { UIButton, UIDiv, UISpan } from "./libs/ui.js";

function NewUI_Update_Configurations(editor) {
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
	createVariantBtn.dom.className = "createNewVariantBtn";
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

	// input button
	const inputVariantBtn = new UIButton();
	inputVariantBtn.dom.className = "createNewVariantBtn";

	// input icon div
	const inputIconDiv = new UIButton();

	//input icon
	const inputIconIcon = document.createElement("img");
	inputIconIcon.src = "images/modelCross.svg";
	// adding input icon
	inputIconDiv.dom.appendChild(inputIconIcon);

	// btn click
	const inputField = document.createElement("input");
	inputField.type = "text";
	inputField.placeholder = "Enter Texture";

	// btn click
	createVariantBtn.onClick(function () {
		createVariantBtn.dom.remove();

		// Append the input field to the button's DOM
		inputVariantBtn.dom.appendChild(inputField);
		inputVariantBtn.add(inputIconDiv);
		configurationContentSub.add(inputVariantBtn);

		// Focus on the input field for immediate interaction
		inputField.focus();
	});

	// Event listener for the input field to capture keyboard events

	// onclick to the close btn of input
	inputIconDiv.onClick(function () {
		inputVariantBtn.dom.remove();
		configurationContentSub.add(createVariantBtn);
	});

	//adding btn inside the sub div
	configurationContentSub.add(createVariantBtn);

	configurationContentSub.add(new NewUI_Update_Texture(editor));

	configurationContent.add(configurationContentSub);

	//playground
	configurationItem.add(configurationContent);

	container.add(configurationItem);

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

		if (event.key === "Enter") {
			const inputValue = inputField.value;
			const variantContainer = `ModelContainerDefault`;
			const variantName = "TextureVariant";
			if (inputValue) {
				callAlert("success", `${inputValue} Texture Saving...`);
				saveTextureVarient(inputValue, editor, variantName, variantContainer);
				signals.selectedTextureName.dispatch(inputValue);
			}
		}
	});

	function toggleAccordion() {
		const content = document.querySelector("#configurationContent");
		const icon = document.querySelector("#configurationHeader img");
		const header = document.querySelector("#configurationHeader");
		if (content.style.display === "none") {
			content.style.display = "flex";
			icon.style.transform = "rotate(0deg)";
			header.style.borderBottom = "none";
		} else {
			content.style.display = "none";
			icon.style.transform = "rotate(180deg)";
			header.style.borderBottom = "0.5px solid #313131";
		}
	}

	async function saveTextureVarient(
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

			if (data.success) {
				data.variant === "ModelVariant"
					? signals.modelVariantResponse.dispatch(data)
					: signals.textureVariantResponse.dispatch(data);
				selectedTextureName(data.configname);
				signals.selectedTextureName.dispatch();
				inputVariantBtn.dom.remove();
				configurationContentSub.add(createVariantBtn);
			} else {
				callAlert("info", data.message);
			}
		} catch (error) {
			console.log("model error:", error);
			callAlert("error", "Server Error");
		}
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

	async function selectedTextureName(data) {
		localStorage.setItem("selectedTexture", data);
	}

	return container;
}

export { NewUI_Update_Configurations };
