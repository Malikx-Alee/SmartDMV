var myApp = angular.module('myApp');

myApp.controller('BanksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BanksController loaded...');

	$scope.getBanks = function(){
		$http.get('/api/banks').success(function(response){
			$scope.banks = response;
		});
	}

	$scope.getBank = function(){
		var id = $routeParams.id;
		$http.get('/api/banks/'+id).success(function(response){
			$scope.book = response;
		});
	}

	$scope.addBank = function(){
		console.log($scope.book);
		$http.post('/api/banks/', $scope.book).success(function(response){
			window.location.href='#/banks';
		});
	}

	$scope.updateBank = function(){
		var id = $routeParams.id;
		$http.put('/api/banks/'+id, $scope.bank).success(function(response){
			window.location.href='#/banks';
		});
	}

	$scope.removeBank = function(id){
		$http.delete('/api/banks/'+id).success(function(response){
			window.location.href='#/banks';
		});
	}
}]);