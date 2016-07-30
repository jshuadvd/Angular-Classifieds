(function () {
  'use strict';
  
  angular
  .module("ngClassifieds")
  .factory("classifiedsFactory", function($http) {
        
    // Get Classified  Method  
    function getClassifieds() {
      return $http.get('data/classifieds.json');
    }
    
    return {
      getClassifieds: getClassifieds
    }
  });
  
})();