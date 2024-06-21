
let input_city = document.querySelector("#input-weather");
let get_weather = document.querySelector("#get-weather");


get_weather.addEventListener("click", function() {

    if (input_city == "") {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = '9a5164bc517e6f9751c1652b8fb70d25'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input_city.value}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
        document.querySelector(".city-name").innerHTML= input_city.value.toUpperCase();
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + "Km/h";

       let image  =document.querySelector(".image")

       if (data.weather[0].main == "Clear") {
        image.src = "clear.png";
       }
       if (data.weather[0].main == "Clouds") {
        image.src = "clouds.png";
       }
       if (data.weather[0].main == "Drizzle") {
        image.src = "drizzle.png";
       }
       if (data.weather[0].main == "Humidity") {
        image.src = "humidity.png";
       }
       if (data.weather[0].main == "Mist") {
        image.src = "mist.png";
       }
       if (data.weather[0].main == "Rain") {
        image.src = "rain.png";
       }
       if (data.weather[0].main == "Snow") {
        image.src = "snow.png";
       }
       if (data.weather[0].main == "Wind") {
        image.src = "wind.png";
       }

       document.querySelector(".weather").style.display = "block"; 

    })

})