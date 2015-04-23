angular.module('d3ForceTestApp').directive('ghVisualization', function () {

  // constants
  var width = 960,
    height = 500,
    color = d3.scale.category20(),
    force = d3.layout.force().charge(-120).linkDistance(30).size([width, height]);

  return {
    restrict: 'E',
    terminal: true,
    scope: {
      val: '='
    },
    link: function ($scope, element, attrs, _) {
      $scope.$watch('val', function (graph) {
        d3.select(element[0]).html('<svg width="'+ width + '" height="' + height + '"></svg>');

        var svg = d3.select('svg');

        if(graph === 'error') {
          d3.select(element[0]).html('数据出现问题，重新刷新页面试试!');
        }

        // if 'graph' is undefined, exit
        if (!graph || !graph.nodes) {
          return;
        }

        force.nodes(graph.nodes).links(graph.links).linkDistance(100).start();

        var link = svg.selectAll(".link")
          .data(graph.links)
          .enter().append("line")
          .attr("class", "link")
          .style("stroke-width", function(d) { return Math.sqrt(d.value); });

        var node = svg.selectAll(".node")
          .data(graph.nodes)
          .enter().append("circle")
          .attr("class", "node")
          .attr("r", 10)
          .style("fill", function(d) { return color(d.group); })
          .call(force.drag);

        var texts = svg.selectAll("text")
          .data(graph.nodes)
          .enter().append("text")
          .attr("class", "text")
          .attr("x", 20)
          .attr("dy", ".35em")
          .text(function(d) {  return d.name;  });

        force.on("tick", function() {
          link.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

          node.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

          texts.attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
          });
        });

        function clickNode(d) {
          $scope.$emit('getNodeInfo', d);
          return $scope.$apply();
        }

      });
    }
  }
});
