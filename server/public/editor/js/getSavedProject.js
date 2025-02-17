async function getExistingProjectFromId(editor, id, configName, variantName) {
	const signals = editor.signals;
	// console.log("req in get func", editor, "***", id, configName, variantName);

	if (configName === null && variantName === null) {
		try {
			signals.callTheLoaderContent.dispatch(true);
			let configdataNull = "null";
			let variantNameNull = "null";
			const res = await axios.get(
				`https://bigsurmoon.com/generate_scene/?id=${id}&config=${encodeURIComponent(
					configdataNull
				)}&variant=${encodeURIComponent(variantNameNull)}`
			);

			//const data = await response.json();
			// console.log("data of existingProject", res);
			if (res.data.output) {
				const existingProject = true;
				// console.log(res.data);
				getExistingProjectCall(true);
				signals.callExistingProject.dispatch(res.data.output);
				selectedTextureName(res.data.configName);
				uiChange(res.data.configName, signals);
				signals.modelVariantResponse.dispatch(existingProject);
				signals.textureVariantResponse.dispatch(existingProject);
				signals.callTheLoaderContent.dispatch(false);
			} else if (res.data.existing === false) {
				const existingProject = true;
				getExistingProjectCall(false);
				signals.modelVariantResponse.dispatch(existingProject);
				signals.textureVariantResponse.dispatch(existingProject);
				signals.stopTheLoader.dispatch(existingProject);
				signals.callTheLoaderContent.dispatch(false);
			} else if (res.data) {
				const existingProject = true;
				// console.log(res.data);
				getExistingProjectCall(true);
				signals.callExistingProject.dispatch(res.data);
				signals.modelVariantResponse.dispatch(existingProject);
				signals.textureVariantResponse.dispatch(existingProject);
				signals.callTheLoaderContent.dispatch(false);
			}
			//   return data;
		} catch (error) {
			console.error("Error in first try of getExistingProjectFromId:", error);
			throw error;
		}
	} else {
		try {
			signals.callTheLoaderContent.dispatch(true);
			const res = await axios.get(
				`https://bigsurmoon.com/generate_scene/?id=${id}&config=${encodeURIComponent(
					configName
				)}&variant=${encodeURIComponent(variantName)}`
			);
			// console.log("data of existingProject", res);
			if (res.data.existing === false) {
				const existingProject = true;
				getExistingProjectCall(false);
				signals.modelVariantResponse.dispatch(existingProject);
				signals.textureVariantResponse.dispatch(existingProject);
				signals.stopTheLoader.dispatch(existingProject);
				signals.callTheLoaderContent.dispatch(false);
			} else if (res.data.output) {
				const existingProject = true;
				// console.log(res.data);
				getExistingProjectCall(true);
				signals.callExistingProject.dispatch(res.data.output);
				selectedTextureName(res.data.configName);
				uiChange(res.data.configName, signals);
				signals.selectedTextureName.dispatch();
				signals.modelVariantResponse.dispatch(existingProject);
				signals.textureVariantResponse.dispatch(existingProject);
				signals.callTheLoaderContent.dispatch(false);
			} else if (res.data) {
				const existingProject = true;
				// console.log(res.data);
				getExistingProjectCall(true);
				signals.callExistingProject.dispatch(res.data);
				signals.modelVariantResponse.dispatch(existingProject);
				signals.textureVariantResponse.dispatch(existingProject);
				signals.callTheLoaderContent.dispatch(false);
			}
		} catch (error) {
			console.error("Error in second try of getExistingProjectFromId:", error);
			throw error;
		}
	}
}

function selectedTextureName(data) {
	// console.log("selectedTextureName", data);
	localStorage.setItem("selectedTexture", data);
}

function uiChange(selected, signals) {
	// console.log("uiselected", selected);
	if (selected) {
		const name = document.getElementById(`newTextureList${selected}`);
		const preName = document.querySelectorAll(".newTextureList");
		preName.forEach((element) => {
			element.style.backgroundColor = "transparent";
			element.style.borderColor = "#FFF";
		});

		if (name) {
			// console.log("name is dispatch");
			// name.style.backgroundColor = "#1D8EE6";
			// name.style.borderColor = "transparent";
			signals.textureAfterDelete.dispatch(selected);
		}
	}
}

function getExistingProjectCall(data) {
	localStorage.setItem("swCall", data);
}

export { getExistingProjectFromId };
