import { UIPanel, UIToolbarButton } from "./libs/ui.js";

function NewUI_Toolbar(editor) {
	const signals = editor.signals;
	const strings = editor.strings;

	const container = new UIPanel();
	container.setId("newToolbar");

	// translate / rotate / scale

	const translateIcon = document.createElement("img");
	translateIcon.title = strings.getKey("toolbar/translate");
	translateIcon.src = "images/translate.svg";

	const translate = new UIToolbarButton();
	translate.dom.className = "toolbarButton selected";
	translate.dom.appendChild(translateIcon);
	translate.onClick(function () {
		signals.transformModeChanged.dispatch("translate");
	});
	container.add(translate);

	const rotateIcon = document.createElement("img");
	rotateIcon.title = strings.getKey("toolbar/rotate");
	rotateIcon.src = "images/rotate.svg";

	const rotate = new UIToolbarButton();
	rotate.dom.appendChild(rotateIcon);
	rotate.onClick(function () {
		signals.transformModeChanged.dispatch("rotate");
	});
	container.add(rotate);

	const scaleIcon = document.createElement("img");
	scaleIcon.title = strings.getKey("toolbar/scale");
	scaleIcon.src = "images/scale.svg";

	const scale = new UIToolbarButton();
	scale.dom.appendChild(scaleIcon);
	scale.onClick(function () {
		signals.transformModeChanged.dispatch("scale");
	});
	container.add(scale);

	signals.transformModeChanged.add(function (mode) {
		translate.dom.classList.remove("selected");
		rotate.dom.classList.remove("selected");
		scale.dom.classList.remove("selected");

		switch (mode) {
			case "translate":
				translate.dom.classList.add("selected");
				break;
			case "rotate":
				rotate.dom.classList.add("selected");
				break;
			case "scale":
				scale.dom.classList.add("selected");
				break;
		}
	});
    return container;
}

export { NewUI_Toolbar };
