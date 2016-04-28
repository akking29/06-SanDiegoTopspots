//create module
var topSpots = angular.module('topSpots',[]);
//create controller 
topSpots.controller('tController', ['$scope', '$http', function($scope, $http){
	
	activate();
//grab json file and drop into scope
	function activate () {
		$http({
			method: 'get',
			url:'index.json'
		}).then(function(response){

			$scope.topspots= response.data;
			
		});
	}

}]);	




