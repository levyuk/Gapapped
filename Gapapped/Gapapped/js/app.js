var app = angular.module('app', ['ngSanitize']);

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider.when('/home/', { templateUrl: 'partials/home.html', controller: HomeCtrl });
    $routeProvider.when('/contact/', { templateUrl: 'partials/contact.html', controller: ContactCtrl });
    $routeProvider.otherwise({ redirectTo: '/home/' });
}]);