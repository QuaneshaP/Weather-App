const locations = document.getElementById("location");
const submits = document.querySelector(".submitBtn");
const Bodyy = document.querySelector(".bodys");


async function getWeather(){
    const apiKey ="FFVSL2VSX67PG4FUXRLN3J8WS"
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locations.value}?unitGroup=us&include=days&contentType=json&key=${apiKey}`
    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error(`Request Failed ${data.status}`);
      }
      const data = await response.json();

      const weatherCard = document.createElement("div");
      weatherCard.classList.add("weather-card");
      Bodyy.appendChild(weatherCard);
      console.log(data.days[0]);      
    } 
   
    catch(error){
        console.error(error);
    }
   
}
function getChoice(a, b){
    
}
submits.addEventListener("click", getWeather);

