const imagesArray =[
  {
    title: "Apple",
    description: "A juicy and crunchy fruit, perfect for snacking",
    image: "https://media.istockphoto.com/id/1432705972/photo/red-apple-bite-isolated-on-white-background-clipping-path-full-depth-of-field.jpg?s=1024x1024&w=is&k=20&c=ap3wvmWmI8R9hIs7NVHyAF8ojomQTIVmS3cy_JA7Fys="
  },
  {
    title: "Lychee",
    description: "A sweet and creamy fruit, great for smoothies and baking",
    image: "https://media.istockphoto.com/id/1434408837/photo/lychee-on-lychee-tree.jpg?s=1024x1024&w=is&k=20&c=lVGiGFpCVWImXXIZsn2ImwzbFUv1nF1dIOQJiaD_wSQ="
  },
  {
    title: "Mango",
    description: "A tropical and sweet fruit, perfect for salads and desserts",
    image: "https://source.unsplash.com/1600x900/?mango"
  },
  {
    title: "Orange",
    description: "A tangy and refreshing fruit, great for juicing and snacking",
    image: "https://source.unsplash.com/1600x900/?orange"
  },
  {
    title: "Watermelon",
    description: "A refreshing and hydrating fruit, perfect for summer gatherings",
    image: "https://source.unsplash.com/1600x900/?watermelon"
  },
  {
    title: "Grapes",
    description: "A sweet and juicy fruit, great for snacking and making wine",
    image: "https://source.unsplash.com/1600x900/?grapes"
  },
  {
    title: "Pineapple",
    description: "A tropical and tangy fruit, perfect for BBQs and desserts",
    image: "https://source.unsplash.com/1600x900/?pineapple"
  },
  {
    title: "Peach",
    description: "A sweet and juicy fruit, great for snacking and baking",
    image: "https://source.unsplash.com/1600x900/?peach"
  }
];


function dataManager () {

let heading = document.querySelector(".card-ex");
heading.innerHTML ="";
imagesArray.forEach(function(image, index) {
  heading.innerHTML += `
   <div class="card-style" style="background-image: url(${image.image});">
        <div class="card-ex-content">
            <div class="card-ex-text">
                <h1 class="card-heading">${image.title}</h1>
                <h4 class="card-des">${image.description}</h4>
            </div>
            <div class="card-ex-buttons">
            <button type="button" onClick="edit(this)">Edit</button>
            <button id="${index}" type="button" onClick="remove(this)">Remove</button>
            </div>
        </div>    
        </div>
</div>

    `
})};

dataManager();

  function edit(data) {
  let datta = data.parentElement.previousElementSibling.querySelector('.card-des');
  datta.innerHTML=prompt("Type Something...") + "(Edited)";
  }


  function remove(dta) {
    const index = dta.id;
    imagesArray.splice(index, 1);
    dataManager();
}



