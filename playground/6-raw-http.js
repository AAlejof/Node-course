const { error } = require('console');
const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=02add3870472c3d1731ec3a729289849&query=40,-75&units=m'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log('An error', error);
})

request.end()