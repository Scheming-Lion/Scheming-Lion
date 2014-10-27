angular.module('myApp.directives', [])
  .factory('wordCloud', function(d3Service) {
    return {
      link: function(scope,element, attrs) {
        d3Service.d3().then(function(d3) {

          var wordCount = scope.wordCount;

          var amount = Math.ceil(Math.sqrt(wordCount.length));

          var svgContainer = d3.select(".wordVisual").append("svg")
                                               .attr("class", "wordVisual")
                                               .attr("width", 1000)
                                               .attr("height", 1000);


          var update = function(data) {
            
            var column = 0;
            var counter = 0;
            var row = 50;
            var rowCounter = 0;

            var wordsVisual = svgContainer.selectAll("text")
              .data(data);

              wordsVisual.attr("class", "update");

              wordsVisual.enter().append("text")
                               .attr("x", function(d,i) {
                                  if ( (i-(counter*amount)) > amount) {
                                    column+= 40;
                                    counter++;
                                  }
                                  return column;
                               })
                               .attr("y", function(d,i) {
                                  if ( (i-(rowCounter*amount)) > amount ) {
                                    row=50;
                                    rowCounter++;
                                  } else {
                                    row += 40;
                                  }
                                  return row;
                                })
                               .attr("font-size", function(d) {
                                  return d.count*10 +"px";
                               })
                               .attr("fill", "#2b3e50")
                               .text(function(d) {
                                  return d.word;
                                })
                               .transition()
                                .duration( 500 )
                                .attr("fill", "white");

              wordsVisual.exit().remove();
          };

          update(wordCount);
        });
      },
      restrict: 'EA',
      scope: {
        wordCount: "="
      }
    };
  })
  .factory('totalGraph', function(d3Service) {
    return {
      link: function(scope,element, attrs) {
        d3Service.d3().then(function(d3) {

          var total = scope.total;

          var svgContainer = d3.select(".totalVisual").append("div")
                                               .attr("class", "totalVisual")
                                               .attr("width", 500)
                                               .attr("height", 500);


          var update = function(data) {

            var totalVisual = svgContainer.selectAll("div")
              .data(data);

              // totalVisual.attr("class", "update");

              totalVisual.enter().append("div")
                               .attr("y", function(d, i) {
                                 return (20 * i) + 10 + "px";
                               })
                               .style("width", function(d,i) {
                                return (d[1] / 10000) + 150 + "px";
                               })
                               .attr("class", "totalDiv")
                               // .attr("fill", "white")
                               // .attr("font-size", "12px")
                               .text(function(d) {
                                  return d[0] + ': ' + d[2];
                                });

              totalVisual.exit().remove();
          };

          update(total);
        });
      },
      restrict: 'EA',
      scope: {
        total: "="
      }
    };
  })
  .directive('a', function() {
    return {
      restrict: 'E',
      link: function(scope, elem, attrs) {
          if(attrs.href === '' || attrs.href === '#'){
              elem.on('click', function(e){
                  e.preventDefault();
              });
          }
      }
    };
  });