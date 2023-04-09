/**
 * Definition for isBadVersion()
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */

const BAD_VERSION = 7; //exemple

 const isBadVersion = function(version) {
     return version >= BAD_VERSION; //the value is fixed
 };
 

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 0;
        let right = n;

        while(left < right) {
            let middle = Math.floor((left + right) / 2);
            if(isBadVersion(middle)) {
                right = middle;
            } else {
                left = middle + 1;
            }
        }

        return left;
    };
};

const n = 10;
const firstBad = solution(isBadVersion)(n);

console.log(firstBad);