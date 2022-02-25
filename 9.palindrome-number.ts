/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    const ax: string = x.toString();
    const cx: string = reverseString(ax);

    if (ax === cx) {
        return true;
    } else {
        return false;
    }
};

function reverseString(str: string) {

    // return a new array of strings
    const arrayStrings = str.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}

// @lc code=end

