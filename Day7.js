const string = "malayalam";
let isPlaindrome = true;

function checkPalindrome(s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] != s[end]) {
            isPlaindrome = false;
        }
        start++;
        end--;
    }
}
checkPalindrome(string)
if (isPlaindrome) console.log("Yes it is palindrome");
else console.log("No it is not palindrome");