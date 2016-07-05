'use strict';
/* global angular*/
angular.module('app.home', [])

.controller('home.ctrl', function($scope, $location, ENVIRONMENT, Parallax, Nav, AGE){
    Parallax.init();
    Nav.init();
    // Pegar  a idade
    $scope.age = AGE;

    if(ENVIRONMENT == 0){
        $location.path('/comingSoon');
        return true;
    };
});