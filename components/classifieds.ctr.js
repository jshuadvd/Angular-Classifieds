(function() {
    "use strict";
    angular
        .module('ngClassifieds')
        .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory) {
          // why is this undefined
          classifiedsFactory.getClassifieds()
          .then(function(response) {
            console.log($scope.classifieds);
            $scope.classifieds = response.data;
          })
        });
})();