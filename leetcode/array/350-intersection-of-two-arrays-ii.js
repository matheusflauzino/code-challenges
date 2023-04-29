/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = new Map();
    let result = [];
    
    // Count frequency of each element in nums1
    for (let num of nums1) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
    
    // Check intersection with nums2 and update result array
    for (let num of nums2) {
      if (map.has(num) && map.get(num) > 0) {
        result.push(num);
        map.set(num, map.get(num) - 1);
      }
    }
    
    return result;
};

console.log(intersect([1,2,2,1], [2,2]))