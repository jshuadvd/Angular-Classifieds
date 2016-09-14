angular
  .module('ngClassifieds', ['ngMaterial', 'ui.router'])
  .config(function($mdThemingProvider, $stateProvider) {
    
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange')
    
    $stateProvider
    .state('stateone', {
        url: '/stateone'
    })    
  })
  .directive('helloWorld', function() {
    // Directive definition Object
    return {
      template: '<h1>Hello, World!</h1>'
    }
  });
