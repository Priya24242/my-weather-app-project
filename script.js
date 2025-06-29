const apiKey = "81621c8ab1935971aee9e193cf43ceb9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".top input");
const searchbtn = document.querySelector(".top button");
const weathericon = document.querySelector(".weather img");


async function checkWeather(city) {
    const response  = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    let cityname = document.querySelector(".city").innerHTML=data.name;
    let temp = document.querySelector(".temp").innerHTML=Math.floor(data.main.temp) +"°C";
    let wind = document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    let humidity = document.querySelector(".humi").innerHTML=data.main.humidity + "%";
    let condn = document.querySelector(".feel").innerHTML=data.weather[0].main;
 
      if(data.weather[0].main =="Clear"){
       weathericon.src = "sun (2).png";
      }
       else if(data.weather[0].main =="Clouds"){
        weathericon.src = "cloudy.png";
       }
       else if(data.weather[0].main =="Rain"){
        weathericon.src = "rain.png";
       }
       else if(data.weather[0].main =="Smoke"){
        weathericon.src = "Smoke.png";
       }
       else if(data.weather[0].main =="Drizzle"){
        weathericon.src = "drizzle.png";
       }
       else if(data.weather[0].main =="Haze"){
        weathericon.src = "haze.png";
       }else{
        weathericon.src = "weatherf.png";
       }

}
searchbtn.addEventListener("click", () => {
    checkWeather(search.value);
});
