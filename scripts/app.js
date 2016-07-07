angular
  .module('ngClassifieds', ['ngMaterial'])
  .config(function($mdThemeingProvider) {
    
    $mdThemeingProvider.theme('default')
    .primaryPallete('pink')
    .accentPallete('black')
    
  })
  .directive('helloWorld');
