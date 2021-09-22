const hq = 42;
const feet = 264;

function distanceFromHqInBlocks(pickup){
    if (pickup > hq) {
        return pickup - hq
    } else if (pickup < hq) {
        return hq - pickup
    }

}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(a, b){
    const block = 264;
    if (b > a){
        return (b * block) - (a * block);
    }
    else if (a > b){
        return (a * block) - (b * block);
    }
}

function calculatesFarePrice(a, b){
   let value = distanceTravelledInFeet(a, b);
    if (value <= 400){
        return 0;
    } else if (value <= 2000){
        return ((value - 400) * 0.02);
    } else if (value <= 2500){
        return 25;
    } else if (value > 2500){
        return 'cannot travel that far';
    }
}