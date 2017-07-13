/*jshint esversion:6*/
const weatherData = require('../../mocks/weather.json');
WeatherService.$inject = ['$http'];

function WeatherService($http){
  const baseUrl = 'https://dry-eyrie-43885.herokuapp.com/weather/';
  return {
  // label              function name
    getCurrentWeather: getCurrently
  };
  function getCurrently(lat, lon){
    const url = `${baseUrl}${lat},${lon}`;
    return $http.get(url)
                .then(response => {
                  return response.data.currently;
                });
  }
}

module.exports = WeatherService;
