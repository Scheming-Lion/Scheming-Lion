describe('mainController in main.js', function() {
   // Set up the module
  beforeEach( module( 'myApp.main') );
  beforeEach( module( 'ui.router' ) );
  beforeEach( module( 'myApp.search' ) );

  var ctrl, scope;
 
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('mainController', {
      '$scope': scope,
    });
  }));

  it('should have a search property set to false', function() {
    expect(scope.search).to.exist;
  });

  xit('should grab ids for the top 100 stories on HN', function() {
    expect(expecation).to.equal(equal);
  });

  xit('should count words in titles', function() {
    expect(expecation).to.equal(equal);
  });

  xit('should filter common words out of the word cloud', function() {
    expect(expecation).to.equal(equal);
  });

  xit('should give words to D3 for rendering', function() {
    expect(expecation).to.equal(equal);
  });

});