import * as THREE from "three";
import { NewUI_SidebarMaterialMapProperty } from "./NewUI_SidebarMaterialMapProperty.js";
import { UIDiv } from "./libs/ui.js";

function NewUI_MaterialMap(editor) {
	const strings = editor.strings;
	const signals = editor.signals;

	let currentObject;

	let currentMaterialSlot = 0;

	const container = new UIDiv();
	container.setId("materialMap");

	// Diffuse map
	const materialMap = new NewUI_SidebarMaterialMapProperty(
		editor,
		"map",
		strings.getKey("sidebar/material/diffuse")
	);
	container.add(materialMap);

	// normal map

	const materialNormalMap = new NewUI_SidebarMaterialMapProperty(
		editor,
		"normalMap",
		strings.getKey("sidebar/material/normal")
	);
	container.add(materialNormalMap);

	// roughness map

	const materialRoughnessMap = new NewUI_SidebarMaterialMapProperty(
		editor,
		"roughnessMap",
		strings.getKey("sidebar/material/roughness")
	);
	container.add(materialRoughnessMap);

	// metalness map

	const materialMetalnessMap = new NewUI_SidebarMaterialMapProperty(
		editor,
		"metalnessMap",
		strings.getKey("sidebar/material/metalness")
	);
	container.add(materialMetalnessMap);

	// displacement map

	const materialDisplacementMap = new NewUI_SidebarMaterialMapProperty(
		editor,
		"displacementMap",
		strings.getKey("sidebar/material/displacement")
	);
	container.add(materialDisplacementMap);

	// emissive map

	const materialEmissiveMap = new NewUI_SidebarMaterialMapProperty(
		editor,
		"emissiveMap",
		strings.getKey("sidebar/material/emissiveMapNew")
	);
	container.add(materialEmissiveMap);

	// alpha map

	const materialAlphaMap = new NewUI_SidebarMaterialMapProperty(
		editor,
		"alphaMap",
		strings.getKey("sidebar/material/alpha")
	);
	container.add(materialAlphaMap);

	// bump map

	const materialBumpMap = new NewUI_SidebarMaterialMapProperty(
		editor,
		"bumpMap",
		strings.getKey("sidebar/material/bump")
	);
	container.add(materialBumpMap);


	// light map

	const materialLightMap = new NewUI_SidebarMaterialMapProperty(
		editor,
		"lightMap",
		strings.getKey("sidebar/material/light")
	);
	container.add(materialLightMap);

	
	// ambient occlusion map

	const materialAOMap = new NewUI_SidebarMaterialMapProperty( editor, 'aoMap', strings.getKey( 'sidebar/material/ao' ) );
	container.add( materialAOMap );

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
	let materialUUID;
	let materialName;
	let materialClass;

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

export { NewUI_MaterialMap };
