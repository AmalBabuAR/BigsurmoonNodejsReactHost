// function getExistingProjectFromId(editor, id) {
//     console.log('req in get func',editor,'***',id);
// 	return new Promise((resolve, reject) => {
// 		fetch(`https://bigsurmoon.com/generate_scene/${id}`)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				console.log('data in the function',data);
// 				resolve(data);
// 			})
// 			.catch((error) => {
// 				console.error("Error:", error);
// 				reject(error);
// 			});
// 	});
// }

async function getExistingProjectFromId(editor, id, configName, variantName) {
	const signals = editor.signals;
	console.log("req in get func", editor, "***", id, configName, variantName);
	try {
		// const res = await axios.get(
		// 	`hhttp://192.168.29.217:5000/generate_scene/?id=${id}&config=${encodeURIComponent(
		// 		configName
		// 	)}&variant=${encodeURIComponent(variantName)}`
		// );
		const res = await axios.get(
			`https://bigsurmoon.com/generate_scene/?id=${id}&config=${encodeURIComponent(
				configName
			)}&variant=${encodeURIComponent(variantName)}`
		);

		//const data = await response.json();
		console.log("data of existingProject", res);
		if (res.data.existing === false) {
			const existingProject = true;
			signals.modelVariantResponse.dispatch(existingProject);
			signals.textureVariantResponse.dispatch(existingProject);
			signals.stopTheLoader.dispatch(existingProject);
		} else {
			const existingProject = true;
			console.log(res.data);
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
