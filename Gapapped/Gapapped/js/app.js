angular.module('app', []).config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider.when('/home/', { templateUrl: 'partials/home.html', controller: HomeCtrl });
    $routeProvider.when('/contact/', { templateUrl: 'partials/contact.html', controller: ContactCtrl });
    $routeProvider.when('/notes/', { templateUrl: 'partials/notes.html', controller: NotesCtrl });
    $routeProvider.otherwise({ redirectTo: '/home/' });
}]).filter('formattedDate', function (dateFilter) {
    return function (input, format) {
        return dateFilter(new Date(input), format);
    }
});
