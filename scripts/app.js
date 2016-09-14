angular
  .module('ngClassifieds', ['ngMaterial', 'ui.router'])
  .config(function($mdThemingProvider, $stateProvider) {
    
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange')
    
    $stateProvider
    .state('stateone', {
        url: '/stateone'
        template: '<h1>State One</h1>'
    })    
    .state('statetwo', {
        
    })
  })
  .directive('helloWorld', function() {
    // Directive definition Object
    return {
      template: '<h1>Hello, World!</h1>'
    }
  });
