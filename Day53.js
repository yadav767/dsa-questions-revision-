const s = "   fly me   to   the moon  ";

function lengthOfLastWord(a) {
    const arr = a.split(" ")
    const filteredArray = arr.filter(element => element.length > 0)

    const lastWord =  filteredArray[filteredArray.length -1 ]

    return lastWord.length

}

console.log(lengthOfLastWord(s));