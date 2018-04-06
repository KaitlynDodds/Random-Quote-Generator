
// quotes array
const quotes = [
	{
		quote: "he best way to remember your wife's birthday is to forget it once.",
		source: "E. Joseph Cossman",
		citation: "Famous Quotes and Authors",
		tags: [
			"funny"
		]
	},
	{
		quote: "The language of friendship is not words, but meanings.",
		source: "Henry David Thoreau",
		citation: "Famous Quotes and Authors",
		tags: [
			"friendship"
		]
	},
	{
		quote: "It ain't those parts of the Bible that I can't understand that bother me, it's the parts that I do understand.",
		source: "Mark Twain",
		year: "1987",
		tags: [
			"religion"
		]
	},
	{
		quote: "Home is the place, when you have to go there, they have to take you in.",
		source: "Robert Frost",
		tags: [
			"poetry"
		]
	},
	{
		quote: "I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live up to what light I have.",
		source: "Abraham Lincoln",
		citation: "Famous Quotes and Authors",
		year: "1914",
		tags: [
			"political"
		]
	},
	{
		quote: "Success is never found. Failure is never fatal. Courage is the only thing.",
		source: "Winston Churchill",
		citation: "Famous Quotes and Authors",
		year: "1944",
		tags: [
			"political"
		]
	},
]






// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

