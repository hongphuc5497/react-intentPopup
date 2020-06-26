import React, { useEffect } from "react";

function handleContentLoaded() {
	console.log("handledContendLoaded fired");
	const show = () => {
		const element = document.querySelector("#popup");

		element.style.visibility = "visible";
		element.style.opacity = "1";
		element.style.transform = "scale(1)";
		element.style.transition = "0.4s, opacity 0.4s";
	};

	document.addEventListener("mouseout", (event) => {
		console.log("mouseout event fired");
		if (!event.toElement && !event.relatedTarget) {
			setTimeout(() => {
				show();
			}, 1000);
		}
	});
}

export default function Popup() {
	useEffect(() => {
		console.log("Using effect");
		handleContentLoaded();
	}, []);

	return (
		<div id="popup">
			<h3>Popup!</h3>
		</div>
	);
}
