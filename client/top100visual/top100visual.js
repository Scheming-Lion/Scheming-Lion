angular.module('myApp.top100visual', [] )
  .controller('top100visualController', function($scope, $http, $firebase, $q, myName){
    $scope.dood = "dooood";

    var hackerNewsReference = new Firebase("https://hacker-news.firebaseio.com/v0/topstories");
    // create an AngularFire reference to the data
    var top100stories = $firebase(hackerNewsReference);
    // download the data into a local object
    top100stories = top100stories.$asArray();

    $scope.storyTitles = [];
    $scope.wordCount = {};
    $scope.loading = true;

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
            myName.link($scope);
            $scope.loading = false;
          });
    };

    var countWords = function(titles) {
      var totalWordCount = {};
      for (var title = 0; title < titles.length; title++) {
        if (titles[title]) {
          var words = titles[title].split(" ");
          for (var word = 0; word < words.length; word++) {
            if (totalWordCount[words[word]] === undefined) {
              totalWordCount[words[word]] = 1;
            } else {
              totalWordCount[words[word]]++;
            }
          }
        }
      }

      var wordsForD3 = [];

      for (var wordCount in totalWordCount) {
        var tempObject = {};

        tempObject.count = totalWordCount[wordCount];
        tempObject.word = wordCount;
        
        wordsForD3.push(tempObject);
      }
      return wordsForD3;
    };

    top100stories.$loaded()
      .then(function() {
        grabTitles();
      });

  });