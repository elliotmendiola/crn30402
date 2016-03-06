/*global angular*/

angular.module('book-store', ['ui.router'])

.run(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('main', {
                templateUrl: '../main/main.html',
                controller: 'MainCtrl'
            })
            .state('test', {
                templateUrl: '../test/test.html',
                controller: 'TestCtrl'
            });
    }
]);