import { saveConfig } from "./SaveConfigartionFun.js";
import { UIButton, UIDiv, UIInput, UISpan } from "./libs/ui.js";

function NewUI_Texture(editor, model) {
	const strings = editor.strings;

	const container = new UIDiv();
	container.setId("newtexture");

	//input header Div
	const newTextureHeader = new UIDiv();
	newTextureHeader.setId("newtextureHeader");
	// texture text
	const textureInputTitle = new UISpan();
	textureInputTitle.setId("textureInputTitle");
	textureInputTitle.setTextContent(
		strings.getKey("sidebar/configurations/textureName")
	);
	// adding title into header
	newTextureHeader.add(textureInputTitle);
	// input
	const textureInput = new UIInput("");
	textureInput.setPlaceholder();
	textureInput.setId("newTextureInput");
	// adding input into header
	newTextureHeader.add(textureInput);
	// confirm button
	const newTextureConfirmBTN = new UIButton();
	newTextureConfirmBTN.setId("newTextureConfirmBTN");
	// confirm icon
	const newTextureConfirm = document.createElement("img");
	newTextureConfirm.id = "newTextureConfirm";
	newTextureConfirm.src = "images/tick.svg";
	// adding icon into btn
	newTextureConfirmBTN.dom.appendChild(newTextureConfirm);
	// adding btn into header
	newTextureHeader.add(newTextureConfirmBTN);
	// click the confirm button
	newTextureConfirmBTN.onClick(async function () {
		const inputValue = textureInput.getValue();
		const variantContainer = `ModelContainer${model}`;
		const variantName = "TextureVariant";
		console.log(inputValue);
		if (inputValue) {
			saveModelVariant(inputValue, editor, variantName, variantContainer);
		} else {
		}
	});

	// delete button
	const newTextureDeleteBTN = new UIButton();
	newTextureDeleteBTN.setId("newTextureDeleteBTN");
	// delete icon
	const newTextureDelete = document.createElement("img");
	newTextureDelete.id = "newTextureDelete";
	newTextureDelete.src = "images/modelCross.svg";
	// adding icon into btn
	newTextureDeleteBTN.dom.appendChild(newTextureDelete);
	// adding btn into header
	newTextureHeader.add(newTextureDeleteBTN);

	// click the delete button
	newTextureDeleteBTN.onClick(() => {
		variantInputRemove();
	});
	// adding header into container
	container.add(newTextureHeader);

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
			console.log(data);
			if (data.success) {
				data.variant === "ModelVariant"
					? signals.modelVariantResponse.dispatch(data)
					: signals.textureVariantResponse.dispatch(data);

				variantInputRemove();
			} else {
				console.log(data.message);
			}
		} catch (error) {
			console.log("model error:", error);
		}
	}
	function variantInputRemove() {
		// Remove the newModelHeader
		const variantInput = document.getElementById("newtexture");
		variantInput.remove();
	}

	return container;
}

export { NewUI_Texture };
