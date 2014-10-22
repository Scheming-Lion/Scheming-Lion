describe('Unit Tests', function() {
  it('should be true', function() {
    expect(true).to.be.true;
  });
});

describe('Angular Scraper', function() {

  describe('Main Controller', function() {
    beforeEach(module('scraper'));

    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('MainController', {
        $scope: scope
      });
    }));

    it('should have a successItem set to 0', function() {
      expect(scope.successItem).to.equal(0);
    });
  
  });

});