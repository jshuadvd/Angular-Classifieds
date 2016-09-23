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
    .state('two', {
        url: '/statetwo',
        template: '<h1>State Two</h1> <md-button ui-sref="two.more">Go to nested state.</md-button> <ui-view></ui-view>' 
    })
    .state('two.more', {
        url: '/more'
        template:
    });
    
  })
  .directive('helloWorld', function() {
    // Directive definition Object
    return {
      template: '<h1>Hello, World!</h1>'
    }
  });
