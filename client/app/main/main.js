'use strict';

angular.module('d3ForceTestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/:tabs', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
