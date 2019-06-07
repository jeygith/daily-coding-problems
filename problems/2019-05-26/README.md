
Problem
-------
Given two arrays [-1, 3, 8, 2, 9, 5] and [4, 1, 2, 10, 5, 20] and a target number 24 which is the sum of two numbers one of each array, find the pair of numbers whose sum will equal or is 
close to the given target;


Solution
-------

1. Sort the arrays from smallest to largest and arrange them in a grid with a1 values on the y-axis and a2 values on the y-axis.

2. Start from the right-hand most corner and find the sum of the pairs on that grid, keeping track of the closest number
 to the target. 
 
3. Work your way down the the grid till the last element on the bottom-left of the grid

complexities
O(n log n) - for the sorting;
O(n) for the operations on the grid
O(x.n) where x is the number of comparisons between the smallestDiff and the target
