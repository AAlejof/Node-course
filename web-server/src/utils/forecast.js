const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dc620a780b22c142dd25cb16a3093387&query='+`${longitude},${latitude}`+'&units=m'
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, ( `${body.current.weather_descriptions}. It is currently ${body.current.temperature}ºC and it feels like ${body.current.feelslike}ºC. Humidity ${body.current.humidity}%`));
        }
    })
};

module.exports = forecast;