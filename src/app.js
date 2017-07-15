/*jshint esversion:6*/
const angular = require('angular');

// services
const WeatherService = require ('./services/weather.service');

// components
const CurrentWeatherComponent = require('./components/current-weather/');
const HourlyWeatherComponent = require('./components/hourly-weather/');

//create our application
angular.module('darkcaster-client', []) //setter syntax
       .factory('WeatherService', WeatherService) //creates service
       .component('currentWeather', CurrentWeatherComponent)
       .component('hourlyWeather', HourlyWeatherComponent);
