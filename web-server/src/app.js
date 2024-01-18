const path = require('path')
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));


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