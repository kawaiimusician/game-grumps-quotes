let array = require("./data/data.json");

// Creates the random number variable.
const randomNum = () => {
    return Math.floor(Math.random() * array.length);
};

// Capitalizes the first letter in a string
function capitalize(str) {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
}

// Get all quotes
const getAll = () => {
    return array
};

// Get random quote
const getRandomQuote = () => {
    let randNum = randomNum();
    let grumper = array[randNum].grump;
    grumper = capitalize(grumper);
    return `${array[randNum].quote} -${grumper}`;
};

// get quote by grump (pass in grump name, dan, arin, etc)
const getQuotesByGrump = (grumpReq) => {
    let resultsArray = [];
    grumpReq = grumpReq.toLowerCase();
    array.forEach(el => {
        if (el.grump == grumpReq) {
            resultsArray.push(el);
        };
    })
    return resultsArray;
};

// get sfw
const getSFW = () => {
    let sfwArr = []
    const isSFW = array.forEach(el => {
        if (el.nsfw == false) {
            sfwArr.push(el);
        }
    })
    return sfwArr
};

// get no swears
const getClean = () => {
    let noSwear = []
    const isSwear = array.forEach(el => {
        if (el.swears == false) {
            noSwear.push(el);
        }
    })
    return noSwear
};

// get sfw and no swears
const getSFWandClean = () => {
    let noNSFWorSwear = []
    const isNaughty = array.forEach(el => {
        if (el.swears == false && el.nsfw == false) {
            noNSFWorSwear.push(el);
        }
    })
    return noNSFWorSwear
};

// Exports
module.exports = {
    getAll,
    getRandomQuote,
    getQuotesByGrump,
    getSFW,
    getClean,
    getSFWandClean
};
console.log(getSFWandClean());