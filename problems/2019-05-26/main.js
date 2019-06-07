function main() {
    console.log("Hello, world!")
}

function solution() {
    console.log("solution");
    return "solution";
}


function closestSumPair(a1, a2, target) {

    let numsort = (a, b) => {
        return a - b;
    }


    a1Sorted = [...a1].sort(numsort);

    a2Sorted = [...a2].sort(numsort);

    console.log(a1Sorted);
    console.log(a2Sorted);

    let i = 0;
    let j = a2Sorted.length - 1;

    let smallestDiff = Math.abs(a1Sorted[0] + a2Sorted[0] - target);


    let closestPair = [a1Sorted[0], a2Sorted[0]];

    while (i < a1Sorted.length && j >= 0) {
        let v1 = a1Sorted[i];
        let v2 = a2Sorted[j];

        let currentDiff = v1 + v2 - target;

        if (Math.abs(currentDiff) < smallestDiff) {
            smallestDiff = Math.abs(currentDiff);
            closestPair = [v1, v2];
        }

        if (currentDiff === 0) {
            return closestPair;
        } else if (currentDiff < 0) {
            i += 1;
        } else {
            j -= 1;
        }


    }

    console.log(`smallestDiff: ${smallestDiff}`);

    return closestPair;


}


console.log(closestSumPair([-1, 3, 8, 2, 9, 5], [4, 1, 2, 10, 5, 20], 24));

console.log(closestSumPair([7, 4, 1, 10], [4, 5, 8, 7], 13));

console.log(closestSumPair([6, 8, -1, -8, -3], [4, -6, 2, 9, -3], 3));

console.log(closestSumPair([19, 14, 6, 11, -16, 14, -16, -9, 16, 13], [13, 9, -15, -2, -18, 16, 17, 2, -11, -7], -15));