// fetch("https://api.quotable.io/quotes/random")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.);
//   })

let api = "https://api.quotable.io/random"
async  function fetchApi (url) {
    const response = await fetch(url);
    const data = await response.json();  
    document.querySelector(".author").innerHTML = data.author;

    document.querySelector("#content").innerHTML = data.content;
  }



function twitter () {
  window.open("https://twitter.com/intent/tweet?text=Hello%20world",
    "twitter",
    "width=500,height=500,left=100,top=100"
  )
}
