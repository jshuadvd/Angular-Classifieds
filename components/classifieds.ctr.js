(function() {
  
  "use strict";
  
  angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', function($scope) {
      $scope.classified = [{
          'id': '1',
          'title': 'First Item',
          'price': 6000,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          'posted': '2015-10-24',
          'contact': {
            name: 'John Doe',
            phone: '(555)-555-5555',
            email: 'john@doe.com'
          },
          'categories': [
            'Vehicles',
            'Parts & Accesories' 
          ],
          'image': 'http://www.blogcdn.com/www.autoblog.com/media/2012/09/01-2012-tesla-model-s-fd-1347336745.jpg',
          'views': 213        
        },
        {
            'id': '2',
            'title': 'First Item',
            'price': 600,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'posted': '2015-10-24',
            'contact': {
              name: 'John Doe',
              phone: '(555)-555-5555',
              email: 'john@doe.com'
            },
            'categories': [
              'Vehicles',
              'Parts & Accesories' 
            ],
            'image': 'http://www.blogcdn.com/www.autoblog.com/media/2012/09/01-2012-tesla-model-s-fd-1347336745.jpg',
            'views': 213        
          },
          {
              'id': '3',
              'title': 'First Item',
              'price': 4000,
              'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              'posted': '2015-10-24',
              'contact': {
                name: 'John Doe',
                phone: '(555)-555-5555',
                email: 'john@doe.com'
              },
              'categories': [
                'Vehicles',
                'Parts & Accesories' 
              ],
              'image': 'http://www.blogcdn.com/www.autoblog.com/media/2012/09/01-2012-tesla-model-s-fd-1347336745.jpg',
              'views': 213        
            },
            {
                'id': '4',
                'title': 'First Item',
                'price': 600,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'posted': '2015-10-24',
                'contact': {
                  name: 'John Doe',
                  phone: '(555)-555-5555',
                  email: 'john@doe.com'
                },
                'categories': [
                  'Vehicles',
                  'Parts & Accesories' 
                ],
                'image': 'http://www.blogcdn.com/www.autoblog.com/media/2012/09/01-2012-tesla-model-s-fd-1347336745.jpg',
                'views': 213        
              },
              {
                  'id': '5',
                  'title': 'First Item',
                  'price': 2000,
                  'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'posted': '2015-10-24',
                  'contact': {
                    name: 'John Doe',
                    phone: '(555)-555-5555',
                    email: 'john@doe.com'
                  },
                  'categories': [
                    'Vehicles',
                    'Parts & Accesories' 
                  ],
                  'image': 'http://www.blogcdn.com/www.autoblog.com/media/2012/09/01-2012-tesla-model-s-fd-1347336745.jpg',
                  'views': 213        
                },
      ]
  });  
})();
