let str = "malayalam";
function checkPalindrome(str, s, e) {
    if (s > e) return true
    if (str[s] != str[e]) return false
    return checkPalindrome(str, s + 1, e - 1)
}

console.log(checkPalindrome(str,0,str.length-1));               