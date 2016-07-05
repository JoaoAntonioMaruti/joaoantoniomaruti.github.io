'use strict';
/* global angular */
angular.module('app.parallax', [])
.factory('Parallax', function(){
    return {
        init:function(){
             var windowHeight        = angular.element(window).height(),
            footerHeight        = angular.element('footer').height(),
            heightDocument      = (windowHeight) + (angular.element('.content').height()) + (angular.element('footer').height()) - 20;
            // Definindo o tamanho do elemento pra animar
            angular.element('#scroll-animate, #scroll-animate-main').css({
                'height' :  heightDocument + 'px'
            });
            // Definindo o tamanho dos elementos header e conteúdo
            angular.element('header').css({
                'height' : windowHeight + 'px'
            });
            angular.element('.wrapper-parallax').css({
                'margin-top' : windowHeight + 'px'
            });
            window.onscroll = function(){
                var scroll = window.scrollY;
        
                angular.element('#scroll-animate-main').css({
                    'top' : '-' + scroll + 'px'
                });
                
                angular.element('header').css({
                    'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
                });
            }
        }
    }
})

.factory('Nav', function(){
    var lastValue = 0;
    var doc = angular.element(document);
    var nav = angular.element('.header-bar');
    var distance = 60;
    var max2state = 400;
    var oldScrollY = 0;
    var applyBlur =function(el,value){
        angular.element(el).css({
            "-webkit-filter": "blur("+ value / 100 +"px)", "filter": "blur("+ value / 100 +"px)"
        });
    }
    return {
        init:function(){
            var c = lastValue;
            doc.on('scroll', function(e){
                if(window.scrollY > max2state){
                    nav.addClass('header-style-bar');
                }else{
                    nav.removeClass('header-style-bar');
                    applyBlur('header', window.scrollY);
                    oldScrollY = window.scrollY;
                    return true;
                }
                if(window.scrollY > oldScrollY + 400){
                    if(doc.scrollTop() > lastValue + distance){
                    nav.addClass('header-bar-hide');
                    }else{
                        if(lastValue - 10 > doc.scrollTop() ){
                            nav.removeClass('header-bar-hide');
                        }
                    }
                    lastValue = doc.scrollTop();
                }
            })
        }
    }
})