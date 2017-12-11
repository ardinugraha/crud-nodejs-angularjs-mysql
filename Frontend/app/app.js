var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      title: 'Mahasiswa',
      templateUrl: 'partials/mahasiswa.html',
      controller: 'mahasiswaCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });;
}]);
    