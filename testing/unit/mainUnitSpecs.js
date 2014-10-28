describe('mainController in main.js', function() {
  
  var $mainController, $scope;
 
  beforeEach( function() {
    module( 'myApp.main' );
  });

  beforeEach(function() {inject(function(_$controller_, _$rootScope_) {
    // Create a new scope that's a child of the $rootScope
    $scope = _$rootScope_.$new();

    // Create the controller
    $mainController = _$controller_('mainController', {
      "$scope": $scope
    });

  })});

// The tests below do not run due to some issue with ui.router
// and missing $stateProvider issues. As a result, the test below
// have been marked as pending. The will pass if the issue with
// state is corrected.

// This may be helpful for getting the state issues to run
    // $state.transitionTo('main.subviews');
    // $rootScope.$apply();
    // expect($state.current.name).toBe('main.subviews');

  xit('should have a function named chooseView', function () {
    expect($scope.chooseView).to.exist;
    expect($scope.chooseView).to.be.a('function');
  });

  xit('should have a function named primary', function () {
    expect($scope.primary).to.exist;
    expect($scope.primary).to.be.a('function');
  });

  xit('should have current view set as \'search\' on page load', function() {
    expect($scope.current).to.equal('search');
  });

  xit('should choose a different view', function() {
    expect($scope.current).to.equal('search');
    $scope.chooseView('main');
    expect($scope.current).to.equal('main');
  });

  xit('primary should return false if $scope.current is undefined', function() {
    $scope.chooseView(undefined);
    expect($scope.current).to.be.undefined;
    expect($scope.primary('test')).to.be.false;
  });

  xit('primary should return false if $scope.current is undefined', function() {
    $scope.chooseView('justin');
    expect($scope.current).to.equal('justin');
    expect($scope.primary('justin')).to.be.true;
  });

});