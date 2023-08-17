import { UIButton, UIDiv, UIPanel } from "./libs/ui.js";

function Preview(editor){

    const container = new UIPanel();
	container.setBorderTop("0");
	container.setPaddingTop("20px");
	container.setDisplay("block");
    

    function getQueryParam(param) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get(param);
    }
    

    const button = new UIButton("Preview Project").setId('previewProject')
    button.onClick(() => {
        const idFromUrl = getQueryParam("id");
        console.log('BUTTON',idFromUrl);
        const url = `https://bigsurmoon.com/editor/ModelViewer/?id=${idFromUrl}`;
        
        // Redirect to the new URL
        window.location.href = url
    })

    // div.add(button)

    container.add(button).setClass('previewBTN')

    return container

}


export { Preview };