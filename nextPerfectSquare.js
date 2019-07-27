console.log('next perfect square');

function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    let squareRoot = Math.sqrt(sq);
    let verifyInt = Number.isInteger(squareRoot);
    if(verifyInt){
        let nextSqr = sq + (2* squareRoot + 1);
        return nextSqr;
    }
    return -1;
}

console.log('next squareroot is ', findNextSquare(9));

// 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121

// 1   3   5   7   9   11  13  15  17  19, 21

// 2n + 1
