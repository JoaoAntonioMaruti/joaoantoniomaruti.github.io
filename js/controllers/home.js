'use strict';
/* global angular*/
angular.module('app.home', [])

.controller('home.ctrl', function($scope, $location, ENVIRONMENT, Parallax, Nav, AGE, ME){
    Parallax.init();
    Nav.init();
    // Pegar  a idade
    $scope.age = AGE;
    $scope.me = ME;

    if(ENVIRONMENT == 0){
        $location.path('/comingSoon');
        return true;
    };
    

    // About
    /**
     * 0 - Tipo texto
     * 1 - Array de objetos, para carousel
     * 2 - Array de strings
     */
    $scope.informations = [{
        title:'Sobre'
        , resume:''
        , type:0
        , status: true
    },{
        title:'Projetos'
        , resume:''
        , type:1
        , status:false
    },{
        title:'Formação'
        , resume:''
        , type:0
        , status:false
    },{
        title:'Skills'
        , resume:''
        , type:2
        , status:false
    }];
    
    $scope.socials = [{
        icon:'ion-social-linkedin'
        , link:''
    },{
        icon:'ion-social-facebook'
        , link:''
    },{
        icon:'ion-social-instagram'
        , link:''
    },{
        icon:'ion-social-github'
        , link:'https://github.com/JoaoAntonioMaruti'
    },{
        icon:'ion-social-codepen'
        , link:'http://codepen.io/JoaoAntonioMaruti'
    },];
});