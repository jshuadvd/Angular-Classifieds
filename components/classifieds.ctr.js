(function() {
  
    "use strict";
    
    angular
        .module('ngClassifieds')
        .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory) {
          classifiedsFactory.getClassifieds()
          .then(function(response) {
            $scope.classifieds = response.data;
          })
          
          // Default Message
          $scope.message = "Hello!";
          
          // Default SideBar Loader
          $scope.openSideBar = function() {
          }
        });
})();