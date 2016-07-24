(function() {
    "use strict";
    angular
        .module('ngClassifieds')
        .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory) {
          //why undefined
          classifiedsFactory.getClassifieds().then(function(response) {
            $scope.classifieds = response.data;
          })
        });
})();