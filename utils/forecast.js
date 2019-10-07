const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/f960ae3d4dfffee90835ca6f98086a17/' + latitude + ',' + longitude
    request({ url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (response.body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })

}

module.exports = forecast