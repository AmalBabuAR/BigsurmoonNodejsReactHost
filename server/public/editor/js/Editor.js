import * as THREE from "three";

import { Config } from "./Config.js";
import { Loader } from "./Loader.js";
import { History as _History } from "./History.js";
import { Strings } from "./Strings.js";
import { Storage as _Storage } from "./Storage.js";
import { Selector } from "./Viewport.Selector.js";

var _DEFAULT_CAMERA = new THREE.PerspectiveCamera(50, 1, 0.01, 1000);
_DEFAULT_CAMERA.name = "Camera";
_DEFAULT_CAMERA.position.set(0, 5, 10);
_DEFAULT_CAMERA.lookAt(new THREE.Vector3());
//BSM - Added hardcoded project id

//calling the id of the project
function getQueryParam(param) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	return urlParams.get(param);
}

// Extract the id from the URL
const idFromUrl = getQueryParam("id");

function convertToStandard(oldMaterial) {
	let newMaterial = new THREE.MeshStandardMaterial();

	// Common properties
	if (oldMaterial.color) newMaterial.color.copy(oldMaterial.color);
	if (oldMaterial.map) newMaterial.map = oldMaterial.map;
	if (oldMaterial.lightMap) newMaterial.lightMap = oldMaterial.lightMap;
	if (oldMaterial.lightMapIntensity !== undefined)
		newMaterial.lightMapIntensity = oldMaterial.lightMapIntensity;
	if (oldMaterial.aoMap) newMaterial.aoMap = oldMaterial.aoMap;
	if (oldMaterial.aoMapIntensity !== undefined)
		newMaterial.aoMapIntensity = oldMaterial.aoMapIntensity;
	if (oldMaterial.emissive) newMaterial.emissive.copy(oldMaterial.emissive);
	if (oldMaterial.emissiveMap)
		newMaterial.emissiveMap = oldMaterial.emissiveMap;
	if (oldMaterial.emissiveIntensity !== undefined)
		newMaterial.emissiveIntensity = oldMaterial.emissiveIntensity;
	if (oldMaterial.bumpMap) newMaterial.bumpMap = oldMaterial.bumpMap;
	if (oldMaterial.bumpScale !== undefined)
		newMaterial.bumpScale = oldMaterial.bumpScale;
	if (oldMaterial.normalMap) newMaterial.normalMap = oldMaterial.normalMap;
	if (oldMaterial.normalMapType !== undefined)
		newMaterial.normalMapType = oldMaterial.normalMapType;
	if (oldMaterial.displacementMap)
		newMaterial.displacementMap = oldMaterial.displacementMap;
	if (oldMaterial.displacementScale !== undefined)
		newMaterial.displacementScale = oldMaterial.displacementScale;
	if (oldMaterial.displacementBias !== undefined)
		newMaterial.displacementBias = oldMaterial.displacementBias;
	if (oldMaterial.envMap) newMaterial.envMap = oldMaterial.envMap;
	if (oldMaterial.envMapIntensity !== undefined)
		newMaterial.envMapIntensity = oldMaterial.envMapIntensity;
	if (oldMaterial.refractionRatio !== undefined)
		newMaterial.refractionRatio = oldMaterial.refractionRatio;

	// Properties specific to standard and physical materials
	if (oldMaterial.roughnessMap)
		newMaterial.roughnessMap = oldMaterial.roughnessMap;
	if (oldMaterial.metalnessMap)
		newMaterial.metalnessMap = oldMaterial.metalnessMap;
	if (oldMaterial.roughness !== undefined)
		newMaterial.roughness = oldMaterial.roughness;
	if (oldMaterial.metalness !== undefined)
		newMaterial.metalness = oldMaterial.metalness;

	return newMaterial;
}

const Projectid = idFromUrl;

