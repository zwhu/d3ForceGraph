'use strict';

angular.module('d3ForceTestApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': '第一级分类',
      'link': '/'
    }, {
      'title': '第二级分类',
      'link': '/second'
    }, {
      'title': '第三级分类',
      'link': '/third'
    }];

    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });
