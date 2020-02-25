/*  PROJECT INSTRUCTIONS
minimum of 5 objects in quote array
Add data to your quote objects
The objects in the quotes array store the individual properties of the quotes.

Add the following properties to each quote object:
quote - string - the actual quote
source - string - the person or character who said it
Add a citation property to at least one quote object. The value should be a string holding a reference to the source of the quote, like the book, movie or song where the quote originates.
Add a year property to at least one quote object. The value should be a string or number representing the year the quote originated.
*/

const quotes = [

    {
        "quote": '"I can do everything through Christ who give me strength."',
        "source": " - Philippians, ",
        "citation": "4:13",
    },

    {
        "quote": '"Rockets are cool. There\'s no getting around that."',
        "source": " - Elon Musk, ",
        "year": 2013
    },

    {
        "quote": '"I Fear the day that technology will surpass our human interaction. The world will have a generation of idiots."',
        "source": " - Albert Einstein, ",
        "year": 1956
    },

    {
        "quote": '"I have not failed, I\'ve just found 10,000 ways that won\'t work."',
        "source": " - Psalm, ",
        "citation": "34:10b",
    },

    {
        "quote": '"It\'s not the years in your life that count. It\'s the life in your years."',
        "source": " - Abraham Lincoln "
    },

    {
        "source": " - Elon Musk ",
        "quote": '"When something is Important enough, you do it even if the odds are against you"',
    },

    {
        "source": " - Henry Ford",
        "quote": '"Whether you think you can or think you cant, your probably right."',
    },

    {
        "source": " - Sarah Silverman, ",
        "quote": '"So I\'m licking jelly off my boyfriend and all of a sudden, I\'m thinking.. I\'m turning into my mother!"',
        "year": 2014
    },

]

/* 
PROJECT INSTRUCTIONS
Create the getRandomQuote function
The getRandomQuote function should create a random number, and use that random number to return a random quote object from the quotes array.

In the function body, create a variable to store a random number ranging from zero to the index of the last item in the quotes array.
Lastly, the function should return a random quote object using the random number variable above and bracket notation on the quotes array.
*/

let getRandomQuote = () => {
    let randomNumber = Math.floor(Math.random() * 8);
    let randomQuoteObject = quotes[randomNumber]
    return randomQuoteObject;

}


/* 
Create the printQuote function
The app should display a new quote each time the user clicks the "Show another quote" button using a printQuote function.

Create a function named printQuote.

You will program the printQuote function to perform three tasks: call the getRandomQuote function, use the returned quote object to build a string of HTML and quote properties, then use that string to display a random quote in the browser.

In the body of the printQuote function, create a variable to store a random quote object from the getRandomQuote() function.

Create another variable to store the HTML string. Set it equal to a string containing two <p> elements. Use this code snippet as a guide for what the HTML string should look like at this point:

<p class="quote"> A random quote </p>
<p class="source"> quote source </p>
The first <p> element should have a class equal to “quote”, and the random quote object’s .quote property nested between the opening and closing <p> tags.
The second <p> element should have a class equal to “source”, and the random quote object’s .source property nested between the tags.
Important Notes:
Do not include the second closing </p> tag for now – you will add it at the end of this step.
You can use template literals here if you’re comfortable with that approach. But if you use traditional strings instead, be sure to wrap the strings in single quotes, so that the HTML classes can use their recommended double quotes.

*/

const printQuote = () => {

    let returnedObject = getRandomQuote();
    let theHTMLString = `<p class="quote"> ${returnedObject.quote} </p> <p class="source"> ${returnedObject.source}`;

    if ("year" in returnedObject && "citation" in returnedObject) {
        theHTMLString += `<span>${returnedObject.citation}</span>`;
        theHTMLString += `<span>${returnedObject.year}</span></p>`;
    } else if ("citation" in returnedObject) {
        theHTMLString += `<span>${returnedObject.citation}</span></p>`;
    } else if ("year" in returnedObject) {
        theHTMLString += `<span>${returnedObject.year}</span></p>`;
    } else {
        theHTMLString += `</p>`;
    }

    return document.getElementById('quote-box').innerHTML = theHTMLString;
}


// Generates a random number between 1 - 255  and assigns to each let 
function getRanColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = .3;
    let rgbaStr = `rgba( ${r} , ${g} , ${b} , ${a} )`
    return rgbaStr;
};
// access body element, sets background color to getRanColor()
function setRandomColor() {
    $("body").css("background-color", getRanColor());
};

$(".btn").click(() => { setRandomColor(); printQuote(); })