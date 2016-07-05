'use strict'
/* global angular */
var app = angular.module('app', [
    'ngRoute'
    , 'app.home'
    , 'app.comingSoon'
    , 'app.parallax'
]);

/**
* 0 - Em breve
* 1 - Teste
* 2 - Produção
*/
app.constant('ENVIRONMENT', 2);

/**
 * Cálculo da idade a partir do nascimento
 */
app.constant('AGE', Math.floor(Math.ceil(Math.abs(new Date('12/10/1994').getTime() - new Date().getTime()) / (1000 * 3600 * 24)) / 365.25));

app.config(function($routeProvider){
     $routeProvider
        .when('/home', {
            controller: "home.ctrl",
            templateUrl: "views/home.html"
        })
        .when('/comingSoon', {
            controller: "comingSoon.ctrl",
            templateUrl: "views/comingSoon.html"
        })
        .otherwise('/home');
});