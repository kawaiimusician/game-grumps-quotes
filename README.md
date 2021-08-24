## Getting Started
To install run the following:
```bash
$ npm i game-grumps-quotes
```

## Usage
**Note:** All **examples** in this documentation will be sfw and no swears, however unless you use the getSFW, getClean, or getSFWandClean methods, you will receive quotes with swearing and that are not safe for work.

- **getall()** method returns an array of objects containing a quote, who said it, if its safe for work, and if it contains swear words.

```json
    {
        "quote": "If space is nothingness then how do we compare speeds other than to comparing planets by how speed they fast each other?",
        "grump": "arin",
        "nsfw": false,
        "swears": false
    }
```

- **getRandomQuote()** method returns a random quote and who said the quote.

```javascript
One day I went to the store, and I saw a guy named Geore. I said where was the G and he lost it in the war. -Arin
```

- **getQuotesByGrump("grumpName")** method returns an array of objects containing only quotes from the specified grump. Available at the moment: "arin" and "dan", more coming soon!

```json 
[
    {
        "quote": "Hey guys. I'm Smiling arin Turnip. Telling you to stay in school. Don't do drugs! Eat your teeth.",
        "grump": "arin",
        "nsfw": false,
        "swears": false
    }
    ...
    .....
    {
        "quote": "You can't open up the story of my life and just go to page 738 and think you know me.",
        "grump": "arin",
        "nsfw": false,
        "swears": false
    }
]
```

- **getSFW()** method returns an array of objects containing only safe for work quotes

```json
[
    {
        "quote": "It's hard to have an existential crisis when everything is so pretty.",
        "grump": "dan",
        "nsfw": false,
        "swears": false
    }
    ...
    .....
    {
        "quote": "No matter how hard you work and how big a celebrity you become, you'll never be as famous as cheese.",
        "grump": "dan",
        "nsfw": false,
        "swears": false
    }
]
```

- **getClean()** method returns an array of objects containing only quotes with no swearing

```json
[
    {
        "quote": "I wish I had my own wikipedia page.",
        "grump": "dan",
        "nsfw": false,
        "swears": false
    }
    ...
    .....
    {
        "quote": "His head is weird.",
        "grump": "dan",
        "nsfw": false,
        "swears": false
    }
]
```

- **getSFWandClean()** method returns an array of objects containing only quotes that have no swearing and are safe for work

```json
[
    {
        "quote": "At age six, I was born without a face.",
        "grump": "arin",
        "nsfw": false,
        "swears": false
    }
    ...
    .....
    {
        "quote": "Don't make fame your goal. Make your goal doing what you do to the best of your ability, and that's something no one can take away from you.",
        "grump": "dan",
        "nsfw": false,
        "swears": false
    }
]
```

```javascript
const grumps = require("game-grumps-quotes");

console.log(getAll()); // Returns an object with all available quotes

console.log(getRandomQuote()); // Returns a random quote

console.log(getQuotesByGrump("dan")); // Returns an object with all quotes by the specified grump
// Currently can use "dan" or "arin", more will be added later

console.log(getSFW()); // Returns an array of objects with all safe for work quotes

console.log(getClean()); // Returns an array of objects with all quotes with no swears

console.log(getSFWandClean()); // Returns an array of objects with all quotes that are safe for work and have no swearing.
```

## Links
<a href="https://www.youtube.com/user/GameGrumps">Game Grumps</a> Youtube channel

<a href="https://gamegrumps.com/">Game Grumps</a> website

<a href="https://en.wikipedia.org/wiki/Game_Grumps">Game Grumps</a> Wikipedia page

<a href="https://gamegrumps.fandom.com/wiki/Game_Grumps_Wiki">Game Grumps</a> Fandom wiki page

<a href="https://www.reddit.com/r/gamegrumps/">Game Grumps</a> subreddit