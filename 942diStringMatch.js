// 942. DI String Match
// https://leetcode.com/problems/di-string-match/


// first submission, 80ms
const hammingDistance = function(x, y) {
    // create binary strings
    let xBinary = Number(x).toString(2);
    let yBinary = Number(y).toString(2);
    // pad the smaller number and break string into array
    const maxLength = Math.max(xBinary.length, yBinary.length);
    const padZeros = (str, len) => '0'.repeat(len - str.length) + str;
    xBinary = padZeros(xBinary, maxLength).split('');
    yBinary = padZeros(yBinary, maxLength).split('');
    // loop through array, adding to difference if different
    let totalDifference = 0;
    xBinary.forEach((xSlot, i)=> {
        if(xSlot !== yBinary[i]) totalDifference++;
    })
    return totalDifference
};

// second submission, 72ms
const hammingDistance = function(x, y) {
    // create binary strings
    let xBinary = Number(x).toString(2);
    let yBinary = Number(y).toString(2);
    // pad the smaller number and break string into array
    if (xBinary.length >= yBinary.length) {
        yBinary = '0'.repeat(xBinary.length - yBinary.length) + yBinary;
    } else {
        xBinary = '0'.repeat(yBinary.length - xBinary.length) + xBinary;
    }
    // loop through binary, adding to difference if different
    let totalDifference = 0;
    for(let i=0; i<xBinary.length; i++) {
        if(xBinary[i]!== yBinary[i]) totalDifference++
    }
    return totalDifference
};