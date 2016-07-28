(function() {
  
    "use strict";
    
    angular
        .module('ngClassifieds')
        .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory) {
          classifiedsFactory.getClassifieds()
          .then(function(response) {
            $scope.classifieds = response.data;
          })
          
          $scope.message = "Hello!";
          
          $scope.openSideBar = function() {
            
          }
        });
})();