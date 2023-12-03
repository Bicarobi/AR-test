// We're going to register a custom event listener through a-frame that will fire
// whenever a marker has entered the camera view and is found through ar.js
$(document).ready(() => {
	console.log("ready");
	AFRAME.registerComponent("registerevents", {
		init: function () {
			var marker = this.el;
			marker.addEventListener("markerFound", function () {
				var markerId = marker.id;
				console.log("! markerFound", markerId);
				// do additional things you want to do
			});
			marker.addEventListener("markerLost", function () {
				var markerId = marker.id;
				console.log("! markerLost", markerId);
				// do additional things you want to do
			});
		},
	});
});
