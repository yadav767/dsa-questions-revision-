const s = "coFFee";
let ans = ""
function upperCaseWords(s) {
    let n = s.length
    for (let i = 0; i < n; i++) {
        let ch = s.charCodeAt(i)
        if (s[i] >= "A" && s[i] <= "Z") {
            ans += String.fromCharCode(ch + 32)
        }else{
            ans += String.fromCharCode(ch - 32)
        }
    }
    return ans
}
console.log(upperCaseWords(s));