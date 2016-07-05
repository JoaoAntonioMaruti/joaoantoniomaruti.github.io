'use strict';
/* global angular*/
angular.module('app.home', [])

.controller('home.ctrl', function($scope, $location, ENVIRONMENT){
    if(ENVIRONMENT == 0){
        $location.path('/comingSoon');
        return true;
    };
});