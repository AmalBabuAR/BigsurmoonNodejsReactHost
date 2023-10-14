import * as THREE from "three";
import { NewUI_SidebarMaterialColorProperty } from "./NewUI_SidebarMaterialColorProperty.js";
import { SidebarMaterialNumberProperty } from "./Sidebar.Material.NumberProperty.js";
import { SidebarMaterialBooleanProperty } from "./Sidebar.Material.BooleanProperty.js";

import { UIDiv } from "./libs/ui.js";

function NewUI_MaterialColor(editor) {
	const signals = editor.signals;
	const strings = editor.strings;

	let currentObject;

	let currentMaterialSlot = 0;

	const container = new UIDiv();
	container.setId("materialColor");

	// color
	const materialColor = new NewUI_SidebarMaterialColorProperty(
		editor,
		"color",
		strings.getKey("sidebar/material/color"),
		"colorDiv",
		"color.svg"
	);
	container.add(materialColor);
	// emissive
	const materialEmissive = new NewUI_SidebarMaterialColorProperty(
		editor,
		"emissive",
		strings.getKey("sidebar/material/emissive"),
		"emissiveDiv",
		"emissive.svg"
	);
	container.add(materialEmissive);

	// roughness

	const materialRoughness = new SidebarMaterialNumberProperty(
		editor,
		"roughness",
		strings.getKey("sidebar/material/roughness"),
		[0, 1]
	);
	materialRoughness.setId("roughnessDiv");
	const roughnessIcon = document.createElement("img");
	roughnessIcon.src = "images/roughness.svg";
	materialRoughness.dom.appendChild(roughnessIcon);
	container.add(materialRoughness);

	// metalness
	const materialMetalness = new SidebarMaterialNumberProperty(
		editor,
		"metalness",
		strings.getKey("sidebar/material/metalness"),
		[0, 1]
	);
	materialMetalness.setId("metalnessDiv");
	const metalnessIcon = document.createElement("img");
	metalnessIcon.src = "images/roughness.svg";
	materialMetalness.dom.appendChild(metalnessIcon);
	container.add(materialMetalness);

	//opacity
	const materialOpacity = new SidebarMaterialNumberProperty(
		editor,
		"opacity",
		strings.getKey("sidebar/material/opacity"),
		[0, 1]
	);
	materialOpacity.setId("opacityDiv");
	const opacityIcon = document.createElement("img");
	opacityIcon.src = "images/roughness.svg";
	materialOpacity.dom.appendChild(opacityIcon);
	container.add(materialOpacity);

	// alpha test

	const materialAlphaTest = new SidebarMaterialNumberProperty(
		editor,
		"alphaTest",
		strings.getKey("sidebar/material/alphatest"),
		[0, 1]
	);
	materialAlphaTest.setId("alphaTestDiv");
	const alphaTestIcon = document.createElement("img");
	alphaTestIcon.src = "images/alpha.svg";
	materialAlphaTest.dom.appendChild(alphaTestIcon);
	container.add(materialAlphaTest);

	// transparent

	const materialTransparent = new SidebarMaterialBooleanProperty(
		editor,
		"transparent",
		strings.getKey("sidebar/material/transparent")
	);
	materialTransparent.setId("transparentDiv");
	container.add(materialTransparent);

	//

	function update() {
		const previousSelectedSlot = currentMaterialSlot;

		currentMaterialSlot = parseInt(materialSlotSelect.getValue());

		if (currentMaterialSlot !== previousSelectedSlot) refreshUI();

		let material = editor.getObjectMaterial(currentObject, currentMaterialSlot);

		if (material) {
			if (
				material.uuid !== undefined &&
				material.uuid !== materialUUID.getValue()
			) {
				editor.execute(
					new SetMaterialValueCommand(
						editor,
						currentObject,
						"uuid",
						materialUUID.getValue(),
						currentMaterialSlot
					)
				);
			}

			if (material.type !== materialClass.getValue()) {
				material = new materialClasses[materialClass.getValue()]();

				if (material.type === "RawShaderMaterial") {
					material.vertexShader = vertexShaderVariables + material.vertexShader;
				}

				if (Array.isArray(currentObject.material)) {
					// don't remove the entire multi-material. just the material of the selected slot

					editor.removeMaterial(currentObject.material[currentMaterialSlot]);
				} else {
					editor.removeMaterial(currentObject.material);
				}

				editor.execute(
					new SetMaterialCommand(
						editor,
						currentObject,
						material,
						currentMaterialSlot
					),
					"New Material: " + materialClass.getValue()
				);
				editor.addMaterial(material);
				// TODO Copy other references in the scene graph
				// keeping name and UUID then.
				// Also there should be means to create a unique
				// copy for the current object explicitly and to
				// attach the current material to other objects.
			}

			try {
				const userData = JSON.parse(materialUserData.getValue());
				if (JSON.stringify(material.userData) != JSON.stringify(userData)) {
					editor.execute(
						new SetMaterialValueCommand(
							editor,
							currentObject,
							"userData",
							userData,
							currentMaterialSlot
						)
					);
				}
			} catch (exception) {
				console.warn(exception);
			}

			refreshUI();
		}
	}

	//

	function setRowVisibility() {
		const material = currentObject.material;

		if (Array.isArray(material)) {
			materialSlotRow.setDisplay("");
		} else {
			materialSlotRow.setDisplay("none");
		}
	}

	function refreshUI() {
		if (!currentObject) return;

		let material = currentObject.material;

		if (Array.isArray(material)) {
			const slotOptions = {};

			currentMaterialSlot = Math.max(
				0,
				Math.min(material.length, currentMaterialSlot)
			);

			for (let i = 0; i < material.length; i++) {
				slotOptions[i] = String(i + 1) + ": " + material[i].name;
			}

			materialSlotSelect.setOptions(slotOptions).setValue(currentMaterialSlot);
		}

		material = editor.getObjectMaterial(currentObject, currentMaterialSlot);

		// if (material.uuid !== undefined) {
		// 	materialUUID.setValue(material.uuid);
		// }

		// if (material.name !== undefined) {
		// 	materialName.setValue(material.name);
		// }

		// if (currentObject.isMesh) {
		// 	materialClass.setOptions(meshMaterialOptions);
		// } else if (currentObject.isSprite) {
		// 	materialClass.setOptions(spriteMaterialOptions);
		// } else if (currentObject.isPoints) {
		// 	materialClass.setOptions(pointsMaterialOptions);
		// } else if (currentObject.isLine) {
		// 	materialClass.setOptions(lineMaterialOptions);
		// }

		// materialClass.setValue(material.type);

		// setRowVisibility();

		// try {
		// 	materialUserData.setValue(JSON.stringify(material.userData, null, "  "));
		// } catch (error) {
		// 	console.log(error);
		// }

		// materialUserData.setBorderColor("transparent");
		// materialUserData.setBackgroundColor("");
	}

	// events

	signals.objectSelected.add(function (object) {
		let hasMaterial = false;

		if (object && object.material) {
			hasMaterial = true;

			if (Array.isArray(object.material) && object.material.length === 0) {
				hasMaterial = false;
			}
		}

		if (hasMaterial) {
			currentObject = object;
			refreshUI();
			container.setDisplay("");
		} else {
			currentObject = null;
			container.setDisplay("none");
		}
	});

	signals.materialChanged.add(refreshUI);

	return container;
}
const materialClasses = {
	LineBasicMaterial: THREE.LineBasicMaterial,
	LineDashedMaterial: THREE.LineDashedMaterial,
	MeshBasicMaterial: THREE.MeshBasicMaterial,
	MeshDepthMaterial: THREE.MeshDepthMaterial,
	MeshNormalMaterial: THREE.MeshNormalMaterial,
	MeshLambertMaterial: THREE.MeshLambertMaterial,
	MeshMatcapMaterial: THREE.MeshMatcapMaterial,
	MeshPhongMaterial: THREE.MeshPhongMaterial,
	MeshToonMaterial: THREE.MeshToonMaterial,
	MeshStandardMaterial: THREE.MeshStandardMaterial,
	MeshPhysicalMaterial: THREE.MeshPhysicalMaterial,
	RawShaderMaterial: THREE.RawShaderMaterial,
	ShaderMaterial: THREE.ShaderMaterial,
	ShadowMaterial: THREE.ShadowMaterial,
	SpriteMaterial: THREE.SpriteMaterial,
	PointsMaterial: THREE.PointsMaterial,
};

