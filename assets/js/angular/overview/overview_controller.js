angular.module('demoApp')
	.controller('EventsController', ['$scope', '$http', function($scope, $http){
		$scope.message = 'this is a test';

		$http.get('/event')
			.success(function(events){
				$scope.results = events;
			})

			.error(function(reason){
				console.log(reason);
			});
	}]);