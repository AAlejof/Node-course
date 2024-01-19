const path = require('path')
const express = require('express');
const hbs = require('hbs');

const app = express();

//------Define paths dor Express config------
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')


//-----Setup handlebars engine and views location ------
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//-----Setup static directory to server

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
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
     else if (req.query.address === 'buenos aires'){
         return res.send({
             latitude: -58.4370894,
             longitude: -34.6075682,
             location: 'Buenos Aires, Argentina',
             forecast: [ [ 'Partly cloudy' ], 26, 27 ],
             address: req.query.address
           })

     } else {
        return  res.send({
            error: 'Address not found'
        })
     }
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Alejo',
        message404: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Alejo',
        message404: 'Page not found',
        messageHelp404: 'Help article not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})