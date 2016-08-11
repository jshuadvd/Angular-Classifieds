(function() {
  
    "use strict";
    
    angular
        .module('ngClassifieds')
        .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory, $mdSidenav) {
            
          classifiedsFactory.getClassifieds()
          .then(function(response) {
            $scope.classifieds = response.data;
          });
                  
          $scope.message = "Hello!";
          
          $scope.openSideBar = function() {
            $mdSidenav('left').open();
          }
          
          $scope.closeSideBar = function() {
            $mdSidenav('left').close();
          }
          
          $scope.saveClassified = function(classified) {
              if (classified) {
                  $scope.classifieds.push(classified);
                  $scope.classified = {};
                  $scope.closeSideBar();
              }
          }
        });
})();