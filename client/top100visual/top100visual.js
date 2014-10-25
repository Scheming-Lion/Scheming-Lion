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

    var giveD3Words = function(wordsObject) {
      var wordsForD3 = [];

      for (var wordCount in wordsObject) {
        var tempObject = {};

        tempObject.count = wordsObject[wordCount];
        tempObject.word = wordCount;
        
        wordsForD3.push(tempObject);
      }
      return wordsForD3;
    };

    var countWords = function(titles) {
      var totalWordCount = {};
      for (var title = 0; title < titles.length; title++) {
        // go through the titles
        if (titles[title]) {
          // if the title is defined
          var words = titles[title].split(" ");
          // split the title into its words 
          for (var word = 0; word < words.length; word++) {
            // iterate through the words

            var punctuationFreeWord = words[word];
                punctuationFreeWord = punctuationFreeWord.replace(/\b[-.,()&$#!\[\]{}"']+\B|\B[-.,():&$#!\[\]{}"']+\b/g, "");

            if( !filterForCommonWords(punctuationFreeWord) ) {
              // check if word is common. If it isn't add to the total word count object


              if (totalWordCount[punctuationFreeWord] === undefined) {
                // if the word isn't in the object yet
                totalWordCount[punctuationFreeWord] = 1;
                // add it as a key and make the value 1
              } else {
                // if the word is already in the word count object
                totalWordCount[punctuationFreeWord]++;
                // increase the value by one, indicating there is another instance of the word
              }
            }
          }
        }
      }

      return giveD3Words(totalWordCount);
    };

    var filterForCommonWords = function(word) {
      switch (word) {
        case 'to':
        case 'To':
        case 'and':
        case 'the':
        case 'The':
        case 'is':
        case 'for':
        case 'An':
        case 'an':
        case 'A':
        case 'a':
        case 'HN:':
        case 'for':
        case 'is':
        case 'that':
        case 'with':
        case 'in':
        case 'you':
        case 'You':
        case '-':
        case 'are':
        case 'Are':
        case 'That':
        case 'Is':
        case 'is':
        case 'of':
        case 'on':
        case 'How':
          return true;
        default:
          return false;
      }
    };

    top100stories.$loaded()
      .then(function() {
        grabTitles();
      });

  });