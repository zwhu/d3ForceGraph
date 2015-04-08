'use strict';

angular.module('d3ForceTestApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.relationships = {};

    $http.get('/api/things').success(function(relationships) {
      $scope.relationships = relationships;
    });
  });