const vertexShaderVariables = [
	"uniform mat4 projectionMatrix;",
	"uniform mat4 modelViewMatrix;\n",
	"attribute vec3 position;\n\n",
].join("\n");

const meshMaterialOptions = {
	MeshBasicMaterial: "MeshBasicMaterial",
	MeshDepthMaterial: "MeshDepthMaterial",
	MeshNormalMaterial: "MeshNormalMaterial",
	MeshLambertMaterial: "MeshLambertMaterial",
	MeshMatcapMaterial: "MeshMatcapMaterial",
	MeshPhongMaterial: "MeshPhongMaterial",
	MeshToonMaterial: "MeshToonMaterial",
	MeshStandardMaterial: "MeshStandardMaterial",
	MeshPhysicalMaterial: "MeshPhysicalMaterial",
	RawShaderMaterial: "RawShaderMaterial",
	ShaderMaterial: "ShaderMaterial",
	ShadowMaterial: "ShadowMaterial",
};

const lineMaterialOptions = {
	LineBasicMaterial: "LineBasicMaterial",
	LineDashedMaterial: "LineDashedMaterial",
	RawShaderMaterial: "RawShaderMaterial",
	ShaderMaterial: "ShaderMaterial",
};

const spriteMaterialOptions = {
	SpriteMaterial: "SpriteMaterial",
	RawShaderMaterial: "RawShaderMaterial",
	ShaderMaterial: "ShaderMaterial",
};

const pointsMaterialOptions = {
	PointsMaterial: "PointsMaterial",
	RawShaderMaterial: "RawShaderMaterial",
	ShaderMaterial: "ShaderMaterial",
};

export { NewUI_MaterialColor };
