var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BanksController',
		templateUrl: 'views/banks.html'
	})
	.when('/banks', {
		controller:'BanksController',
		templateUrl: 'views/banks.html'
	})
	.when('/banks/details/:id',{
		controller:'BanksController',
		templateUrl: 'views/bank_details.html'
	})
	.when('/banks/add',{
		controller:'BanksController',
		templateUrl: 'views/add_bank.html'
	})
	.when('/banks/edit/:id',{
		controller:'BanksController',
		templateUrl: 'views/edit_bank.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});