var expect = require('chai').expect;

describe('Unit Tests', function() {
  it('should be true', function() {
    expect(true).to.be.true;
  });
});

describe('Angular Scraper', function() {
  it('should have a pullAndWrite function', function() {
    var $scope = {};
    var main = $controller('MainController', {$scope: $scope});
    expect(main.pullAndWrite).to.be.a('function');
  });

  it('should have a startScrape function', function() {
    var $scope = {};
    var main = $controller('MainController', {$scope: $scope});
    expect($scope.startScrape).to.be.a('function');
  });


});