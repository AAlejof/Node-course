const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=02add3870472c3d1731ec3a729289849&query='+`${longitude},${latitude}`+'&units=m'
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, ( `${response.body.current.weather_descriptions}. It is currently ${response.body.current.temperature}ºC and it feels like ${response.body.current.feelslike}ºC.`));
        }
    })
};

module.exports = forecast;