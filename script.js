//your code here
function findMajorityElement(nums) {
    let candidate = nums[0];
    let count = 1;

    // Find a candidate for majority element
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            candidate = nums[i];
            count = 1;
        }
    }

    // Verify if the candidate is the majority element
    count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        }
    }

    if (count > Math.floor(nums.length / 2)) {
        return candidate;
    } else {
        return -1; // Majority element not found
    }
}


findMajorityElement(nums)