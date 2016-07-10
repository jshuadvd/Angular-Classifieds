angular
  .module('ngClassifieds', ['ngMaterial'])
  .config(function($mdThemingProvider) {
    
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange')    
  })
  .directive('helloWorld', function() {
    // Directive definition Object
    return {
      template: '<h1>Hello, World!</h1>'
    }
  });