function Editor() {
	const Signal = signals.Signal; // eslint-disable-line no-undef

	this.signals = {
		// script

		editScript: new Signal(),

		// player

		startPlayer: new Signal(),
		stopPlayer: new Signal(),

		// vr

		toggleVR: new Signal(),
		exitedVR: new Signal(),

		// notifications

		editorCleared: new Signal(),

		savingStarted: new Signal(),
		savingFinished: new Signal(),

		transformModeChanged: new Signal(),
		snapChanged: new Signal(),
		spaceChanged: new Signal(),
		rendererCreated: new Signal(),
		rendererUpdated: new Signal(),

		sceneBackgroundChanged: new Signal(),
		sceneEnvironmentChanged: new Signal(),
		sceneFogChanged: new Signal(),
		sceneFogSettingsChanged: new Signal(),
		sceneGraphChanged: new Signal(),
		sceneRendered: new Signal(),

		cameraChanged: new Signal(),
		cameraResetted: new Signal(),

		geometryChanged: new Signal(),

		objectSelected: new Signal(),
		objectFocused: new Signal(),

		objectAdded: new Signal(),
		objectChanged: new Signal(),
		objectRemoved: new Signal(),

		cameraAdded: new Signal(),
		cameraRemoved: new Signal(),

		helperAdded: new Signal(),
		helperRemoved: new Signal(),

		materialAdded: new Signal(),
		materialChanged: new Signal(),
		materialRemoved: new Signal(),

		scriptAdded: new Signal(),
		scriptChanged: new Signal(),
		scriptRemoved: new Signal(),

		windowResize: new Signal(),

		showGridChanged: new Signal(),
		showHelpersChanged: new Signal(),
		refreshSidebarObject3D: new Signal(),
		historyChanged: new Signal(),

		viewportCameraChanged: new Signal(),
		viewportShadingChanged: new Signal(),

		intersectionsDetected: new Signal(),

		//BSM dev added 3 signals
		modelVariantResponse: new Signal(),
		textureVariantResponse: new Signal(),
		callExistingProject: new Signal(),
		stopTheLoader: new Signal(),
		callTheLoader: new Signal(),
		callTheVarientWhenExistPro: new Signal(),
		callSelectedConfigName: new Signal(),
		variantArray: new Signal()
	};

	this.config = new Config();
	this.history = new _History(this);
	this.storage = new _Storage();
	this.strings = new Strings(this.config);
	this.selector = new Selector(this);

	this.loader = new Loader(this);

	this.camera = _DEFAULT_CAMERA.clone();

	this.scene = new THREE.Scene();
	this.scene.name = "Scene";

	this.sceneHelpers = new THREE.Scene();

	this.object = {};
	this.geometries = {};
	this.materials = {};
	this.textures = {};
	this.scripts = {};

	this.materialsRefCounter = new Map(); // tracks how often is a material used by a 3D object

	this.mixer = new THREE.AnimationMixer(this.scene);

	this.selected = null;
	this.helpers = {};

	this.cameras = {};

	this.viewportCamera = this.camera;
	this.viewportShading = "default";

	this.addCamera(this.camera);
}

