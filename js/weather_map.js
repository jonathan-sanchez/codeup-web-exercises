"use strict";
// (function () {
mapboxgl.accessToken = "pk.eyJ1Ijoiam9uYXRoYW4tc2FuY2hlejExYiIsImEiOiJja25hanh1OHEwbTM4MnFvaHBtaTAwOW9qIn0.alJAH1oZPMiBAAmJ8paEtg";
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});
$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: openWeatherMapApi,
    lat: 29.423017,
    lon: -98.48527,
    units: "imperial",
    exclude: "minutely,hourly,alerts"
}).done(function(){
    enablePins();
    console.log(currentMarker);
});

var currentMarker = null;

var currentDate = new Date();

var daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function dropPin(coordinates){
    if(currentMarker == null){
        var marker = new mapboxgl.Marker();
        currentMarker = marker;
    }
    currentMarker.setLngLat(coordinates)
    currentMarker.addTo(map);
}

function enablePins() {
    map.on('click', function (e) {
        dropPin(e.lngLat);
        console.log(e.lngLat);
        retrieveWeather(e.lngLat.lng, e.lngLat.lat);
    });
}

function retrieveWeather(longitude, latitude){
    $.ajax("https://api.openweathermap.org/data/2.5/onecall", {
        data: {
            APPID: openWeatherMapApi,
            lat: latitude,
            lon: longitude,
            units: "imperial",
            exclude: "minutely,hourly,alerts"
        }
    }).done(function(data, status, jqXhr){
        console.log(data);
        fiveDayForecast(data);
    });
}