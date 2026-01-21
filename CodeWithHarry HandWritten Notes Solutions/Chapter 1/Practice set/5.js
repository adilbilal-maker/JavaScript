// Create a dictionary object
let dictionary = {
    apple: "A round fruit with red or green skin",
    book: "A set of written or printed pages",
    computer: "An electronic device used for processing data",
    river: "A natural flowing water body",
    honest: "Truthful and sincere"
};

// Display the dictionary
console.log("Word Meaning Dictionary:");
for (let word in dictionary) {
    console.log(word + " : " + dictionary[word]);
}
