(function (arguments) {
  'use strict';
  
  angular
  .module("ngClassifieds")
  .factory("classifiedsFactory", function($http) {
    
    function getClassifieds() {
      $http.get('data/classifieds.json').then(function(response) {
        $scope.classifieds = response.data;
      })
    }
    
    return {
      getClassifieds: getClassifieds
    }
  });
  
})();