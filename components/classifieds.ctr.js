(function() {
    
    "use strict";    
    angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {
        
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
        
        $scope.deleteClassified = function(event, classified) {
            var confirm = $mdDialog.confirm();
                .title('Are you sure you want to delete' + classified.title + '?')
                .ok('Yes')
                .cancel('No')
                .targetEvent(event);
            $mdDialog.show()
            
            var index = $scope.classifieds.indexOf(classified);
            if (confirm("are you sure?")) {
                $scope.classifieds.splice(index, 1);
            }
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