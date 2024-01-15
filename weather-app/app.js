const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=02add3870472c3d1731ec3a729289849&query=37.8267,-122.4233'

request({ url: url, json: true}, ( error, response ) => {
    const data = response.body.current;

    console.log(`It is currently ${data.temperature}ºC out and it feels like ${data.temperature}ºC`);
})