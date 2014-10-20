angular.module('scraper', []);


angular.module('scraper',[])
  .controller('MainController', function($scope, $interval, $http) {

    $scope.successItem = 0;
    $scope.failureItem = 0;

    $scope.startCount = 1;
    $scope.endCount = 2000;

    $scope.scraping = false;

    // loop through the start count and stop count.
    var pullAndwrite = function() {
      if ( $scope.startCount < $scope.endCount ) {
        for ( var i = $scope.startCount; i < $scope.endCount; i++) {
          $http.get("https://hacker-news.firebaseio.com/v0/item/" + i + ".json")
            // able to pull from the Hacker News API
            .success(function(firebaseData) {
              $http({
                url: 'http://localhost:8000/',
                method: 'POST',
                data: firebaseData
              })
              // $http.post("http://localhost:8000/", firebaseData )
              // able to store to the file *should be database*
              .success(function(data, status, headers, config) {
                $scope.successItem++;
              })
              // unable to store to the file
              .error(function(data, status, headers, config) {
                console.log(data);
                $scope.failureItem++;
              });
            })
            // unable to pull from the Hacker News API
            .error(function(data, status, headers, config) {
              console.log(data);
              $scope.failureItem++;
            });
        }
      } else {
        for ( var i = $scope.startCount; i > $scope.endCount; i--) {
          $http.get("https://hacker-news.firebaseio.com/v0/item/" + i + ".json")
            // able to pull from the Hacker News API
            .success(function(firebaseData) {
              $http({
                url: 'http://localhost:8000/',
                method: 'POST',
                data: firebaseData
              })
              // $http.post("http://localhost:8000/", firebaseData )
              // able to store to the file *should be database*
              .success(function(data, status, headers, config) {
                $scope.successItem++;
              })
              // unable to store to the file
              .error(function(data, status, headers, config) {
                console.log(data);
                $scope.failureItem++;
              });
            })
            // unable to pull from the Hacker News API
            .error(function(data, status, headers, config) {
              console.log(data);
              $scope.failureItem++;
            });
        }
      }
    };

    $scope.startScrape = function() {
      $scope.scraping = true;
      pullAndwrite();

      // every minute run http get and post requests.
      $interval(function() {
        pullAndwrite();
      }, 60000);

      if ($scope.startCount < $scope.endCount) {
        $scope.startCount += 2000;
        $scope.endCount += 2000;
      } else {
        $scope.startCount -= 2000;
        $scope.endCount -= 2000;
      }
    };

  });