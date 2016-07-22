(function() {

    "use strict";

    angular
        .module('ngClassifieds')
        .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory) {
          console.log(classifiedsFactory.getClassifieds);
          classifiedsFactory.getClassifieds()
          .then(function(response) {
            $scope.classifieds = response.data;
          })
        });
})();