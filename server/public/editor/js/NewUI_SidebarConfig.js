import { NewUI_Attribute } from "./NewUI_Attribute.js";
import { NewUI_Configurations } from "./NewUI_Configurations.js";
import { NewUI_Material } from "./NewUI_Material.js";
import { UIDiv } from "./libs/ui.js";

function NewUI_SidebarConfig(editor) {
	const strings = editor.strings;

	const container = new UIDiv();
	container.setId("newUI_SidebarConfig");

	// config
	container.add(new NewUI_Configurations(editor));
	// material
	container.add(new NewUI_Material(editor));
	// Attribute
	container.add(new NewUI_Attribute(editor));

	return container;
}

export { NewUI_SidebarConfig };
