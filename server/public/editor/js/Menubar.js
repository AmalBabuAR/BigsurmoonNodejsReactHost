import { UIPanel } from "./libs/ui.js";

// import { MenubarAdd } from './Menubar.Add.js';
import { MenubarEdit } from "./Menubar.Edit.js";
import { MenubarFile } from "./Menubar.File.js";
import { NewUI_AnimationPlay } from "./NewUI_AnimationPlay.js";
import { NewUI_MenubarImport } from "./NewUI_MenubarImport.js";
import { NewUI_Publish } from "./NewUI_Publish.js";
import { NewUI_ReduUndo } from "./NewUI_ReduUndo.js";
import { NewUI_Reset } from "./NewUI_Reset.js";
import { NewUI_Toolbar } from "./NewUI_Toolbar.js";
// import { MenubarExamples } from './Menubar.Examples.js';
// import { MenubarView } from './Menubar.View.js';
// import { MenubarHelp } from './Menubar.Help.js';
// import { MenubarPlay } from './Menubar.Play.js';
// import { MenubarStatus } from './Menubar.Status.js';
import { Preview } from "./Preview.js";

function Menubar(editor) {
	const container = new UIPanel();
	container.setId("menubar");

	container.add(new NewUI_MenubarImport(editor));
	container.add(new NewUI_Toolbar(editor))
	container.add(new NewUI_AnimationPlay(editor))
	container.add(new NewUI_ReduUndo(editor))
	container.add(new Preview(editor));
	container.add(new NewUI_Publish(editor))
	container.add(new NewUI_Reset(editor))
	
	// container.add(new MenubarFile(editor));
	// container.add(new MenubarEdit(editor));
	// container.add( new MenubarAdd( editor ) );
	// container.add( new MenubarPlay( editor ) );
	// container.add( new MenubarExamples( editor ) );
	// container.add( new MenubarView( editor ) );
	// container.add( new MenubarHelp( editor ) );

	// container.add( new MenubarStatus( editor ) );

	//BSM-dev adding preview btn in menubar

	return container;
}

export { Menubar };
