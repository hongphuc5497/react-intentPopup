import React, { useEffect } from "react";
import './Popup.css';
import { handleContentLoaded } from '../../utils/index';


export default function Popup() {
	useEffect(() => {
		handleContentLoaded();
	}, []);

	return (
		<div id="popup">
			<h3>Popup!</h3>
		</div>
	);
}
