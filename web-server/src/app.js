const path = require('path')
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Alejo'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Alejo'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Alejo',
        message: 'this is an example message'
    })
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