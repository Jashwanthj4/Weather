var SearchBtn = document.getElementsByClassName("input-search")[0]
SearchBtn.addEventListener("click",GetValue);
var countTaps = 0;

const tempHeading = document.getElementsByClassName("card-temp-value")[0];

const tempCondition = document.getElementsByClassName("card-temp-condition")[0];

const tempHumidity = document.getElementsByClassName("card-temp-humidity")[0];

const tempTime = document.getElementsByClassName("card-temp-time")[0];
const tempDate = document.getElementsByClassName("card-temp-date")[0];

const tempLoc = document.getElementsByClassName("card-temp-location")[0]


var mainContainerImg = document.getElementById("main-containerID");
var DataContainerImg = document.getElementById("data-containerID");

// On page load, hide containers
window.onload = function() {
  document.querySelector('.weather-chart-container').classList.add('hidden2');
  document.getElementById('data-containerID').classList.add('hidden2');
};

function GetValue(){
  var InpValue = document.getElementsByClassName("input-field")[0]
  const cityname = InpValue.value;
  console.log(InpValue.value)
  const apiLink = `http://api.weatherapi.com/v1/forecast.json?key=1831c43826f143eabf6145453240904&q=${cityname}&days=5`;
  InpValue.value = ""
  
  const overlayer = document.getElementsByClassName("overlay")[0];
  const overlayertxt = document.getElementsByClassName("overlay-text")[0];
  overlayertxt.innerHTML = ""
  overlayer.classList.remove("hidden")
  countTaps+=1
  console.log(countTaps)

  const dataoverlayer = document.getElementsByClassName("hidden2")[0];
  dataoverlayer.classList.add("card-container");

  const apiRequestData = {
    method:"POST",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Header":"*"
      },
  }
  const res = fetch(apiLink,apiRequestData)
  res.then(res => res.json()).then(data=>{
    const condition = data.current.condition.text
    const city = data.location.name
    const state = data.location.region
    const country = data.location.country
    const tempC = data.current.temp_c
    const Humid = data.current.humidity
    const DateTime = data.location.localtime.split(" ").reverse().join(" ");
    const CurTime = DateTime.split(" ")
    const CurDate = CurTime[1].split("-").reverse().join("-")
    
  
    mainContainerImg.style.backgroundImage = 'url("Images/Weather-Bg.jpg")';
    DataContainerImg.style.backgroundImage = 'url("Images/Weather-Bg.jpg")';
    document.getElementById("Weather-IconID").src = "Images/Weather-icon.png"
    document.getElementById("search-containerID").style.borderColor = "black";
    document.getElementsByClassName("input-search")[0].style.borderColor = "black";
    document.getElementById("card-containeer-dataID").style.color = "black";
    document.getElementById("Complete-btnID").style.borderColor = "black";
    document.getElementById("Complete-btnID").style.color = "black";
    document.getElementById("input-fieldID").style.color = "black";
    if(condition.toLowerCase().includes("rain") ||condition.toLowerCase().includes("strom")){
      console.log("Dark")
      mainContainerImg.style.backgroundImage = 'url("Images/Rainy-1.jpeg")';
      DataContainerImg.style.backgroundImage = 'url("Images/Rainy-1.jpeg")';
      document.getElementById("Weather-IconID").src = "Images/Rainy-icon.png"
      document.getElementById("card-containeer-dataID").style.color = "white";
      document.getElementById("Complete-btnID").style.borderColor = "white";
      document.getElementById("Complete-btnID").style.color = "white";
      document.getElementById("search-containerID").style.borderColor = "white";
      document.getElementsByClassName("input-search")[0].style.borderColor = "white";
      document.getElementById("input-fieldID").style.color = "white";
      // document.getElementById("input-fieldID").ariaPlaceholder.style.color = "white";
    }
    else if(condition.toLowerCase().includes("sunny")){
      mainContainerImg.style.backgroundImage = 'url("Images/Sunny-1.jpeg")';
      DataContainerImg.style.backgroundImage = 'url("Images/Sunny-1.jpeg")';
      document.getElementById("Weather-IconID").src = "Images/Sunny-icon.png"
    }
    else if( condition.toLowerCase().includes("cloudy") ){
      mainContainerImg.style.backgroundImage = 'url("Images/Cloudy-1.jpeg")';
      DataContainerImg.style.backgroundImage = 'url("Images/Cloudy-1.jpeg")';
      document.getElementById("Weather-IconID").src = "Images/Cloudy-icon.png"
      document.getElementById("card-containeer-dataID").style.color = "white";
      document.getElementById("Complete-btnID").style.borderColor = "white";
      document.getElementById("Complete-btnID").style.color = "white";
      document.getElementById("search-containerID").style.borderColor = "white";
      document.getElementsByClassName("input-search")[0].style.borderColor = "white";
      document.getElementById("input-fieldID").style.color = "white";
      // document.getElementById("input-fieldID").style.color = "white";
    }
    else if( condition.toLowerCase().includes("mist") ){
      mainContainerImg.style.backgroundImage = 'url("Images/Mist-1.jpeg")';
      DataContainerImg.style.backgroundImage = 'url("Images/Mist-1.jpeg")';
      document.getElementById("Weather-IconID").src = "Images/Cloudy-icon.png"
      document.getElementById("card-containeer-dataID").style.color = "white";
      document.getElementById("Complete-btnID").style.borderColor = "white";
      document.getElementById("Complete-btnID").style.color = "white";
      document.getElementById("search-containerID").style.borderColor = "white";
      document.getElementsByClassName("input-search")[0].style.borderColor = "white";
      document.getElementById("input-fieldID").style.color = "white";
    }
    else if( condition.toLowerCase().includes("snow") ){
      mainContainerImg.style.backgroundImage = 'url("Images/Snowy-1.jpeg")';
      DataContainerImg.style.backgroundImage = 'url("Images/Snowy-1.jpeg")';
      document.getElementById("Weather-IconID").src = "Images/Snowy-icon.png"
    }
    else if( condition.toLowerCase().includes("wind") ){
      mainContainerImg.style.backgroundImage = 'url("Images/Windy-1.jpeg")';
      DataContainerImg.style.backgroundImage = 'url("Images/Windy-1.jpeg")';
      document.getElementById("Weather-IconID").src = "Images/Windy-icon.png"
      document.getElementById("Complete-btnID").style.borderColor = "white";
      document.getElementById("Complete-btnID").style.color = "white";
      document.getElementById("search-containerID").style.borderColor = "white";
      document.getElementsByClassName("input-search")[0].style.borderColor = "white";
      document.getElementById("input-fieldID").style.color = "white";
      
    }
    // else{
    //   mainContainerImg.style.backgroundImage = 'url("Images/Weather-Bg.jpg")';
    //   DataContainerImg.style.backgroundImage = 'url("Images/Weather-Bg.jpg")';
    // }
    tempHeading.innerText = tempC;
    tempCondition.innerText = condition;
    tempHumidity.innerText = "Humidity : "+Humid+"%";
    tempTime.innerText = CurTime[0];
    tempDate.innerText = CurDate;
    tempLoc.innerText = city+","+state+","+country
    // --- 5-day forecast summary cards ---
    const forecastDays = data.forecast.forecastday;
    const summaryContainer = document.querySelector('.forecast-summary-container');
    summaryContainer.innerHTML = `<div style='display:flex;gap:1.2rem;justify-content:center;flex-wrap:wrap;'>${forecastDays.map(day => {
      const icon = day.day.condition.icon;
      const date = day.date;
      const minT = day.day.mintemp_c;
      const maxT = day.day.maxtemp_c;
      const avgT = day.day.avgtemp_c;
      const rain = day.day.totalprecip_mm;
      const cond = day.day.condition.text;
      return `<div style='background:rgba(255,255,255,0.85);border-radius:1.2rem;box-shadow:0 2px 8px rgba(78,84,200,0.10);padding:1.2rem 1.5rem;min-width:120px;display:flex;flex-direction:column;align-items:center;gap:0.5rem;'>
        <div style='font-weight:bold;color:#4e54c8;'>${date}</div>
        <img src='${icon}' alt='${cond}' style='width:48px;height:48px;'>
        <div style='font-size:1.1rem;font-weight:700;'>${cond}</div>
        <div style='font-size:0.98rem;'>Avg: <b>${avgT}°C</b></div>
        <div style='font-size:0.98rem;'>Min: <b>${minT}°C</b> / Max: <b>${maxT}°C</b></div>
        <div style='font-size:0.98rem;'>Rain: <b>${rain} mm</b></div>
      </div>`;
    }).join('')}</div>`;
    // Hide chart container if it exists
    const chartCont = document.querySelector('.weather-chart-container');
    if(chartCont) chartCont.classList.add('hidden2');
    // Show containers after successful fetch
    document.getElementById('data-containerID').classList.remove('hidden2');
    // Also show the inner data div if hidden
    const innerDataDiv = document.querySelector('#data-containerID > div.hidden2');
    if(innerDataDiv) innerDataDiv.classList.remove('hidden2');
    }).catch(err=>{
      const overlayer = document.getElementsByClassName("overlay")[0];
      const overlayertxt = document.getElementsByClassName("overlay-text")[0];
      overlayertxt.innerHTML = "<span style='color: red; font-weight: bold;'>❌ Couldn't Find Location. Please enter a valid city name!</span>";
      overlayer.classList.remove("hidden"); // Always show overlay
      overlayer.style.zIndex = 9999; // Make sure overlay is on top
      // Show data-container so overlay is visible
      document.getElementById('data-containerID').classList.remove('hidden2');
      // Reset data display to default
      tempHeading.innerText = "--";
      tempCondition.innerText = "--";
      tempHumidity.innerText = "--";
      tempTime.innerText = "--";
      tempDate.innerText = "--";
      tempLoc.innerText = "--";
      mainContainerImg.style.backgroundImage = 'url("Images/Weather-Bg.jpg")';
      DataContainerImg.style.backgroundImage = 'url("Images/Weather-Bg.jpg")';
      document.getElementById("Weather-IconID").src = "Images/weather-icon.png";
      document.getElementById("search-containerID").style.borderColor = "black";
      document.getElementsByClassName("input-search")[0].style.borderColor = "black";
      document.getElementById("input-fieldID").style.color = "black";
      // Hide only the chart on error
      document.querySelector('.weather-chart-container').classList.add('hidden2');
  })

}

 