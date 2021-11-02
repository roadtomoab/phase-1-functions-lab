const hqBlock = 42;

let blockDifferenceInFeet;
let blockDifference;
let fare;

function distanceFromHqInBlocks(blockNumber) {

    if (blockNumber >= 42) {
        blockDifference = blockNumber - hqBlock;
        return blockDifference;
    }

    else {
        blockDifference = hqBlock - blockNumber;
        return blockDifference;
    }

}

function distanceFromHqInFeet(blockNumber) {
    
    distanceFromHqInBlocks(blockNumber);
    
    blockDifferenceInFeet = blockDifference * 264;
    return blockDifferenceInFeet;

}

function distanceTravelledInFeet(firstBlock, secondBlock) {

    if (firstBlock >= secondBlock) {
        blockDifference = firstBlock - secondBlock;
        blockDifferenceInFeet = blockDifference * 264;
        return blockDifferenceInFeet;
    }

    else {
        blockDifference = secondBlock - firstBlock;
        blockDifferenceInFeet = blockDifference * 264;
        return blockDifferenceInFeet
    }

}

function calculatesFarePrice(firstBlock, secondBlock) {

    if (firstBlock >= secondBlock) {
        blockDifference = firstBlock - secondBlock;
        blockDifferenceInFeet = blockDifference * 264;
        
        if (blockDifferenceInFeet <= 400) {
            return 0;
        }

        else if (blockDifferenceInFeet <= 2000) {
            blockDifferenceInFeet = blockDifferenceInFeet - 400;
            return blockDifferenceInFeet * .02;
        }

        else if (blockDifferenceInFeet <= 2500) {
            return 25;
        }

        else {
            return "cannot travel that far";
        }
    }

    else {
        blockDifference = secondBlock - firstBlock;
        blockDifferenceInFeet = blockDifference * 264;
        
        if (blockDifferenceInFeet <= 400) {
            return 0;
        }

        else if (blockDifferenceInFeet <= 2000) {
            blockDifferenceInFeet = blockDifferenceInFeet - 400;
            return blockDifferenceInFeet * .02;
        }

        else if (blockDifferenceInFeet <= 2500) {
            return 25;
        }

        else {
            return "cannot travel that far";
        }
    }

}