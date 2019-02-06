// 961. N-Repeated Element in Size 2N Array
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

// First submission, 88ms
const repeatedNTimes = numbers => {
    for (let i = 0; i < numbers.length; i++) {
        // loop through numbers, if number is inside the remaining slice
        // of array, return that number
        const num = numbers[i]
        const remaining = numbers.slice(i + 1)
        if (remaining.indexOf(num) !== -1) return num
    }
}

// Second submission, 76ms
const repeatedNTimes = numbers => {
    const lib = {}
    for (let i = 0; i < numbers.length; i++) {
        // loop through numbers, if number inside lib, return that number
        // otherwise add that number to lib as a key
        if (lib[numbers[i]]) {
            return numbers[i]
        } else {
            lib[numbers[i]] = true
        }
    }
}