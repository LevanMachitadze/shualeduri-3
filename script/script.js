let latitudeP = document.getElementById('latitude');
let longitudeP = document.getElementById('longitude');
let latitude = '41.716667';
let longitude = '44.783333';
latitudeP.textContent = `latitude : ${latitude}`;
longitudeP.textContent = `longitude : ${longitude}`;
longitudeP.classList.add('location');
latitudeP.classList.add('location');
let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,is_day,wind_speed_10m`;

let dayNight = document.getElementById('dayNight');
let dayIcon = document.createElement('img');
dayNight.appendChild(dayIcon);

let climat = document.getElementById('climatIcon');
let climatIcon = document.createElement('img');

climat.appendChild(climatIcon);

let degrees = document.getElementById('degrees');

let farengate = document.getElementById('farengate');

let windSpeed = document.getElementById('windSpeed');

fetch(url)
  .then((Response) => Response.json())
  .then((data) => {
    if (data.current.is_day === 1) {
      dayIcon.src = './assets/Ellipse 30.png';
    } else if (data.current.is_day === 0) {
      dayIcon.src = './assets/Group 1214 (1).png';
    }

    degrees.textContent = `${data.current.temperature_2m}°`;
    if (data.current.temperature_2m <= -1) {
      climatIcon.src = './assets/snow.png';
    } else if (
      data.current.temperature_2m >= 0 &&
      data.current.temperature_2m <= 10
    ) {
      climatIcon.src = './assets/group 1214.png';
    } else if (
      data.current.temperature_2m > 10 &&
      data.current.temperature_2m <= 30
    ) {
      climatIcon.src = './assets/Union.png';
    } else if (data.current.temperature_2m > 30) {
      climatIcon.src = './assets/Group 1231.png';
    }

    farengate.textContent = `℉ ${data.current.temperature_2m * 1.8 + 32}`;

    windSpeed.textContent = ` ${data.current.wind_speed_10m} km/h`;
  });
