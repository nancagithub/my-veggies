var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

  //$locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);


  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'NinjaController'
  })
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactController'
  })
  .when('/contact-success', {
    templateUrl: 'views/contact-success.html',
    controller: 'ContactController'
  })
  .when('/directory', {
    templateUrl: 'views/directory.html',
    controller: 'NinjaController'
  })
  .otherwise({
    redirectTo: '/home'
  });

}]);

myNinjaApp.directive('randomVeg', [function() {

  return {
    restrict: 'E',
    scope: {
      vegs: '=',
      title: '='
    },
    templateUrl: 'views/random.html',
    transclude: true,
    replace: true,
    controller: function($scope){
      $scope.random = Math.floor(Math.random() * 4);  //random numb btwn 1 & 3
    }
  };

}]);



myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http) {

  $scope.message = "hello nanca";
  $scope.name = "Nancy";

  $scope.removeItem = function(item) {
    var removedItem = $scope.vegs.indexOf(item);
    $scope.vegs.splice(removedItem, 1);
  }

  $scope.addVeg = function() {
    $scope.vegs.push({
      name: $scope.newveg.name,
      belt: $scope.newveg.belt,
      rate: parseInt($scope.newveg.rate),
      available: true
    });
    $scope.newveg.name = "";
    $scope.newveg.belt = "";
    $scope.newveg.rate = "";
  };


$scope.removeAll = function () {
  $scope.vegs = [];
};

$http.get('data/vegs.json').then(function(response){
  $scope.vegs = response.data;
});

}]);



myNinjaApp.controller('ContactController', ['$scope', '$location', function($scope, $location){

  $scope.sendMessage = function() {
    $location.path('contact-success')
  };

}]);

/**/
















/** */
