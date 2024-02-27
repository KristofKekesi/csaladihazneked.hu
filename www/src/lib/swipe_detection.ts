//* Not working

/* eslint-disable react-hooks/rules-of-hooks */

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	id: string,
	onUpSwipe?: (_angle: number) => void,
	onLeftSwipe?: (_angle: number) => void,
	onRightSwipe?: (_angle: number) => void,
	onDownSwipe?: (_angle: number) => void,
	noZoneAngle?: number
}

/**
 * A function to detect swipes in different directions.
 * @param id The id of the HTML element thet we want to check for swipe detection.  
 * @param onUpSwipe An optional `void` parameter to run when an up swipe is detected.
 * @param onLeftSwipe An optional `void` parameter to run when a left swipe is detected.
 * @param onRightSwipe An optional `void` parameter to run when a right swipe is detected.
 * @param onDownSwipe An optional `void` parameter to run when a down swipe is detected.
 * @param noZoneAngle The angle of the zones between the up, down, left, right where nothing is 
 * 					  detected. Default is 20 degrees.
 */
export default function swipeDetection(
	{ id, onUpSwipe, onLeftSwipe, onRightSwipe, onDownSwipe, noZoneAngle = 20 }
: Params) {
	const element = document.getElementById(id);

	/**
	 * Function to run on mouse down.
	 */
	function onMouseDown(event: MouseEvent) {
		if (element) {
			element.dataset.mouseX = event.pageX.toString();
			element.dataset.mouseY = event.pageY.toString();
		}
	}

	/**
	 * Function to run on mouse up.
	 */
	function onMouseUp(event: MouseEvent) {
		const x1 = parseInt(element?.dataset.mouseX ?? "");
		const y1 = parseInt(element?.dataset.mouseY ?? "");
		const x2 = event.pageX;
		const y2 = event.pageY;

		const angle = Math.atan2((y2-y1), (x2-x1));
		console.log(angle);

		if (angle + noZoneAngle/2 > 45 || angle - noZoneAngle/2 < 135) {
			onUpSwipe?.(angle);
		}
		if (angle + noZoneAngle/2 > 135 || angle - noZoneAngle/2 < 225) {
			onLeftSwipe?.(angle);
		}
		if (angle + noZoneAngle/2 > 225 || angle - noZoneAngle/2 < 315) {
			onDownSwipe?.(angle);
		}
		if (angle + noZoneAngle/2 > 315 || angle - noZoneAngle/2 < 45) {
			onRightSwipe?.(angle);
		}
	}

	element?.addEventListener("mousedown", onMouseDown);
	element?.addEventListener("mouseup", onMouseUp);
}
