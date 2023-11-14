import { UIButton, UIDiv, UIPanel, UIRow, UIToolbarButton } from "./libs/ui.js";

function NewUI_AnimationPlay(editor) {
	const strings = editor.strings;
	const signals = editor.signals;
	const mixer = editor.mixer;
	function getButtonText(action) {
		return action.isRunning()
			? strings.getKey("sidebar/animations/stop")
			: strings.getKey("sidebar/animations/play");
	}

	function Animation(animation, object) {
		const action = mixer.clipAction(animation, object);

		const container = new UIPanel();

		const button = new UIToolbarButton();
		button.setId("playBTN");

		//play
		// console.log(action);
		const play = document.createElement("img");
		play.title = strings.getKey("sidebar/animations/play");
		play.src = "images/play.svg";

		//stop
		const stop = document.createElement("img");
		stop.title = strings.getKey("sidebar/animations/stop");
		stop.src = "images/stop.svg";

		const status = getButtonText(action);
		// console.log(status, typeof status);
		if (status == "Play") {
			button.dom.appendChild(play);
		} else {
			button.dom.appendChild(stop);
		}

		button.onClick(function () {
			action.isRunning() ? action.stop() : action.play();
			const status = getButtonText(action);
			// console.log(status, typeof status);
			if (status == "Stop") {
				button.dom.innerHTML = "";
				button.dom.appendChild(stop);
			} else {
				button.dom.innerHTML = "";
				button.dom.appendChild(play);
			}
		});

		container.add(button);

		return container;
	}

	signals.objectSelected.add(function (object) {
		if (object !== null && object.animations.length > 0) {
			animationsList.clear();

			const animations = object.animations;

			for (const animation of animations) {
				animationsList.add(new Animation(animation, object));
			}

			container.setDisplay("");
		} else {
			container.setDisplay("none");
		}
	});

	signals.objectRemoved.add(function (object) {
		if (object !== null && object.animations.length > 0) {
			mixer.uncacheRoot(object);
		}
	});

	const container = new UIPanel();
	container.setDisplay("none");

	const animationsList = new UIDiv();
	container.add(animationsList);

	return container;
}
export { NewUI_AnimationPlay };
