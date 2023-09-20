
function Storage() {
	// const axios = require("axios");
	const indexedDB =
		window.indexedDB ||
		window.mozIndexedDB ||
		window.webkitIndexedDB ||
		window.msIndexedDB;

	if (indexedDB === undefined) {
		console.warn("Storage: IndexedDB not available.");
		return {
			init: function () {},
			get: function () {},
			set: function () {},
			clear: function () {},
		};
	}

	const name = "threejs-editor";
	const version = 1;

	let database;

	return {
		init: function (callback) {
			
			const request = indexedDB.open(name, version);
			request.onupgradeneeded = function (event) {
				console.log('inside the init req onupgradeneeded ');
				const db = event.target.result;

				if (db.objectStoreNames.contains("states") === false) {
					console.log('inside the init req onupgradeneeded if statement');
					db.createObjectStore("states");
				}
			};

			request.onsuccess = function (event) {
				console.log('inside the init req onsuccess ');

				database = event.target.result;

				callback();
			};

			request.onerror = function (event) {
				console.error("IndexedDB", event);
			};
		},

		get: function (callback) {
			this.clear()
			
			console.log('call in get');
			const transaction = database.transaction(["states"], "readwrite");
			const objectStore = transaction.objectStore("states");
			const request = objectStore.get(0);
			// console.log('request on get', request);
			request.onsuccess = function (event) {
				if(event.target.result=== undefined){
					console.log('its undefined');
				}
				callback(event.target.result);
			};
		},

		set: function (data) {
		
			console.log('state change----',data);
			const start = performance.now();
			
			const transaction = database.transaction(["states"], "readwrite");
			
			const objectStore = transaction.objectStore("states");
			
			const request = objectStore.put(data, 0);
			
			request.onsuccess = function () {
				console.log(
					"[" + /\d\d\:\d\d\:\d\d/.exec(new Date())[0] + "]",
					"Saved state to IndexedDB. " +
						(performance.now() - start).toFixed(2) +
						"ms"
				);
			


				// // Send data to localhost:3000 using axios
				// async function aa() {
				// 	console.log('type of',typeof(data));
				// 	let conData = JSON.stringify(data)
				// 	let customConfig = {
				// 		headers: {
				// 		'Content-Type': 'application/json',
				// 		'Content-Disposition': 'attachment; filename="your_filename.json"'
				// 		}
				// 	};
				// 	try {
				// 		const response = await axios.post(
				// 			"http://localhost:3000/upload/fileData",
				// 			conData,customConfig
				// 		);
						
				// 		console.log("Data sent to localhost:3000 successfully");
				// 	} catch (error) {
				// 		console.error("Error sending data to localhost:3000:", error);
				// 	}
				// }
				// aa();

			};
		},
		
		clear: function () {
		console.log('database in storage',database);

			if (database === undefined) return;

			const transaction = database.transaction(["states"], "readwrite");
			const objectStore = transaction.objectStore("states");
			const request = objectStore.clear();
			request.onsuccess = function () {
				console.log(
					"[" + /\d\d\:\d\d\:\d\d/.exec(new Date())[0] + "]",
					"Cleared IndexedDB."
				);
			};
		},
	};
}

export { Storage };
