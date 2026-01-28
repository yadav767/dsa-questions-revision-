//-> Pangram sentence are those sentence in which every alphabet has to appear at least once ;

let str = "the quick brown fox jumps over the lazy dog";
function isPangram(s) {
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (s[i] != " ") {
            set.add(s.charAt(i))
        }
    }
    if(set.size===26){
        return true
    }else{
        return false
    }
}
console.log(isPangram(str));