/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = []
 
     let words = s.split(' ')
 
     for(const word of words) {
         let right = word.length - 1;
         while(right >= 0) {
             result.push(word.charAt(right--))
         }
         result.push(' ')
     }
     result.pop();
 
     return result.join("");
 };

console.log(reverseWords("Let's take LeetCode contest"))