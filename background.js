const body = document.body;
const mainCard = document.querySelector("main");

const setBackground = (data) => {
    switch (data.weather[0].main) {
      case "Clear":
        body.style.backgroundImage = "url('/assets/clear.png')";
        mainCard.style.backgroundImage = "url('/assets/clear.png')";
        break;
      case "Clouds":
        body.style.backgroundImage = "url('/assets/cloud.png')";
        mainCard.style.backgroundImage = "url('/assets/cloud.png')";
        break;
      case "Snow":
        body.style.backgroundImage = "url('/assets/snow.png')";
        mainCard.style.backgroundImage = "url('/assets/snow.png')";
        break;
      case "Thunderstorm":
        body.style.backgroundImage = "url('/assets/thunder.png')";
        mainCard.style.backgroundImage = "url('/assets/thunder.png')";
        break;
      case "Rain":
        body.style.backgroundImage = "url('/assets/rain.png')";
        mainCard.style.backgroundImage = "url('/assets/rain.png')";
        break;
      case "Dizzle":
        break;
      case "mist":
        break;
    }
  };

export default setBackground;