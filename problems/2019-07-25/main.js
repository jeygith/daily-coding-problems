

/**
 * Find the index of the element in rotated sorted array.
 * @param {number[]} nums
 * @param {number} target
 * @return {number?}
 */
function searchRotatedArray(nums, target) {
    // a variation of binary search
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;

        // check sorted from low to mid
        if (nums[low] <= nums[mid]) {
            if (target >= nums[low] && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        // not sorted from low to mid. mid to high should be sorted, so check target in between mid to high
        else if (target > nums[mid] && target <= nums[high]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return null;
}


export default searchRotatedArray;