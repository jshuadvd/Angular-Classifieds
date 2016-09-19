angular
  .module('ngClassifieds', ['ngMaterial', 'ui.router'])
  .config(function($mdThemingProvider, $stateProvider) {
    
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange')
    
    $stateProvider
    .state('one', {
        url: '/stateone'
        template: '<h1>State One</h1>'
    })    
    .state('statetwo', {
        url: '/statetwo',
        template: '<h1>State Two</h1>'
    });
  })
  .directive('helloWorld', function() {
    // Directive definition Object
    return {
      template: '<h1>Hello, World!</h1>'
    }
  });
