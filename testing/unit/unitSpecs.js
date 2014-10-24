

describe('Unit Tests', function() {
  it('should be true', function() {
    expect(true).to.be.true;
  });
});

xdescribe('Angular Scraper', function() {

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

xdescribe('Top Stories', function() {
  it('should return 10 items', function() {
    //having difficulty figuring out how to do this because it depends on the view
  })
});

xdescribe('Track Posts', function() {
  //TODO: hard because have to integrate HN firebase
});

xdescribe('TrackUsers', function() {
  //TODO
});