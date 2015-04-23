'use strict';

angular.module('d3ForceTestApp').directive('zdTable', function () {
  return {
    restrict: 'E',
    terminal: true,
    scope: {
      val: '='
    },
    link: function ($scope, $element, $attrs) {

      var _defaultCount = 30;

      $scope.display = [];
      $scope.$watch('val', function (data) {
        // 每页最多显示30条数据
        if (data.product_list) {
          $scope.display = data.product_list.slice(0, _defaultCount);
        }
      });

      $scope.$watch('display', function (data) {
        if (data.length === 0)
          return;
        var _liHtml   = [];

        var header = {
          'product_name': 'product_name',
          'format': 'format',
          'regularity': 'regularity',
          'brand_name': 'brand_name',
          'producer_address': 'producer_address',
          'shelf_life': 'shelf_life',
          'category_name': 'category_name',
          'ingredient': 'ingredient',
          'brand_id': 'brand_id',
          'producer_id': 'producer_id',
          'category_code': 'category_code',
          'batch_id_list': 'batch_id_list',
          'ingredient_id_list': 'ingredient_id_list'
        };

        var _liHeader = [];
        for(var i in header) {
          _liHeader.push('<span>' + header[i] + '</span>');
        }
        _liHtml.push('<li>' + _liHeader.join('') + '</li>');
        angular.forEach(data, function (value) {
          var _li = [];

          for(var i in header) {
            _li.push('<span>' + value[header[i]] + '</span>');
          }

          this.push('<li>' + _li.join('') + '</li>');
        }, _liHtml);
        var _ulHtml   = '<ul class="zd-table">' + _liHtml.join('') + '</ul>';

        $element.html(_ulHtml + createPageButtonGroup($scope.val.product_list));
      });

      $element.on('click', 'ul a', function () {
        var _page      = $(this).attr('data-page') | 0;
        $scope.display = $scope.val.product_list.slice(_page * _defaultCount, _defaultCount * (_page + 1));
        $scope.$apply();
      });

      function createPageButtonGroup(data) {
        var pages = Math.ceil(data.length / _defaultCount);
        if(pages < 2)
          return;
        var _pageHtml = '<ul class="pagination">';
        for (var i = 0; i < pages; i++) {
          _pageHtml += '<li><a data-page="' + i + '">' + (i + 1) + '</a></li>';
        }
        _pageHtml += '</ul>';

        return _pageHtml;
      }
    }
  }


});
