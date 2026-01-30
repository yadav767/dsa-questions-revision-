//Happy number
let num=19;

function isHappy(n){
    let set=new Set()
    while(true){
        let sum=0 ;
        while(n){
            let rem=n%10;
            sum+=rem*rem;
            n=Math.floor(n/10);
        }
        if(sum==1) return true;
        else if(set.has(sum)) return true;
        else set.add(sum)
    }
}
console.log(isHappy(num));