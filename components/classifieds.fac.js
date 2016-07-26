(function () {
  'use strict';
  
  angular
  .module("ngClassifieds")
  .factory("classifiedsFactory", function($http) {
        
    function getClassifieds() {
      return $http.get('data/classifieds.json');
    }
    
    // Return the function
    return {
      getClassifieds: getClassifieds
    }
  });
  
})();