(function() {
    
    "use strict";    
    angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {
        
        var vm = this;   
        
        vm.categories;
        vm.classified;
        vm.classifieds;
        vm.closedSideBar = closedSideBar;
        vm.deleteClassified = deleteClassified;
        vm.editing;
        vm.editClassified = editClassified;
        vm.openSideBar = openSideBar;
        vm.saveClassified = saveClassified;
        vm.saveEdit = saveEdit;
        
             
        classifiedsFactory.getClassifieds()
        .then(function(response) {
            vm.classifieds = response.data;
            vm.categories = getCategories($scope.classifieds);
        });
        
        var contact = {
            name: "Joshua David",
            phone: "(555) 555-5555",
            email: "test@test.com"
        };
             
        
        function openSideBar() {
            $mdSidenav('left').open();
        }
        
        function closeSideBar() {
            $mdSidenav('left').close();
        }
        
        function saveClassified(classified) {
            if (classified) {
                classified.contact = contact;
                vm.classifieds.push(classified);
                vm.classified = {};
                vm.closeSideBar();
                showToast("Classified saved!");
            }
        }
        
        function editClassified(classified) {
            vm.editing = true;   
            vm.openSideBar();
            vm..classified = classified; 
        }
        
        function saveEdit() {
            vm.editing = false;
            vm.classified = {};
            vm.closeSideBar();
            showToast("Edit saved!");
        }
        
        function deleteClassified(event, classified) {
            var confirm = $mdDialog.confirm()
                .title('Are you sure you want to delete' + classified.title + '?')
                .ok('Yes')
                .cancel('No')
                .targetEvent(event);
            $mdDialog.show(confirm).then(function() {
                var index = $scope.classifieds.indexOf(classified);
                vm.classifieds.splice(index, 1);
            }, function() {
                
            });
            
            var index = $scope.classifieds.indexOf(classified);
            if (confirm("are you sure?")) {
                vm.classifieds.splice(index, 1);
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
        
        function getCategories(classifieds) {
            var categories = [];
            angular.forEach(classifieds, function(item) {
                angular.forEach(item.categories, function(category) {
                    categories.push(category);
                })
            });
            return _.uniq(categories);
        }
        
    });
})();