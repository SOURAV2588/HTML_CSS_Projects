window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let iconId = document.querySelector(".icon");
  let temperatureSection = document.querySelector(".temperature");
  let temperatureSectionSpan = document.querySelector(".temperature span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const apiKey = `${proxy}https://api.darksky.net/forecast/92347411a3fbf0541d5a8bbec7a7149d/${lat},${long}`;


      fetch(apiKey)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const {
            temperature,
            summary,
            icon
          } = data.currently;
          //set dom elements from API
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;
          setIcons(icon, iconId);
          //change farenheit to celcius
          temperatureSection.addEventListener("click", () => {
            if (temperatureSectionSpan.textContent == "F") {
              temperatureSectionSpan.textContent = "C";
              temperatureDegree.textContent = Math.floor(convertToCelcius(temperature));
            } else {
              temperatureSectionSpan.textContent = "F";
              temperatureDegree.textContent = temperature;
            }
          })
        })
    });


    function setIcons(icon, iconId) {
      const skycons = new Skycons({
        color: "white"
      });
      const currentIcon = icon.replace(/-/g, "_").toUpperCase();
      skycons.play();
      return skycons.set(iconId, Skycons[currentIcon]);
    }

    function convertToCelcius(farenheit) {
      return (farenheit - 32) * (5 / 9);
    }

  } else {
    h1.textContent = "This is not expected";
  }
});