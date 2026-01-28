//Tumhe ek string di hogi and tumhe us string ke har  ek word ke first and last charactr and lact character ko uppercase mai karn ahia hia.
let str = "hello world from javascript";

function toUpperCase(s) {
    let arrStr = s.split(" ")
    let ans = ""
    for (let i = 0; i < arrStr.length; i++) {
        let word = arrStr[i];
        if (word.length == 2) {
            ans += word.toUpperCase()

        } else {
            ans += word.charAt(0).toUpperCase() + word.substring(1, word.length - 1)+ word.charAt(word.length - 1).toUpperCase() + " "
        }
    }
    return ans
}
console.log(toUpperCase(str));