Editor.prototype = {
	setScene: function (scene) {
		this.scene.uuid = scene.uuid;
		this.scene.name = scene.name;

		this.scene.background = scene.background;
		this.scene.environment = scene.environment;
		this.scene.fog = scene.fog;
		this.scene.backgroundBlurriness = scene.backgroundBlurriness;
		this.scene.backgroundIntensity = scene.backgroundIntensity;

		this.scene.userData = JSON.parse(JSON.stringify(scene.userData));

		// avoid render per object

		this.signals.sceneGraphChanged.active = false;

		while (scene.children.length > 0) {
			this.addObject(scene.children[0]);
		}

		this.signals.sceneGraphChanged.active = true;
		this.signals.sceneGraphChanged.dispatch();
	},

	//

	addObject: function (object, parent, index) {
		var scope = this;
		// BSM dev calling the loader
		let call = true;
		this.signals.callTheLoader.dispatch(call);
		// BSM - Declaring new arrays for storing the uuids of objects
		var newGeometries = [];
		var newMaterials = [];
		var newTextures = [];
		var newAnimations = [];
		var newSkeletons = [];

		const mapTypes = [
			"map",
			"lightMap",
			"bumpMap",
			"normalMap",
			"displacementMap",
			"specularMap",
			"alphaMap",
			"envMap",
			"roughnessMap",
			"metalnessMap",
			"emissiveMap",
			"gradientMap",
		];

		object.traverse(function (child) {
			//console.log( child );
			if (child.geometry !== undefined) {
				scope.addGeometry(child.geometry);
				// Add child.geometry.uuid to newGeometries array
				newGeometries.push(child.geometry.uuid);
			}

			if (child.material !== undefined) {

				if(child.material.type != "MeshStandardMaterial") {
					child.material = convertToStandard(child.material);
				}
				scope.addMaterial(child.material);
				const childMaterial = child.material;

				mapTypes.forEach((mapType) => {
					if (childMaterial[mapType]) {
						// Here, `materialJSON[mapType]` should give you the UUID of the texture
						let textureUUID = childMaterial[mapType].uuid;
						newTextures.push(textureUUID);
						//console.log(`Material uses texture ${mapType} with UUID: ${textureUUID}`);
					}
				});

				newMaterials.push(child.material.uuid);
			}

			if (child.animations !== undefined && child.animations.length > 0) {
				//newAnimations.push(child.uuid);
				let i = 0;
				while (i < child.animations.length) {
					newAnimations.push(child.animations[i].uuid);
					//console.log(child.animations[i].uuid);
					i++;
				}
			}

			if (child.skeleton !== undefined) {
				newSkeletons.push(child.skeleton.uuid);
				//console.log(child.skeleton)
			}

			scope.addCamera(child);
			scope.addHelper(child);
		});

		if (parent === undefined) {
			this.scene.add(object);
		} else {
			parent.children.splice(index, 0, object);
			object.parent = parent;
		}

		// BSM - Loop through newGeometries and newMaterials and log values
		if (newGeometries.length > 0) {
			this.addtoDatabase(newGeometries, "geometry");
		}

		if (newMaterials.length > 0) {
			this.addtoDatabase(newMaterials, "material");
		}

		if (newTextures.length > 0) {
			this.addtoDatabase(newTextures, "texture");
		}

		// Set animations
		if (newAnimations.length > 0) {
			this.addtoDatabase(newAnimations, "animation");
		}

		if (newSkeletons.length > 0) {
			this.addtoDatabase(newSkeletons, "skeleton");
		}
		this.updateSceneObjectOnDatabase("New");

		this.signals.objectAdded.dispatch(object);
		this.signals.sceneGraphChanged.dispatch();
		//BSM dev stop the loader
		let stop = true;
		this.signals.stopTheLoader.dispatch(stop);
	},

	moveObject: function (object, parent, before) {
		if (parent === undefined) {
			parent = this.scene;
		}

		parent.add(object);

		// sort children array

		if (before !== undefined) {
			var index = parent.children.indexOf(before);
			parent.children.splice(index, 0, object);
			parent.children.pop();
		}

		this.signals.sceneGraphChanged.dispatch();
	},

	nameObject: function (object, name) {
		object.name = name;
		// console.log("Object added");
		this.signals.sceneGraphChanged.dispatch();
	},

	removeObject: function (object) {
		if (object.parent === null) return; // avoid deleting the camera or scene

		// BSM - Declaring new arrays for storing the uuids of objects being deleted
		var delGeometries = [];
		var delMaterials = [];
		var delTextures = [];
		var delImages = [];
		var delAnimations = [];
		var delSkeletons = [];

		const sceneJSON = this.scene.toJSON();

		const mapTypes = [
			"map",
			"lightMap",
			"bumpMap",
			"normalMap",
			"displacementMap",
			"specularMap",
			"alphaMap",
			"envMap",
			"roughnessMap",
			"metalnessMap",
			"emissiveMap",
			"gradientMap",
		];

		var scope = this;

		object.traverse(function (child) {
			scope.removeCamera(child);
			scope.removeHelper(child);

			if (child.geometry !== undefined) {
				delGeometries.push(child.geometry.uuid);
			}

			if (child.material !== undefined) {
				scope.removeMaterial(child.material);
				const childMaterial = child.material;
				mapTypes.forEach((mapType) => {
					if (childMaterial[mapType]) {
						// Here, `materialJSON[mapType]` should give you the UUID of the texture
						let textureUUID = childMaterial[mapType].uuid;
						delTextures.push(textureUUID);
						// console.log(
						// 	`Material uses texture ${mapType} with UUID: ${textureUUID}`
						// );
						let textureFound = sceneJSON.textures.find(
							(obj) => obj.uuid === textureUUID
						);
						// console.log("Image found: " + textureFound.image);
						delImages.push(textureFound.image);
					}
				});

				delMaterials.push(child.material.uuid);
			}

			if (child.animations !== undefined && child.animations.length > 0) {
				//newAnimations.push(child.uuid);
				let i = 0;
				while (i < child.animations.length) {
					delAnimations.push(child.animations[i].uuid);
					// console.log(child.animations[i].uuid);
					i++;
				}
			}

			if (child.skeleton !== undefined) {
				delSkeletons.push(child.skeleton.uuid);
				//console.log(child.skeleton)
			}
		});

		// BSM - Loop through newGeometries and newMaterials and log values
		if (delGeometries.length > 0) {
			this.removefromDatabase(delGeometries, "geometry");
		}

		if (delMaterials.length > 0) {
			this.removefromDatabase(delMaterials, "material");
		}

		if (delTextures.length > 0) {
			this.removefromDatabase(delTextures, "texture");
		}

		// Set animations
		if (delAnimations.length > 0) {
			this.removefromDatabase(delAnimations, "animation");
		}

		if (delSkeletons.length > 0) {
			this.removefromDatabase(delSkeletons, "skeleton");
		}

		if (delImages.length > 0) {
			this.removefromDatabase(delImages, "image");
		}

		object.parent.remove(object);

		this.signals.objectRemoved.dispatch(object);
		this.signals.sceneGraphChanged.dispatch();
		//BSM
		this.updateSceneObjectOnDatabase("Old");
	},

	addGeometry: function (geometry) {
		this.geometries[geometry.uuid] = geometry;
	},
	//loa
	// BSM adding a new function to get the object from the scene graph
	addtoDatabase: function (uuids, type) {
		const sceneJSON = this.scene.toJSON();
		switch (type) {
			case "geometry":
				uuids.forEach(function (uuid) {
					//console.log("Geometry UUID: " + uuid);
					let geometrydata = sceneJSON.geometries;
					let geometryFound = geometrydata.find((obj) => obj.uuid === uuid);
					//console.log(geometryFound);

					// call service worker
					if (navigator.serviceWorker.controller) {
						//console.log("Service Worker Called");
						navigator.serviceWorker.controller.postMessage({
							type: "UPDATE_DATABASE",
							payload: {
								projectid: Projectid,
								uuid: uuid,
								type: "geometry",
								data: geometryFound,
							},
						});
					} else {
						console.log("Service worker is not available.");
					}
				});

				break;
			case "material":
				uuids.forEach(function (uuid) {
					//console.log("Material UUID: " + uuid);
					let materialdata = sceneJSON.materials;
					let materialFound = materialdata.find((obj) => obj.uuid === uuid);
					//console.log(materialFound);
					navigator.serviceWorker.controller.postMessage({
						type: "UPDATE_DATABASE",
						payload: {
							projectid: Projectid,
							uuid: uuid,
							type: "material",
							data: materialFound,
						},
					});
				});

				break;
			case "texture":
				uuids.forEach(function (uuid) {
					//console.log("Texture UUID: " + uuid);
					let textureData = sceneJSON.textures;
					let imageData = sceneJSON.images;
					let textureFound = textureData.find((obj) => obj.uuid === uuid);
					let imageFound = imageData.find(
						(obj) => obj.uuid === textureFound.image
					);
					//console.log("Image found: " + textureFound.image);
					//console.log(textureFound);
					navigator.serviceWorker.controller.postMessage({
						type: "UPDATE_DATABASE",
						payload: {
							projectid: Projectid,
							uuid: uuid,
							type: "texture",
							data: textureFound,
						},
					});
					//console.log(imageFound);
					navigator.serviceWorker.controller.postMessage({
						type: "UPDATE_DATABASE",
						payload: {
							projectid: Projectid,
							uuid: textureFound.image,
							type: "image",
							data: imageFound,
						},
					});
				});
				break;
			case "animation":
				uuids.forEach(function (uuid) {
					// console.log("Animation UUID: " + uuid);
					let animationdata = sceneJSON.animations;
					let animationFound = animationdata.find((obj) => obj.uuid === uuid);
					//console.log(animationFound);
					navigator.serviceWorker.controller.postMessage({
						type: "UPDATE_DATABASE",
						payload: {
							projectid: Projectid,
							uuid: uuid,
							type: "animation",
							data: animationFound,
						},
					});
				});

				break;
			case "skeleton":
				uuids.forEach(function (uuid) {
					//console.log("Skeleton UUID: " + uuid);
					let skeletondata = sceneJSON.skeletons;
					let skeletonFound = skeletondata.find((obj) => obj.uuid === uuid);
					//console.log(skeletonFound);
					navigator.serviceWorker.controller.postMessage({
						type: "UPDATE_DATABASE",
						payload: {
							projectid: Projectid,
							uuid: uuid,
							type: "skeleton",
							data: skeletonFound,
						},
					});
				});
				break;
			default:
				console.log("Unknown object.");
		}
	},

	// BSM adding a new function to get the object from the scene graph
	removefromDatabase: function (uuids, type) {
		switch (type) {
			case "geometry":
				uuids.forEach(function (uuid) {
					// console.log("Geometry UUID: " + uuid);
					// call service worker
					if (navigator.serviceWorker.controller) {
						// console.log("Service Worker Called");
						navigator.serviceWorker.controller.postMessage({
							type: "DELETE_DATABASE",
							payload: {
								projectid: Projectid,
								uuid: uuid,
							},
						});
					} else {
						console.log("Service worker is not available.");
					}
				});

				break;
			case "material":
				uuids.forEach(function (uuid) {
					// console.log("Material UUID: " + uuid);
					navigator.serviceWorker.controller.postMessage({
						type: "DELETE_DATABASE",
						payload: {
							projectid: Projectid,
							uuid: uuid,
						},
					});
				});

				break;
			case "texture":
				uuids.forEach(function (uuid) {
					// console.log("Texture UUID: " + uuid);
					navigator.serviceWorker.controller.postMessage({
						type: "DELETE_DATABASE",
						payload: {
							projectid: Projectid,
							uuid: uuid,
						},
					});
				});
				break;
			case "animation":
				uuids.forEach(function (uuid) {
					// console.log("Animation UUID: " + uuid);
					navigator.serviceWorker.controller.postMessage({
						type: "DELETE_DATABASE",
						payload: {
							projectid: Projectid,
							uuid: uuid,
						},
					});
				});

				break;
			case "image":
				uuids.forEach(function (uuid) {
					// console.log("Image UUID: " + uuid);
					navigator.serviceWorker.controller.postMessage({
						type: "DELETE_DATABASE",
						payload: {
							projectid: Projectid,
							uuid: uuid,
						},
					});
				});
				break;
			case "skeleton":
				uuids.forEach(function (uuid) {
					// console.log("Skeleton UUID: " + uuid);
					navigator.serviceWorker.controller.postMessage({
						type: "DELETE_DATABASE",
						payload: {
							projectid: Projectid,
							uuid: uuid,
						},
					});
				});
				break;
			default:
				console.log("Unknown object.");
		}
	},

	updateSceneObjectOnDatabase: function (updateType) {
		const sceneJSON = this.scene.toJSON();
		// console.log(
		// 	"--------------------------------Scene Object Called--------------------------------"
		// );
		const uuid = sceneJSON.object.uuid;
		// console.log("--------------------------------" + sceneJSON.object);
		navigator.serviceWorker.controller.postMessage({
			type: "UPDATE_SCENE_OBJECT",
			payload: {
				projectid: Projectid,
				uuid: uuid,
				object: sceneJSON.object,
				type: "scene",
				update_type: updateType,
			},
		});
	},

	setGeometryName: function (geometry, name) {
		geometry.name = name;
		this.signals.sceneGraphChanged.dispatch();

		//BSM
		this.updateSceneObjectOnDatabase("Old");
	},

	addMaterial: function (material) {
		if (Array.isArray(material)) {
			for (var i = 0, l = material.length; i < l; i++) {
				this.addMaterialToRefCounter(material[i]);
			}
		} else {
			this.addMaterialToRefCounter(material);
		}

		this.signals.materialAdded.dispatch();
	},

	addMaterialToRefCounter: function (material) {
		var materialsRefCounter = this.materialsRefCounter;

		var count = materialsRefCounter.get(material);

		if (count === undefined) {
			materialsRefCounter.set(material, 1);
			this.materials[material.uuid] = material;
		} else {
			count++;
			materialsRefCounter.set(material, count);
		}
	},

	removeMaterial: function (material) {
		if (Array.isArray(material)) {
			for (var i = 0, l = material.length; i < l; i++) {
				this.removeMaterialFromRefCounter(material[i]);
			}
		} else {
			this.removeMaterialFromRefCounter(material);
		}

		this.signals.materialRemoved.dispatch();
	},

	removeMaterialFromRefCounter: function (material) {
		var materialsRefCounter = this.materialsRefCounter;

		var count = materialsRefCounter.get(material);
		count--;

		if (count === 0) {
			materialsRefCounter.delete(material);
			delete this.materials[material.uuid];
		} else {
			materialsRefCounter.set(material, count);
		}
	},

	getMaterialById: function (id) {
		var material;
		var materials = Object.values(this.materials);

		for (var i = 0; i < materials.length; i++) {
			if (materials[i].id === id) {
				material = materials[i];
				break;
			}
		}

		return material;
	},

	setMaterialName: function (material, name) {
		material.name = name;
		this.signals.sceneGraphChanged.dispatch();
	},

	addTexture: function (texture) {
		this.textures[texture.uuid] = texture;
		console.log("texture.uuid");
	},

	//

	addCamera: function (camera) {
		if (camera.isCamera) {
			this.cameras[camera.uuid] = camera;

			this.signals.cameraAdded.dispatch(camera);
		}
	},

	removeCamera: function (camera) {
		if (this.cameras[camera.uuid] !== undefined) {
			delete this.cameras[camera.uuid];

			this.signals.cameraRemoved.dispatch(camera);
		}
	},

	//

	addHelper: (function () {
		var geometry = new THREE.SphereGeometry(2, 4, 2);
		var material = new THREE.MeshBasicMaterial({
			color: 0xff0000,
			visible: false,
		});

		return function (object, helper) {
			if (helper === undefined) {
				if (object.isCamera) {
					helper = new THREE.CameraHelper(object);
				} else if (object.isPointLight) {
					helper = new THREE.PointLightHelper(object, 1);
				} else if (object.isDirectionalLight) {
					helper = new THREE.DirectionalLightHelper(object, 1);
				} else if (object.isSpotLight) {
					helper = new THREE.SpotLightHelper(object);
				} else if (object.isHemisphereLight) {
					helper = new THREE.HemisphereLightHelper(object, 1);
				} else if (object.isSkinnedMesh) {
					helper = new THREE.SkeletonHelper(object.skeleton.bones[0]);
				} else if (object.isBone === true && object.parent?.isBone !== true) {
					helper = new THREE.SkeletonHelper(object);
				} else {
					// no helper for this object type
					return;
				}

				const picker = new THREE.Mesh(geometry, material);
				picker.name = "picker";
				picker.userData.object = object;
				helper.add(picker);
			}

			this.sceneHelpers.add(helper);
			this.helpers[object.id] = helper;

			this.signals.helperAdded.dispatch(helper);
		};
	})(),

	removeHelper: function (object) {
		if (this.helpers[object.id] !== undefined) {
			var helper = this.helpers[object.id];
			helper.parent.remove(helper);

			delete this.helpers[object.id];

			this.signals.helperRemoved.dispatch(helper);
		}
	},

	//

	addScript: function (object, script) {
		if (this.scripts[object.uuid] === undefined) {
			this.scripts[object.uuid] = [];
		}

		this.scripts[object.uuid].push(script);

		this.signals.scriptAdded.dispatch(script);
	},

	removeScript: function (object, script) {
		if (this.scripts[object.uuid] === undefined) return;

		var index = this.scripts[object.uuid].indexOf(script);

		if (index !== -1) {
			this.scripts[object.uuid].splice(index, 1);
		}

		this.signals.scriptRemoved.dispatch(script);
	},

	getObjectMaterial: function (object, slot) {
		var material = object.material;

		if (Array.isArray(material) && slot !== undefined) {
			material = material[slot];
		}

		return material;
	},

	setObjectMaterial: function (object, slot, newMaterial) {
		if (Array.isArray(object.material) && slot !== undefined) {
			object.material[slot] = newMaterial;
		} else {
			object.material = newMaterial;
		}
	},

	setViewportCamera: function (uuid) {
		this.viewportCamera = this.cameras[uuid];
		this.signals.viewportCameraChanged.dispatch();
	},

	setViewportShading: function (value) {
		this.viewportShading = value;
		this.signals.viewportShadingChanged.dispatch();
	},

	//

	select: function (object) {
		this.selector.select(object);
	},

	selectById: function (id) {
		if (id === this.camera.id) {
			this.select(this.camera);
			return;
		}

		this.select(this.scene.getObjectById(id));
	},

	selectByUuid: function (uuid) {
		var scope = this;

		this.scene.traverse(function (child) {
			if (child.uuid === uuid) {
				scope.select(child);
			}
		});
	},

	deselect: function () {
		this.selector.deselect();
	},

	focus: function (object) {
		if (object !== undefined) {
			this.signals.objectFocused.dispatch(object);
		}
	},

	focusById: function (id) {
		this.focus(this.scene.getObjectById(id));
	},

	clear: function () {
		// console.log("get call in clear");
		this.history.clear();
		this.storage.clear();

		this.camera.copy(_DEFAULT_CAMERA);
		this.signals.cameraResetted.dispatch();

		this.scene.name = "Scene";
		this.scene.userData = {};
		// if the new project comes it will clear our bg and env
		// this.scene.background = null;
		// this.scene.environment = null;
		this.scene.fog = null;

		var objects = this.scene.children;

		while (objects.length > 0) {
			this.removeObject(objects[0]);
		}

		this.geometries = {};
		this.materials = {};
		this.textures = {};
		this.scripts = {};

		this.materialsRefCounter.clear();

		this.animations = {};
		this.mixer.stopAllAction();

		this.deselect();

		this.signals.editorCleared.dispatch();
	},

	//

	fromJSON: async function (json) {
		var loader = new THREE.ObjectLoader();
		var camera = await loader.parseAsync(json.camera);

		this.camera.copy(camera);
		this.signals.cameraResetted.dispatch();

		this.history.fromJSON(json.history);
		this.scripts = json.scripts;

		this.setScene(await loader.parseAsync(json.scene));
	},

	toJSON: function () {
		// scripts clean up

		var scene = this.scene;
		var scripts = this.scripts;

		for (var key in scripts) {
			var script = scripts[key];

			if (
				script.length === 0 ||
				scene.getObjectByProperty("uuid", key) === undefined
			) {
				delete scripts[key];
			}
		}

		//

		return {
			metadata: {},
			project: {
				shadows: this.config.getKey("project/renderer/shadows"),
				shadowType: this.config.getKey("project/renderer/shadowType"),
				vr: this.config.getKey("project/vr"),
				useLegacyLights: this.config.getKey("project/renderer/useLegacyLights"),
				toneMapping: this.config.getKey("project/renderer/toneMapping"),
				toneMappingExposure: this.config.getKey(
					"project/renderer/toneMappingExposure"
				),
			},
			camera: this.viewportCamera.toJSON(),
			scene: this.scene.toJSON(),
			scripts: this.scripts,
			history: this.history.toJSON(),
		};
	},

	objectByUuid: function (uuid) {
		return this.scene.getObjectByProperty("uuid", uuid, true);
	},

	execute: function (cmd, optionalName) {
		this.history.execute(cmd, optionalName);
	},

	undo: function () {
		this.history.undo();
	},

	redo: function () {
		this.history.redo();
	},
};

export { Editor };
