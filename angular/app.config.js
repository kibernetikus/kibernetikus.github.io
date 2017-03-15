angular.
module('palladium').
config(['$locationProvider', '$routeProvider', 
	function config($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);
		$routeProvider.
			when('/',{
				template: '<home></home>'
			}).otherwise('/404');
	}])