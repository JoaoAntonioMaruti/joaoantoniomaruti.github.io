'use strict';
/* global angular */

angular.module('app.directives', [])

.directive('navMenu', function(){
    var nav = `
        <nav class="header-bar">
            <ul>
                <li ng-repeat="item in menu">
                    <a class="waves-effect waves-light">{{item.name}}</a>
                </li>
            </ul>
        </nav>  
    `;
    return {
        template:nav
    };
})
