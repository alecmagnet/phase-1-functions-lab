// Code your solution in this file!
function distanceFromHqInBlocks(pickupSpot) {
	let rawDist = (pickupSpot - 42);
	let absoluteDist = Math.abs(rawDist);
	return(absoluteDist);
};
function distanceFromHqInFeet(pickupSpot) {
	return(distanceFromHqInBlocks(pickupSpot) * 264);
};
function distanceTravelledInFeet(pickupSpot, dropOff) {
	let rawDistance = (dropOff - pickupSpot);
	let absoluteDistance = Math.abs(rawDistance);
	return (absoluteDistance * 264);
};
function calculatesFarePrice(start, destination) {
	let dist = distanceTravelledInFeet(start, destination);
	if (dist < 400) {
		return(0);	
	} else if (dist > 2500) {
		return ('cannot travel that far');
	} else if (dist > 2000) {
		return(25);
	} else {
		return(0.02 * (dist - 400));
	};
};