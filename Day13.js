//Count stones and jewels 

let jewels = "aA";
let stones = "aAAbbbb";

function countJewels(s,j){
    let set =new Set(j)
    let count=0
    for(let i=0 ;i<s.length ;i++){
        if(set.has(s[i])){
            count++;
        }
    }
    return count ;
}
console.log(countJewels(stones,jewels));