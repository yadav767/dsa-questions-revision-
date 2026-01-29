//->Two string can be anagram if the both the string have tha same number character ,order does not matter.
let str1 = "listen";
let str2 = "silent";

function areAnagram(s1,s2){
    let freq=new Array(123).fill(0);
    for(let i=0 ;i<s1.length ;i++){
        freq[s1.charCodeAt(i)]++
    }
    for(let i=0 ;i<s1.length ;i++){
        freq[s2.charCodeAt(i)]--
    }
    for(let i =0 ;i<freq.length ;i++){
        if(freq[i]!=0){
            return false
        }
    }
    return true
}
console.log(areAnagram(str1,str2));