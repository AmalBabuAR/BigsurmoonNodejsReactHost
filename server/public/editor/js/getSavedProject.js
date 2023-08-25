// function getExistingProjectFromId(editor, id) {
//     console.log('req in get func',editor,'***',id);
// 	return new Promise((resolve, reject) => {
// 		fetch(`http://localhost:5000/generate_scene/${id}`)
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

async function getExistingProjectFromId(editor, id) {
	const signals = editor.signals;
	console.log("req in get func", editor, "***", id);
	try {
		const res = await axios.get(`https://bigsurmoon.com/generate_scene/${id}`);
		//const data = await response.json();
		console.log("data of existingProject", res);
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
