'use strict';

angular.module('d3ForceTestApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.relationships = {};
    $scope.data = {};

    $http.get('/api/things').success(function(relationships) {
      $scope.relationships = relationships;
    }).error(function() {
      $scope.relationships = 'error';
    });
  });
