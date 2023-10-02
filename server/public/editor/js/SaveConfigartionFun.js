function getQueryParam(param) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	return urlParams.get(param);
}

function saveConfig(defaultName, editor, variantName, container) {
	return new Promise((resolve, reject) => {
		const idFromUrl = getQueryParam("id");
		// const projectIDParse = JSON.parse(idFromUrl);

		// console.log(container);
		// console.log(
		// 	`Saving configuration with default name: ${(defaultName, idFromUrl)}`
		// );
		const sceneJson = editor.toJSON();
		// console.log("sceneJson", sceneJson);
		const materialData = sceneJson.scene.materials;
		const textureData = sceneJson.scene.textures;
		const imageData = sceneJson.scene.images;
		const objectData = sceneJson.scene.object;
		// console.log("imageData ++++++++", imageData);

		// Get the project id and the config name
		const configData = {
			variant: variantName,
			configname: defaultName,
			projectId: idFromUrl,
			variantContainer: container,
			object: {
				materials: materialData,
				textures: textureData,
				images: imageData,
				object: objectData,
			},
		};
		// console.log("configdata", configData);
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
				// Handle errors based on their type
				if (error instanceof TypeError) {
					// Network error
					console.error("A network error occurred:", error.message);
					// Perform specific actions for network errors
					// For example, retry the request or show a message to the user.
				} else if (error instanceof SyntaxError) {
					// JSON parsing error
					console.error("JSON parsing error:", error.message);
					// Handle JSON parsing errors
					// Notify the user or take appropriate action.
				} else {
					// Other types of errors
					console.error("An error occurred:", error.message);
					// Handle other types of errors
					// You can provide a generic error message or perform specific actions.
				}
				reject(error.message);
			});
	});
}

function updateConfig(variantName, defaultName, editor) {
	// console.log(variantName, defaultName, editor);
	return new Promise((resolve, reject) => {
		const idFromUrl = getQueryParam("id");
		const sceneJson = editor.toJSON();
		// console.log("sceneJson", sceneJson);
		const materialData = sceneJson.scene.materials;
		const textureData = sceneJson.scene.textures;
		const imageData = sceneJson.scene.images;
		const objectData = sceneJson.scene.object;

		// Get the project id and the config name
		const searchQuery = {
			variant: variantName,
			configname: defaultName,
			projectId: idFromUrl,
		};
		const updateQuery = {
			object: {
				materials: materialData,
				textures: textureData,
				images: imageData,
				object: objectData,
			},
		};
		const reqdata = {
			searchQuery,
			updateQuery,
		};
		// Then send the data to the server with specifying the  type
		fetch(`https://bigsurmoon.com/update_variation`, {
			method: "POST",
			body: JSON.stringify(reqdata),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				resolve(data);
			})
			.catch((error) => {
				console.error("Error:", error, "**", error.message);
				reject(error);
			});
	});
}

function getConfig(data, editor) {
	return new Promise((resolve, reject) => {
		const idFromUrl = getQueryParam("id");
		fetch(`https://bigsurmoon.com/getConfigNames/${idFromUrl}`)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				resolve(data);
			})
			.catch((error) => {
				console.error("Error:", error);
				reject(error);
			});
	});
}

function deleteConfig(variantName, configName) {
	// console.log(configName);
	return new Promise((resolve, reject) => {
		const idFromUrl = getQueryParam("id");
		const deleteData = {
			variantName,
			configName,
			idFromUrl,
		};
		fetch(`https://bigsurmoon.com/deleteConfig/texture`, {
			method: "DELETE",
			body: JSON.stringify(deleteData),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				resolve(data);
			})
			.catch((error) => {
				console.error("Error:", error);
				reject(error);
			});
	});
}

function deleteModel(modelName, container) {
	return new Promise((resolve, reject) => {
		const idFromUrl = getQueryParam("id");
		const deleteData = {
			modelName,
			container,
			idFromUrl,
		};
		fetch(`https://bigsurmoon.com/deleteConfig/model`, {
			method: "DELETE",
			body: JSON.stringify(deleteData),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				resolve(data);
			})
			.catch((error) => {
				console.error("Error:", error);
				reject(error);
			});
	});
}

function getVareint(configName) {
	const id = getQueryParam("id");
	// console.log(id, configName);

	return new Promise((resolve, reject) => {
		fetch(
			`https://bigsurmoon.com/getVareint/?id=${encodeURIComponent(
				id
			)}&config=${encodeURIComponent(configName)}`,
			{
				method: "GET",
			}
		)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				resolve(data);
			})
			.catch((error) => {
				console.error("Error:", error);
				reject(error);
			});
	});
}

export {
	saveConfig,
	getConfig,
	deleteConfig,
	getVareint,
	updateConfig,
	deleteModel,
};
