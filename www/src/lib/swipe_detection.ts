//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type ReturnParams = {
	angle: number
}

type Params = {
	id: string,
	onSwipe?: (_params: ReturnParams) => void,
	onUpSwipe?: (_params: ReturnParams) => void,
	onLeftSwipe?: (_params: ReturnParams) => void,
	onRightSwipe?: (_params: ReturnParams) => void,
	onDownSwipe?: (_params: ReturnParams) => void,
	onNoZoneSwipe?: (_params: ReturnParams) => void,
	noZoneAngle?: number
}

/**
 * A function to detect swipes in different directions.
 * @param id The id of the HTML element thet we want to check for swipe detection.  
 * @param onSwipe An optional `void` parameter to run when a swipe is detected.
 * @param onUpSwipe An optional `void` parameter to run when an up swipe is detected.
 * @param onLeftSwipe An optional `void` parameter to run when a left swipe is detected.
 * @param onRightSwipe An optional `void` parameter to run when a right swipe is detected.
 * @param onDownSwipe An optional `void` parameter to run when a down swipe is detected.
 * @param onNoZoneSwipe An optional `void` parameter to run when a swipe is detected in the no zone.
 * @param noZoneAngle The angle of the zones between the up, down, left, right where nothing is 
 * 					  detected. Defaults to 20 degrees.
 */
export default function swipeDetection(
	{ id, onSwipe, onUpSwipe, onLeftSwipe, onRightSwipe, onDownSwipe,
		onNoZoneSwipe, noZoneAngle = 20 }
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

		const radian = Math.atan2((y2 - y1), (x2 - x1));
		const angle = radian * (180 / Math.PI);

		onSwipe?.({ angle });

		if (angle + noZoneAngle/2 > -135 && angle - noZoneAngle/2 < -45) {
			onUpSwipe?.({ angle });
		}
		else if (angle + noZoneAngle/2 > -180 && angle - noZoneAngle/2 < -135 ||
		angle + noZoneAngle/2 > 135 && angle - noZoneAngle/2 < 180) {
			onLeftSwipe?.({ angle });
		}
		else if (angle + noZoneAngle/2 > 45 && angle - noZoneAngle/2 < 135) {
			onDownSwipe?.({ angle });
		}
		else if (angle + noZoneAngle/2 > -45 && angle - noZoneAngle/2 < 45) {
			onRightSwipe?.({ angle });
		}
		else {
			onNoZoneSwipe?.({ angle });
		}
	}

	element?.addEventListener("mousedown", onMouseDown);
	element?.addEventListener("mouseup", onMouseUp);
}
