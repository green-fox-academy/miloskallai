let cityName = document.querySelector('.get-city-name');
let btn = document.querySelector('button');
let infoContainer = document.querySelector('.info-container');
let city;
let url;
const apiKey = 'deleted';
let embedLocation; 
const iFrame = document.querySelector('iframe');


btn.addEventListener('click', () => {
  event.preventDefault();
  url = `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName.value}&key=${apiKey}`;
  
  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let lat = data.results[0].geometry.location.lat;
    let lng = data.results[0].geometry.location.lng;
    console.log(`${lat}, ${lng}`);

    let latSpan = document.createElement('span');
    latSpan.classList.add = 'latitude';
    latSpan.innerHTML = `lattitude: ${lat}, `;
    infoContainer.appendChild(latSpan);

    let lngSpan = document.createElement('span');
    lngSpan.classList.add = 'longitude';
    lngSpan.innerHTML = `longitude: ${lng}`;
    infoContainer.appendChild(lngSpan);
    iFrame.src=`https://www.google.com/maps/embed/v1/place?q=${cityName.value}&key=${apiKey}`;
    iFrame.style.visibility = 'visible';

  })

  ;
})






