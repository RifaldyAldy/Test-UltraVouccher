function anagram(arr) {
    const anagrams = [];
    
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        let isAdded = false;
        
        for (let j = 0; j < anagrams.length; j++) {
            const sortedWord = sortingWord(anagrams[j][0].split(""))
            const sortedCurrWord = sortingWord(word.split(""));
            
            if (sortedWord === sortedCurrWord) {
                anagrams[j].push(word);
                isAdded = true;
                break;
            }
        }
        
        if (!isAdded) {
            anagrams.push([word]);
        }
    }
    
    return anagrams;
}

function sortingWord(word){
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word.length - 1; j++) {
            if (word[j].charCodeAt(0) > word[j + 1].charCodeAt(0)) {
                let temp = word[j];
                word[j] = word[j + 1];
                word[j + 1] = temp;
            }
        }
    }

    return word.join("");
}

const arr = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
console.log(anagram(arr));
