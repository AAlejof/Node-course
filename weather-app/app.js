const request = require('postman-request');
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=02add3870472c3d1731ec3a729289849&query=37.8267,-122.4233&units=m'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {

//         console.log('Unable to connect to weather service!');

//     } else if (response.body.error) {

//         console.log('Unable to find location!');

//     } else {
//         const data = response.body.current;

//         console.log(`${data.weather_descriptions[0]}. It is currently ${data.temperature}ºC out and it feels like ${data.feelslike}ºC`);
//     }
// })

// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWFsZWpvZiIsImEiOiJjbHJnaHp6M3UwaGtpMnJwYmgxc3hvMGQ2In0.QHwURSlBQFlrjEh571Zh6g&limit=1'

// request({ url: geoUrl, json: true }, (error, response) => {
//     if (error) {

//         console.log('Unable to connect to geolocation!');

//     } else if (response.body.features.length === 0) {

//         console.log('Unable to find location! Try another search...');

//     } else {
//         const data = response.body.features;

//         console.log(`The latitude is ${data[0].center[1]}º and the longitude is ${data[0].center[0]}º`);
//     }
// })



geocode('Buenos Aires', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})