'use strict';

angular.module('palladium', [
  'ngRoute',
  'home'
]).controller('ScrollingController', function($scope, $location, anchorSmoothScroll){



}).directive('isActiveNav', [ '$location', function($location) {
return {
 restrict: 'A',
 link: function(scope, element) {
   scope.location = $location;
   scope.$watch('location.path()', function(currentPath) {
    window.scrollTo(0, 0);
     if('/#' + currentPath === element[0].attributes['href'].nodeValue) {
     	console.log(element[0]);
       element[0].classList.add('active');
     } else {
       element[0].classList.remove('active');
     }
   });
 }
 };
}]);
               