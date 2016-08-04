(function() {
  
    "use strict";
    
    angular
        .module('ngClassifieds')
        .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory, $mdSidenav) {
          classifiedsFactory.getClassifieds()
          .then(function(response) {
            $scope.classifieds = response.data;
          })
                  
          $scope.message = "Hello!";
          
          $scope.openSideBar = function() {
            // Open Sidebar
          }
        });
})();