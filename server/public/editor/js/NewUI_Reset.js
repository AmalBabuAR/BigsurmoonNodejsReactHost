import { UIButton, UIPanel } from "./libs/ui.js";

function NewUI_Reset(editor) {
	
	const strings = editor.strings;

	const container = new UIPanel();
	container.setId("Reset");

	// translate / rotate / scale

	const resetIcon = document.createElement("img");
	resetIcon.title = strings.getKey("menubar/reset");
	resetIcon.src = "images/cross.svg";

	const reset = new UIButton();
    reset.setId('resetBTN')
	reset.dom.appendChild(resetIcon);
	reset.onClick(function () {
		if (confirm("Any unsaved data will be lost. Are you sure?")) {
			editor.clear();
		}
	});
	container.add(reset);

	return container;
}

export { NewUI_Reset };
