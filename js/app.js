'use strict'
/* global angular */
var app = angular.module('app', [
    'ngRoute'
    , 'app.home'
    , 'app.comingSoon'
]);

/**
* 0 - Em breve
* 1 - Teste
* 3 - Produção
*/
app.constant('ENVIRONMENT', 0);

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