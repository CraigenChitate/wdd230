
// select HTML elements in the document
const currentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const Speed = document.querySelector('#windSpeed');


const url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c39b8cb0c4372beb97c3c6f080a86d40";


async function apiFetch(apiURL) {
    
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();

      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } 
  apiFetch(url);

function displayResults(weatherData){

    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
    Speed.innerHTML =  weatherData.wind.speed;

    const temp = weatherData.main.temp.toFixed(0);
    const windChill = document.getElementById("windChill");
    const windS = weatherData.wind.speed;
    
    console.log(temp)
    console.log(windS)
    
    if (temp <= 50 && windS > 3) {
    
        const windChill_f = 35.74 + (0.6215 * temp) - (35.75 * windS**0.16) + (0.4275 * temp * windS**0.16);
        windChill.innerText = Math.round(windChill_f);
    
    }
    
    else {
        windChill.innerText = "N/A";
    }
}

