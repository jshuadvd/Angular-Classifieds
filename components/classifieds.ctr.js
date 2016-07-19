(function() {

    "use strict";

    angular
        .module('ngClassifieds')
        .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory) {
          $http.get('data/classifieds.json').then(function(response) {
            $scope.classifieds = response.data;
          })
        });
})();