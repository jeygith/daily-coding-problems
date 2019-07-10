function main() {
    console.log("Hello, world!")
}

function solution() {
    console.log("solution");
    return "solution";
}

function minimumSwaps(ratings) {
    var swap = 0;
    var visited = new Array(ratings.length).fill(0);
    var finalstate = [...ratings].sort(function (a, b) {
        return a - b
    }).reverse();
    ratings.forEach(function (rating, i) {
        var cycle = 0;
        console.log("visited array: " + visited);
        console.log("rating before: " + rating);


        while (visited[i] == 0) {

            visited[i] = 1;
            i = finalstate.indexOf(rating);
            rating = ratings[i];
            console.log("rating during: " + rating);

            console.log("ratings array: " + ratings);
            cycle += 1;
        }
        console.log("cycles: " + cycle);
        console.log("swap before: " + swap);

        if (cycle != 0) {
            swap += cycle - 1;

        }
        console.log("swap after: " + swap);

    });
    console.log(`ratings final: ${ratings}`);

    return swap;
}


console.log(`\nminimumswaps: ${minimumSwaps([4, 3, 2, 5, 1])}`);

console.log(`\nminimumswaps: ${minimumSwaps([4 ,5 ,2 ,3 ,1])}`);