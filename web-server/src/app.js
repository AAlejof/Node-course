const express = require('express');

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather<h1>')
});

app.get('/help', (req, res) => {
    res.send(
        [
            {
                name: 'Alejo',
                age: 35
            },
            {
                name: 'Nati',
                age: 31
            },
            {
                name: 'Celine',
                age: 28
            }
        ])
})

app.get('/about', (req, res) => {
    res.send('<h1>this is about learning node</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        latitude: -58.4370894,
        longitude: -34.6075682,
        location: 'Buenos Aires, Argentina',
        forecast: [ [ 'Partly cloudy' ], 26, 27 ]
      })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})