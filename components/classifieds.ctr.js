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
                $mdToast.show(
                    $mdToast.simple()
                    .content("Classified Saved!")
                    .position('top, right')
                    .hideDelay(3000)
                );
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
        }
        
        function showToast() {
            
        }
        
    });
})();