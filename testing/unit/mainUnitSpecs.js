'use strict'

describe('mainController in main.js', function() {
   // Set up the module
  beforeEach( module( 'myApp.main') );
  beforeEach( module ( 'ui.router' ) );
  // Set up the views

  var ctrl, scope, state;

 
  beforeEach(inject(function($controller, $rootScope, $state) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    state = $state;
    // Create the controller
    ctrl = $controller('mainController', {
      '$scope': scope
    });

  }));

  it('should transition to main.course', inject(function ($state, $rootScope) {
    // $state.transitionTo('main.subviews');
    // $rootScope.$apply();
    // expect($state.current.name).toBe('main.subviews');
  }));

  xit('should have a search property set to false', function() {
    expect(true).to.be.true;
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