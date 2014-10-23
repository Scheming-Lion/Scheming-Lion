angular.module('myApp.top100visual', [] )

  .controller('top100visualController', function($scope, $http, $firebase, $q){
    $scope.dood = "dooood";

    var hackerNewsReference = new Firebase("https://hacker-news.firebaseio.com/v0/topstories");
    // create an AngularFire reference to the data
    var top100stories = $firebase(hackerNewsReference);
    // download the data into a local object
    top100stories = top100stories.$asArray();

    $scope.storyTitles = [];
    $scope.wordCount = {};

    var grabTitles = function() {

      for (var index = 0; index < 99; index++) {
        var string = "" + index;
        $http.get('https://hacker-news.firebaseio.com/v0/item/' + top100stories.$getRecord(string).$value + ".json")
          .success(function(data) {
            $scope.storyTitles.push(data.title);
          });
      }
      $http.get('https://hacker-news.firebaseio.com/v0/item/' + top100stories.$getRecord("99").$value + ".json")
          .success(function(data) {
            $scope.storyTitles.push(data.title);
            $scope.wordCount = countWords($scope.storyTitles);
          });
    };

    var countWords = function(titles) {
      console.log("here");
      var totalWordCount = {};

      for (var title = 0; title < titles.length; title++) {
        var words = titles[title].split(" ");
        for (var word = 0; word < words.length; word++) {
          if (totalWordCount[words[word]] === undefined) {
            totalWordCount[words[word]] = 1;
          } else {
            totalWordCount[words[word]]++;
          }
        }
      }

      return totalWordCount;
    };

    top100stories.$loaded()
      .then(function() {
        grabTitles();
      });

  })
  .directive('myName', function(d3Service) {
    return {
      link: function(scope,element, attrs) {
        d3Service.d3().then(function(d3) {




          var lineData = [  // J
                            [{ "x": 100, "y": 100 },
                            { "x": 200, "y": 100 }],
                            [{ "x": 200, "y": 100 },
                             { "x": 200, "y": 120 }],
                            [{ "x": 200, "y": 120 },
                             { "x": 160, "y": 120 }],
                            [{ "x": 160, "y": 120 },
                             { "x": 160, "y": 200 }],
                            [{ "x": 160, "y": 200 },
                             { "x": 80, "y": 200 }],
                            [{ "x": 80, "y": 200 },
                             { "x": 80, "y": 160 }],
                            [{ "x": 80, "y": 160 },
                             { "x": 100, "y": 160 }],
                            [{ "x": 100, "y": 160 },
                             { "x": 100, "y": 180 }],
                            [{ "x": 100, "y": 180 },
                             { "x": 130, "y": 180 }],
                            [{ "x": 130, "y": 180 },
                             { "x": 130, "y": 120 }],
                            [{ "x": 130, "y": 120 },
                             { "x": 100, "y": 120 }],
                            [{ "x": 100, "y": 120 },
                             { "x": 100, "y": 100 }],
                            // U
                            [{ "x": 200, "y": 120 },
                             { "x": 200, "y": 200 }],
                            [{ "x": 200, "y": 200 },
                             { "x": 280, "y": 200 }],
                            [{ "x": 280, "y": 200 },
                             { "x": 280, "y": 120 }],
                            [{ "x": 280, "y": 120 },
                             { "x": 260, "y": 120 }],
                            [{ "x": 260, "y": 120 },
                             { "x": 260, "y": 180 }],
                            [{ "x": 260, "y": 180 },
                             { "x": 220, "y": 180 }],
                            [{ "x": 220, "y": 180 },
                             { "x": 220, "y": 120 }],
                            [{ "x": 220, "y": 120 },
                             { "x": 200, "y": 120 }],
                            // S
                            [{ "x": 300, "y": 120 },
                             { "x": 380, "y": 120 }],
                            [{ "x": 380, "y": 120 },
                             { "x": 380, "y": 140 }],
                            [{ "x": 380, "y": 140 },
                             { "x": 320, "y": 140 }],
                            [{ "x": 320, "y": 140 },
                             { "x": 320, "y": 160 }],
                            [{ "x": 320, "y": 160 },
                             { "x": 380, "y": 160 }],
                            [{ "x": 380, "y": 160 },
                             { "x": 380, "y": 200 }],
                            [{ "x": 380, "y": 200 },
                             { "x": 300, "y": 200 }],
                            [{ "x": 300, "y": 200 },
                             { "x": 300, "y": 180 }],
                            [{ "x": 300, "y": 180 },
                             { "x": 360, "y": 180 }],
                            [{ "x": 360, "y": 180 },
                             { "x": 360, "y": 170 }],
                            [{ "x": 360, "y": 170 },
                             { "x": 300, "y": 170 }],
                            [{ "x": 300, "y": 170 },
                             { "x": 300, "y": 120 }],
                            // T
                            [{ "x": 400, "y": 120 },
                             { "x": 480, "y": 120 }],
                            [{ "x": 480, "y": 120 },
                             { "x": 480, "y": 140 }],
                            [{ "x": 480, "y": 140 },
                             { "x": 450, "y": 140 }],
                            [{ "x": 450, "y": 140 },
                             { "x": 450, "y": 200 }],
                            [{ "x": 450, "y": 200 },
                             { "x": 430, "y": 200 }],
                            [{ "x": 430, "y": 200 },
                             { "x": 430, "y": 140 }],
                            [{ "x": 430, "y": 140 },
                             { "x": 400, "y": 140 }],
                            [{ "x": 400, "y": 140 },
                             { "x": 400, "y": 120 }],
                            // I  
                            [{ "x": 500, "y": 120 },
                             { "x": 520, "y": 120 }],
                            [{ "x": 520, "y": 120 },
                             { "x": 520, "y": 200 }],
                            [{ "x": 520, "y": 200 },
                             { "x": 500, "y": 200 }],
                            [{ "x": 500, "y": 200 },
                             { "x": 500, "y": 120 }],
                            // N
                            [{ "x": 540, "y": 120 },
                             { "x": 560, "y": 120 }],
                            [{ "x": 560, "y": 120 },
                             { "x": 590, "y": 170 }],
                            [{ "x": 590, "y": 170 },
                             { "x": 590, "y": 120 }],
                            [{ "x": 590, "y": 120 },
                             { "x": 610, "y": 120 }],
                            [{ "x": 610, "y": 120 },
                             { "x": 610, "y": 200 }],
                            [{ "x": 610, "y": 200 },
                             { "x": 590, "y": 200 }],
                            [{ "x": 590, "y": 200 },
                             { "x": 560, "y": 160 }],
                            [{ "x": 560, "y": 160 },
                             { "x": 560, "y": 200 }],
                            [{ "x": 560, "y": 200 },
                             { "x": 540, "y": 200 }],
                            [{ "x": 540, "y": 200 },
                             { "x": 540, "y": 120 }]  ];

          var letterData = [  // J
                            [{ "x": 100, "y": 100 },
                             {"x": 200, "y": 100 },
                             { "x": 200, "y": 120 },
                             { "x": 160, "y": 120 },
                             { "x": 160, "y": 200 },
                             { "x": 80, "y": 200 },
                             { "x": 80, "y": 160 },
                             { "x": 100, "y": 160 },
                             { "x": 100, "y": 180 },
                             { "x": 130, "y": 180 },
                             { "x": 130, "y": 120 },
                             { "x": 100, "y": 120 },
                             { "x": 100, "y": 100 }],
                            // U
                            [{ "x": 200, "y": 120 },
                             { "x": 200, "y": 200 },
                             { "x": 280, "y": 200 },
                             { "x": 280, "y": 120 },
                             { "x": 260, "y": 120 },
                             { "x": 260, "y": 180 },
                             { "x": 220, "y": 180 },
                             { "x": 220, "y": 120 },
                             { "x": 200, "y": 120 }],
                            // S
                            [{ "x": 300, "y": 120 },
                             { "x": 380, "y": 120 },
                             { "x": 380, "y": 140 },
                             { "x": 320, "y": 140 },
                             { "x": 320, "y": 160 },
                             { "x": 380, "y": 160 },
                             { "x": 380, "y": 200 },
                             { "x": 300, "y": 200 },
                             { "x": 300, "y": 180 },
                             { "x": 360, "y": 180 },
                             { "x": 360, "y": 170 },
                             { "x": 300, "y": 170 },
                             { "x": 300, "y": 120 }],
                            // T
                            [{ "x": 400, "y": 120 },
                             { "x": 480, "y": 120 },
                             { "x": 480, "y": 140 },
                             { "x": 450, "y": 140 },
                             { "x": 450, "y": 200 },
                             { "x": 430, "y": 200 },
                             { "x": 430, "y": 140 },
                             { "x": 400, "y": 140 },
                             { "x": 400, "y": 120 }],
                            // I  
                            [{ "x": 500, "y": 120 },
                             { "x": 520, "y": 120 },
                             { "x": 520, "y": 200 },
                             { "x": 500, "y": 200 },
                             { "x": 500, "y": 120 }],
                            // N
                            [{ "x": 540, "y": 120 },
                             { "x": 560, "y": 120 },
                             { "x": 590, "y": 170 },
                             { "x": 590, "y": 120 },
                             { "x": 610, "y": 120 },
                             { "x": 610, "y": 200 },
                             { "x": 590, "y": 200 },
                             { "x": 560, "y": 160 },
                             { "x": 560, "y": 200 },
                             { "x": 540, "y": 200 },
                             { "x": 540, "y": 120 }]  ];


          var lineFunction = d3.svg.line()
                                   .x(function(d) { return d.x; })
                                   .y(function(d) { return d.y; })
                                   .interpolate("linear");



          var svgContainer = d3.select("body").append("svg")
                                               .attr("width", 1200)
                                               .attr("height", 1200);


          var line = true;
          var move = false;
          var count = 0;

          var update = function(data) {
            var lineGraph = svgContainer.selectAll(".letters")
              .data(data);

              lineGraph
                .transition()
                  .duration(function(d,i) { return incomingTransitionDuration(i); })
                  .attr("d", function(d,i) { return switchAnimation("d", lineFunction, d); })
                  .attr("stroke", function(d,i) { return switchAnimation("stroke"); })
                  .attr("transform", function(d,i) { return transformName(d,i); })
                  .style('fill-opacity', 1e-6)
                  .attr("fill", "white");

              lineGraph.enter().append("path")
                           .attr("class", "letters")
                           .attr("stroke", "blue")
                          .attr("d", function(d, i) { return "M500,500L1000,500"; })
                            .attr("stroke-width", 1)
                            .style('fill-opacity', 1);

              // EXIT
              // Remove old elements as needed.
              lineGraph.exit()
              //    .attr("class", "letters")
                .transition()
                  .duration(100)
              //    .attr("y", 60)
                  .style("fill-opacity", 1e-6)
                  .remove();
          };

          update(lineData);
          // debugger;

          setInterval(function() {
            update(lineData);
            lineData = letterData;
            line = (line) ? false : true;
          }, 2500);

          var incomingTransitionDuration = function(i) {
            count++;
            if (move) {
              return 100;
            } else {
              var randomInterval = 0;
              for (var x = 11; x < i; x+=10) {
                if (i >= x) {
                  randomInterval = x;
                }
              }
              return 250 * (i - randomInterval);
            }
          };

          var switchAnimation = function(attribute, callback, d) {
            if (attribute === "d") {
              return callback(d);
            } else {
              return line ? "red" : "blue";
            }
          };

          var transformName = function(d,i) {
            if (count < 66) {
              return "translate( 0, 0 )";
            } else {
              return "translate(" + (i * 10) + "," + (i * 10) + ")";
              // .attr("transform", "translate(" + x + "," + y + ")")
            }
            move = false;
          };




        });
      },
      restrict: 'E',
      scope: {}
    };
  });

angular.module('d3', [])
.factory('d3Service', ['$document', '$window', '$q', '$rootScope',
  function($document, $window, $q, $rootScope) {
    var d = $q.defer(),
        d3service = {
          d3: function() { return d.promise; }
        };
  function onScriptLoad() {
    // Load client in the browser
    $rootScope.$apply(function() { d.resolve($window.d3); });
  }
  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = 'http://d3js.org/d3.v3.min.js';
  scriptTag.onreadystatechange = function () {
    if (this.readyState == 'complete') onScriptLoad();
  };
  scriptTag.onload = onScriptLoad;
 
  var s = $document[0].getElementsByTagName('body')[0];
  s.appendChild(scriptTag);
 
  return d3service;
}]);