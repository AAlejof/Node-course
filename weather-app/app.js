const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=02add3870472c3d1731ec3a729289849&query=37.8267,-122.4233'

request({ url: url}, ( error, response ) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
})