// import { Editor } from "./Editor.js";

import { URL_COM } from "../constant.js";

// const editor = new Editor();

// window.editor = editor; // Expose editor to Console

function getQueryParam(param) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	return urlParams.get(param);
}

function saveConfig(defaultName, editor, variantName) {
	return new Promise((resolve, reject) => {
		const idFromUrl = getQueryParam("id");
		// const projectIDParse = JSON.parse(idFromUrl);
		console.log(
			`Saving configuration with default name: ${(defaultName, idFromUrl)}`
		);
		const sceneJson = editor.toJSON();
		console.log("sceneJson", sceneJson);
		const materialData = sceneJson.scene.materials;
		const textureData = sceneJson.scene.textures;
		const imageData = sceneJson.scene.images;
		const objectData = sceneJson.scene.object;

		// Get the project id and the config name
		const configData = {
			variant: variantName,
			configname: defaultName,
			projectId: idFromUrl,
			object: {
				materials: materialData,
				textures: textureData,
				images: imageData,
				object: objectData,
			},
		};
		console.log("configdata", configData);
		// Then send the data to the server with specifying the  type
		fetch(`https://bigsurmoon.com/save_variation`, {
			method: "POST",
			body: JSON.stringify(configData),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				console.error("Error:", error, "**", error.message);
				reject(error);
			});
	});
}

// async function saveConfig(defaultName, editor, variantName) {
// 	try {
// 	  const idFromUrl = getQueryParam("id");
// 	  // const projectIDParse = JSON.parse(idFromUrl);
// 	  console.log(`Saving configuration with default name: ${defaultName, idFromUrl}`);
// 	  const sceneJson = editor.toJSON();
// 	  console.log("sceneJson", sceneJson);
// 	  const materialData = sceneJson.scene.materials;
// 	  const textureData = sceneJson.scene.textures;
// 	  const imageData = sceneJson.scene.images;
// 	  const objectData = sceneJson.scene.object;

// 	  const configData = {
// 		variant: variantName,
// 		configname: defaultName,
// 		projectId: idFromUrl,
// 		object: {
// 		  materials: materialData,
// 		  textures: textureData,
// 		  images: imageData,
// 		  object: objectData,
// 		},
// 	  };
// 	  console.log("configdata", configData);

// 	  const response = await fetch(`${URL_COM}/save_variation`, {
// 		method: "post",
// 		mode: "cors",
// 		headers: {
// 		  "Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(configData),
// 	  });

// 	  if (!response.ok) {
// 		throw new Error("Network response was not ok");
// 	  }
// 	  console.log("response",response);
// 	  const data = await response.json();
// 	  console.log('data in save conf',data);
// 	  return data;
// 	} catch (error) {
// 	  console.error("Error:", error);
// 	  throw error;
// 	}
//   }

//==============================================

// async function saveConfig(defaultName, editor, variantName) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const idFromUrl = getQueryParam("id");
//       console.log(`Saving configuration with default name: ${defaultName, idFromUrl}`);
//       const sceneJson = editor.toJSON();
//       console.log("sceneJson", sceneJson);
//       const materialData = sceneJson.scene.materials;
//       const textureData = sceneJson.scene.textures;
//       const imageData = sceneJson.scene.images;
//       const objectData = sceneJson.scene.object;

//       const configData = {
//         variant: variantName,
//         configname: defaultName,
//         projectId: idFromUrl,
//         object: {
//           materials: materialData,
//           textures: textureData,
//           images: imageData,
//           object: objectData,
//         },
//       };
//       console.log("configdata", configData);

//       const response = await axios.post(`${URL_COM}/save_variation`, configData);
// 	  console.log(response);
//       resolve(response.data);
//     } catch (error) {
//       console.error("Error:", error);
//       reject(error);
//     }
//   });
// }

//==============================================

function getConfig(data, editor) {
	return new Promise((resolve, reject) => {
		const idFromUrl = getQueryParam("id");
		fetch(`https://bigsurmoon.com/getConfigNames/${idFromUrl}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.response);
				resolve(data.response);
			})
			.catch((error) => {
				console.error("Error:", error);
				reject(error);
			});
	});
}

function deleteConfig(configName) {
	console.log(configName);
	return new Promise((resolve, reject) => {
		fetch(`https://bigsurmoon.com/deleteConfig/${configName}`, {
			method: "DELETE",
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				resolve(data);
			})
			.catch((error) => {
				console.error("Error:", error);
				reject(error);
			});
	});
}

export { saveConfig, getConfig, deleteConfig };
