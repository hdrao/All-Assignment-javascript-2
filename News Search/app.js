let mainContainer = document.querySelector(".main-container");
let submit = document.querySelector("#submit")
let input = document.querySelector("#input")
fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-06-22&sortBy=publishedAt&apiKey=21a4900741c546da838816bd5e7f9b41")
.then(response => response.json())
.then(data => {
    data.articles.forEach(element => {
    const  {title,content,urlToImage} = element; 
        mainContainer.innerHTML += `
                    <div class="card">
                    <img src="${urlToImage}" alt="">
                    <div class="card-content">
                    <h2>${title}</h2>
                    <p>${content}</p>
                    </div>
                </div>
        `
    })
});


submit.addEventListener("click", fetchNews);

function fetchNews() {
  let searchTerm = input.value.trim();
  if (searchTerm !== "") {
    mainContainer.innerHTML = ""; // clear previous results
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-06-22&sortBy=publishedAt&apiKey=21a4900741c546da838816bd5e7f9b41")
      .then(response => response.json())
      .then(data => {
        data.articles.forEach(element => {
          const { title, content, urlToImage } = element;
          let data = element.title.toLowerCase().includes(searchTerm.toLowerCase());
          if (data) {
            mainContainer.innerHTML += `
                    <div class="card">
                    <img src="${urlToImage}" alt="">
                    <div class="card-content">
                    <h2>${title}</h2>
                    <p>${content}</p>
                    </div>
                </div>
            `;
          }
        });
      })
        } else {
    alert("Please enter a search term!");
  }
}