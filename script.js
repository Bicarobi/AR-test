// We're going to register a custom event listener through a-frame that will fire
// whenever a marker has entered the camera view and is found through ar.js
/*$(document).ready(() => {
	AFRAME.registerComponent("registerevents", {
		init: function () {
			var marker = this.el;

			// Element emits events when found and lost
			marker.setAttribute("emitevents", "true");

			marker.addEventListener("markerFound", function () {
				// Alright, a marker has been found. Let's get the video element
				var vid = document.getElementById("waterVideo");

				// Make sure that the video a-frame object is visible
				document.querySelector("#water").setAttribute("visible", true);

				// Reset the video to the beginning and play it through
				vid.currentTime = 0;
				vid.play();
			});
		},
	});
});*/
