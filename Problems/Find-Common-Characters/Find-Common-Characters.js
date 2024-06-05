/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let letters = new Map();
    for (letter of [...words[0]])
        letters.set(letter, (letters.get(letter) ?? 0) + 1);
    for (let i = 1; i < words.length; i++) {
        const map = new Map();
        for (letter of [...words[i]])
            map.set(letter, (map.get(letter) ?? 0) + 1);
        letters = new Map([...letters.entries()]
                .map(en => [en[0], Math.min(en[1], map.get(en[0]) ?? 0)]));
    }
    return [...letters.entries()].map(en => {
        let arr = []
        for (let i = 0; i < en[1]; i++)
            arr.push(en[0])
        return arr;
    }).flat();
};
