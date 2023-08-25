import { UITabbedPanel, UISpan } from "./libs/ui.js";
import { Preview } from "./Preview.js";
// import { SidebarScene } from "./Sidebar.Scene.js";
import { SidebarConfigVarient } from "./SidebarConfigVarient.js";

function SidebarConfig(editor) {

	const strings = editor.strings;

	const container = new UITabbedPanel();
    
	container.setId("sidebarConfig");
	// const scene = new UISpan().add(new SidebarScene(editor));

	// container.addTab("scene", strings.getKey("sidebar/scene"), scene);
	// container.select("scene");
    const configurations = new SidebarConfigVarient( editor )
	const preview = new Preview(editor)

    container.addTab( 'configurations', strings.getKey( 'sidebar/configurations' ), configurations );
	container.addTab( 'preview', strings.getKey( 'sidebar/preview' ), preview );

	container.select( 'configurations' );

	return container;
}

export { SidebarConfig };
