import { UIPanel, UIToolbarButton } from "./libs/ui.js";
import { RemoveObjectCommand } from './commands/RemoveObjectCommand.js';

function NewUI_ReduUndo(editor) {
	const config = editor.config;
	const strings = editor.strings;

	const container = new UIPanel();
	container.setClass("newEdit");

	//undo
	const undo = document.createElement("img");
	undo.title = strings.getKey("menubar/edit/undo");
	undo.src = "images/undo.svg";

	const undoBTN = new UIToolbarButton();
	undoBTN.setClass('editGroupBTN')
	undoBTN.dom.appendChild(undo);
	undoBTN.onClick(function () {
		editor.undo();
	});
	container.add(undoBTN);

	//redo
	const redo = document.createElement("img");
	redo.title = strings.getKey("menubar/edit/redo");
	redo.src = "images/redo.svg";

	const redoBTN = new UIToolbarButton();
	redoBTN.setClass('editGroupBTN')
	redoBTN.dom.appendChild(redo);
	redoBTN.onClick(function () {
		editor.redo();
	});
	container.add(redoBTN);

    //delete 
    const deleteSVG = document.createElement("img");
	deleteSVG.title = strings.getKey("menubar/edit/delete");
	deleteSVG.src = "images/trash.svg";

    const deleteBTN = new UIToolbarButton();
	deleteBTN.setClass('editGroupBTN')
	deleteBTN.setId('deleteBTN')
	deleteBTN.dom.appendChild(deleteSVG);
	deleteBTN.onClick(function () {
		const object = editor.selected;

		if ( object !== null && object.parent !== null ) {

			editor.execute( new RemoveObjectCommand( editor, object ) );

		}
	});
    container.add(deleteBTN);


	return container;
}

export { NewUI_ReduUndo };
