import { UINewColor, UINumber, UIRow, UIText } from "./libs/ui.js";
import { SetMaterialColorCommand } from "./commands/SetMaterialColorCommand.js";
import { SetMaterialValueCommand } from "./commands/SetMaterialValueCommand.js";

function NewUI_SidebarMaterialColorProperty(editor, property, name, id,img) {
	const signals = editor.signals;

	const container = new UIRow();
	container.setId(id);

	// icon
	const icon = document.createElement("img");
	icon.src = `images/${img}`;
	container.dom.appendChild(icon);

	container.add(new UIText(name).setWidth("125px"));

	const color = new UINewColor().onInput(onChange);

	container.add(color);

	let intensity;

	if (property === "emissive") {
		intensity = new UINumber(1)
			.setWidth("30px")
			.setRange(0, Infinity)
			.onChange(onChange);
		container.add(intensity);
	}

	let object = null;
	let material = null;

	function onChange() {
		if (material[property].getHex() !== color.getHexValue()) {
			editor.execute(
				new SetMaterialColorCommand(
					editor,
					object,
					property,
					color.getHexValue(),
					0 /* TODO: currentMaterialSlot */
				)
			);
		}

		if (intensity !== undefined) {
			if (material[`${property}Intensity`] !== intensity.getValue()) {
				editor.execute(
					new SetMaterialValueCommand(
						editor,
						object,
						`${property}Intensity`,
						intensity.getValue(),
						/* TODO: currentMaterialSlot*/ 0
					)
				);
			}
		}
	}

	function update() {
		if (object === null) return;
		if (object.material === undefined) return;

		material = object.material;

		if (property in material) {
			color.setHexValue(material[property].getHexString());

			if (intensity !== undefined) {
				intensity.setValue(material[`${property}Intensity`]);
			}

			container.setDisplay("");
		} else {
			container.setDisplay("none");
		}
	}

	//

	signals.objectSelected.add(function (selected) {
		object = selected;

		update();
	});

	signals.materialChanged.add(update);

	return container;
}

export { NewUI_SidebarMaterialColorProperty };
