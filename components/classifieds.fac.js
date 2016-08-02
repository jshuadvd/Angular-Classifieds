(function () {
  'use strict';
  
  angular
  .module("ngClassifieds")
  .factory("classifiedsFactory", function($http) {
      
    // GetClassifieds  
    function getClassifieds() {
      return $http.get('data/classifieds.json');
    }
    
    return {
      getClassifieds: getClassifieds
    }
  });
  
})();