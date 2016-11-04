angular
  .module('ngClassifieds', ['ngMaterial', 'ui.router'])
  .config(function($mdThemingProvider, $stateProvider) {
    
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange')
    
    $stateProvider
    .state('classifieds', {
        url: '/classifieds'
        template: 'components/classifieds/classifieds.tpl.html',
        controller: 'classifiedsCtrl as vm'
    })    
    .state('classifieds.new', {
        url: '/new'
        template: 'components/classifieds/new/classifieds.new.tpl.html',
        controller: 'newClassifiedsCtrl as vm'
    })    
  })
