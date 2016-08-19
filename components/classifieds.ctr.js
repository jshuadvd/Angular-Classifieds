(function() {
    
    "use strict";    
    angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast) {
        
        classifiedsFactory.getClassifieds()
        .then(function(response) {
            $scope.classifieds = response.data;
        });
        
        var contact = {
            name: "Joshua David",
            phone: "(555) 555-5555",
            email: "test@test.com"
        };
             
        $scope.openSideBar = function() {
            $mdSidenav('left').open();
        }
        
        $scope.closeSideBar = function() {
            $mdSidenav('left').close();
        }
        
        $scope.saveClassified = function(classified) {
            if (classified) {
                classified.contact = contact;
                $scope.classifieds.push(classified);
                $scope.classified = {};
                $scope.closeSideBar();
                showToast("Classified saved!");
            }
        }
        
        $scope.editClassified = function(classified) {
            $scope.editing = true;   
            $scope.openSideBar();
            $scope.classified = classified; 
        }
        
        $scope.saveEdit = function() {
            $scope.editing = false;
            $scope.classified = {};
            $scope.closeSideBar();
            showToast("Edit saved!");
        }
        
        $scope.deleteClassified = function(classified) {
            var index = $scope.classifieds.indexOf(classified);
            $scope.classifieds.splice(index);
        }
        
        function showToast(message, delay) {
            delay = 3000;
            $mdToast.show(
                $mdToast.simple()
                .content(message)
                .position('top, right')
                .hideDelay(delay)
            );
        }
        
    });
})();