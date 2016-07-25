(function() {
    "use strict";
    angular
        .module('ngClassifieds')
        .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory) {
          // why is this undefined
          $scope.classifiedsFactory.getClassifieds()
          .then(function(response) {
            $scope.classifieds = response.data;
          })
        });
})();