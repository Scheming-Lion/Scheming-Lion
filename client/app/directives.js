angular.module('myApp.directives', [])
  .factory('myName', function(d3Service, $interval) {
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
                               .attr("fill", "white")
                               .text(function(d) {
                                  return d.word;
                                })
                               .transition()
                                .duration( 500 )
                                .attr("fill", "black");

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