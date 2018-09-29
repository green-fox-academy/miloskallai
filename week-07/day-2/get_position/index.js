let cityName = document.querySelector('.get-city-name');
let btn = document.querySelector('button');
let city;
let url;
const apiKey = 'AIzaSyChO0AZ-noJA3nkiVHh4piPHviR2vymmhE';

btn.addEventListener('click', () => {
  event.preventDefault();
  url = `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName.value}&key=${apiKey}`;
  console.log(url);
  
  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let lat = data.results[0].geometry.location.lat;
    let lng = data.results[0].geometry.location.lng;
    console.log(`${lat}, ${lng}`);
  })
})






