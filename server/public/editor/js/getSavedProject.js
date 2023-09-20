async function getExistingProjectFromId(editor, id, configName, variantName) {
	const signals = editor.signals;
	// console.log("req in get func", editor, "***", id);
	try {
		const res = await axios.get(
			`https://bigsurmoon.com/generate_scene/?id=${id}&config=${encodeURIComponent(
				configName
			)}&variant=${encodeURIComponent(variantName)}`
		);
		//const data = await response.json();
		// console.log("data of existingProject", res);
		if (res.data.existing === false) {
			const existingProject = true;
			signals.modelVariantResponse.dispatch(existingProject);
			signals.textureVariantResponse.dispatch(existingProject);
			signals.stopTheLoader.dispatch(existingProject);
		} else {
			const existingProject = true;
			signals.callExistingProject.dispatch(res.data);
			signals.modelVariantResponse.dispatch(existingProject);
			signals.textureVariantResponse.dispatch(existingProject);
		}
		//   return data;
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
}

export { getExistingProjectFromId };
