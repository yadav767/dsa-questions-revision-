const string = "aseionkduwocs";
function countSort(s) {
    let n = s.length;
    //Find max character
    let max = s.charCodeAt(0);
    for (let i = 0; i < n; i++) {
        if (s.charCodeAt(i) > max) {
            max = s.charCodeAt(i)
        }
    }
    //Create new frequency Array of the max size +1;
    let freq = new Array(max + 1).fill(0);

    //Increase the frequency of the each character;
    for (let i = 0; i < n; i++) {
        freq[s.charCodeAt(i)]++;
    }

    //Iterate the freq array and add the specific character to the string ;

    let ans = "";
    for (let i = 0; i < freq.length; i++) {
        while (freq[i] > 0) {
            ans += String.fromCharCode(i);
            freq[i]--
        }
    }
    return ans;
}
console.log(countSort(string));