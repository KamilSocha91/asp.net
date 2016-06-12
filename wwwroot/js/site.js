var module = angular.module("serverApp", []);

module.controller('clientCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.get = function() {
		$http({
			method: 'GET',
			url: 'http://localhost:5000/api/server/'
		}).then(function successCallback(response) {
		   $scope.list = response.data;
		}, function errorCallback(response) {
			alert("Houston, We've Got a Problem");
		});
    }

    $scope.getOne = function(id) {
		$http({
			method: 'GET',
			url: 'http://localhost:5000/api/server/'+id+'/'
		}).then(function successCallback(response) {
		   $scope.one = response.data;
		}, function errorCallback(response) {
			alert("Houston, We've Got a Problem");
		});
    }

    $scope.post = function(data) {
		$http({
			method: 'POST',
            url: 'http://localhost:5000/api/server/',
            data: $.param(data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(function successCallback(response) {

		}, function errorCallback(response) {
			alert("Houston, We've Got a Problem");
		});
    }

    $scope.put = function(data) {
		$http({
			method: 'PUT',
            url: 'http://localhost:5000/api/server/'+data.Id+'/',
            data: $.param(data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(function successCallback(response) {

		}, function errorCallback(response) {
			alert("Houston, We've Got a Problem");
		});
    }

    $scope.delete = function(id) {
		$http({
			method: 'DELETE',
            url: 'http://localhost:5000/api/server/'+id+'/'
		}).then(function successCallback(response) {

		}, function errorCallback(response) {
			alert("Houston, We've Got a Problem");
		});
    }
    
}]);

/*module.directive('get', function() {
  	return {
		$http({
			method: 'GET',
			url: 'http://localhost:5000/api/server/'
		}).then(function successCallback(response) {
		   $scope.list = response.data;
		}, function errorCallback(response) {
			alert("Houston, We've Got a Problem");
		});
		};
	});

module.directive('getOne', function() {
  	return {
		$http({
			method: 'GET',
			url: 'http://localhost:5000/api/server/'+id+'/'
		}).then(function successCallback(response) {
		   $scope.one = response.data;
		}, function errorCallback(response) {
			alert("Houston, We've Got a Problem");
		});
		};
	});

module.directive('post', function(data) {
  	return {
		$http({
			method: 'POST',
            url: 'http://localhost:5000/api/server/',
            data: $.param(data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(function successCallback(response) {
			$scope.list = response.data;
		}, function errorCallback(response) {
			alert("Houston, We've Got a Problem");
		});
		};
	});

module.directive('put', function(data) {
  	return {
		$http({
			method: 'PUT',
            url: 'http://localhost:5000/api/server/'+data.Id+'/',
            data: $.param(data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(function successCallback(response) {
			$scope.list = response.data;
		}, function errorCallback(response) {
			alert("Houston, We've Got a Problem");
		});
		};
	});

module.directive('delete', function(id) {
  	return {
		$http({
			method: 'DELETE',
            url: 'http://localhost:5000/api/server/'+id+'/'
		}).then(function successCallback(response) {
			$scope.list = response.data;
		}, function errorCallback(response) {
			alert("Houston, We've Got a Problem");
		});
		};
	});
*/