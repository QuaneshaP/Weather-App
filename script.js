const locations = document.getElementById("location"); // Location that the user types into the input box 
const submits = document.querySelector(".submitBtn"); // Submit button for the user to submit the location.
const Bodyy = document.querySelector(".bodys"); // Main body to store the weather card.

//conditions, humidity, preciptype, windspeed, feelslike
async function getWeather(){// Overall function to return weather data to the user.
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

      //Portions to but inside of weather card.
      const topHalfCard = document.createElement("div");
      const botHalfCard = document.createElement("div");

      //Goes in top half of weather card.
      const headline = document.createElement("h1");
      headline.textContent = locations.value;
      topHalfCard.appendChild(headline);
      topHalfCard.classList.add("top-half");


      // Add both halfs to the weather card
      weatherCard.appendChild(topHalfCard);
      weatherCard.appendChild(botHalfCard);
      
      //Array to hold weather data over the course of two weeks.
      const weatherConditions = [];
      weatherConditions.push(data.days);

      console.log(weatherConditions[0][0]);
      const dayOne = weatherConditions[0][0]; //Array to hold weather data for the current day.
      console.log(dayOne.conditions);
      // Data to be displayed on the weather card.
      const selected = {
        Date: dayOne.datetime,
        Conditions: dayOne.conditions,
        Temperature: dayOne.temp,
        Description: dayOne.description,
        Precipitation: dayOne.preciptype,
        FeelsLike: dayOne.feelslike,
        Picture: dayOne.icon,
      };
      //Store image for the current weather conditons.
      const images = document.createElement("img");
      topHalfCard.appendChild(images);
      const icon = selected.Picture;
      switch(icon){
        case "partly-cloudy-day":
          images.src = "icons8-partly-cloudy-day-50.png";
          break;
        case "rain":
          images.src = "icons8-rain-50.png";
          break;
        case "thunder-rain":
          images.src = "icons8-lightning-bolt-50.png";
          break;
        case "cloudy":
          images.src = "icons8-clouds-50.png";
          break;  
         
      }
      

     

      
    } 
   
    catch(error){
        console.error(error);
    }
   
}

submits.addEventListener("click", getWeather);

