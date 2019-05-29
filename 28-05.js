/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

    For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

var nums = [5, 3, 2];

var sumToCheck = 7;

var numbers = [];


function checkIfNumExists(nums, sumToCheck) {


    for (var i = 0; i < nums.length; i++) {
        var arr2 = nums.filter(a => a !== nums[i]);

        var arr3 = arr2.filter(a => {
            if (nums[i] + a === sumToCheck) {
                numbers.push(nums[i], a);
            }
            ;
            return nums[i] + a === sumToCheck
        });
        if (arr3.length > 0) {
            return 1;
        }

    }
    return 0;
}

if (checkIfNumExists([5, 3, 2], 7)) {

    console.log(`The sum of ${numbers.toString()}  add up to ${sumToCheck}`)
} else {
    console.log("No 2 numbers add up to " + sumToCheck);
}