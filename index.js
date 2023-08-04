// Code your solution in this file!
const hqLocation ="42";
const pickupLocation = "50";
function distanceFromHqInBlocks(pickupLocation){
    
    return Math.abs(pickupLocation - hqLocation)
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(endBlock - startBlock); // Using Math.abs to ensure a positive value
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    const freeDistance = 400;
    const twoCentsPerFootDistance = 2000;
    const flatFareDistance = 2500;
    const farePriceLimit = 25;
  
    if (distanceInFeet <= freeDistance) {
      return 0; 
    } else if (distanceInFeet <= twoCentsPerFootDistance) {
      return (distanceInFeet - freeDistance) * 0.02; 
    } else if (distanceInFeet < flatFareDistance) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }