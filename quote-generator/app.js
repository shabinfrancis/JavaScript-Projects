const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url = "https://dummyjson.com/quotes/random";

async function getquote(url) {
    const res = await fetch(url);
    var data = await res.json();
    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}
// Call the function with the API URL
getquote(api_url);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=600, height=300")
}