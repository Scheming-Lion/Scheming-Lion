describe('top100visualController for Word Cloud feature', function() {
  // var $httpBackend, $rootScope, $firebase, myName, $q, createController;

  //  // Set up the module
  // beforeEach( module( 'myApp.top100visual') );

  // beforeEach(inject(function( $injector ) {
  //  // Set up the mock http service responses
  //  $httpBackend = $injector.get( '$httpBackend' );

  //  // Get hold of a scope (i.e. the root scope)
  //  $rootScope = $injector.get( '$rootScope' );

  //  $firebase = $injector.get( '$firebase' );
  //  $q = $injector.get( '$q' );
  //  myName = $injector.get( 'myName' );
  //  // The $controller service is used to create instances of controllers
  //  var $controller = $injector.get( '$controller' );

  //  createController = function() {
  //    return $controller( 'top100visualController', {'$scope' : $rootScope } );
  //  };

  // }));

  // afterEach(function() {
  //  $httpBackend.verifyNoOutstandingExpectation();
  //  $httpBackend.verifyNoOutstandingRequest();
  // });

  xit('should have a grabTitles function', function() {
    expect(grabTitles).to.be.defined;
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