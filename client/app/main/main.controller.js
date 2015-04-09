'use strict';

angular.module('d3ForceTestApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.relationships = {};
    $scope.data = {};


    $scope.$on('getNodeInfo', function(e, d) {
      $scope.data = d;
    });

    $http.get('/api/things').success(function(relationships) {
      $scope.relationships = relationships;
    }).error(function() {
      $scope.relationships = 'error';
    });
  });
