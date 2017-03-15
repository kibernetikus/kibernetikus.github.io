'use strict';
angular.
module('home')
    .component('home', {
        templateUrl: `angular/home/home.template.html`,
        controller: ['$scope', '$location', '$anchorScroll',
            function homeController($scope, $location, $anchorScroll) {
                $scope.tab = 1;
                $scope.setTab = function(newTab) {
                    $scope.tab = newTab;
                };
                $scope.isSet = function(tabNum) {
                    return $scope.tab === tabNum;
                };

                $scope.setMenu = function(e) {
                    var scrollNav = document.querySelector('#scrollNav');
                    var scrollNavContent = document.querySelector('.scrollNav');
                    var menuScroll = document.querySelector('#scrollNav-menu');
                    var scrollNavParent = document.querySelector('.scrollNav-submenu');
                    menuScroll.classList.toggle('nav--show')
                        //scrollNavContent.classList.toggle('home-menu__open')
                    scrollNavParent.classList.toggle('home-menu__open')
                    scrollNav.classList.toggle('nav-icon__open');
                };




                $scope.gotoElement = function(eID) {
                    var scrollNavParent = document.querySelector('.scrollNav-submenu');
                    var scrollNav = document.querySelector('#scrollNav');
                    var menuScroll = document.querySelector('#scrollNav-menu');
                    if (scrollNavParent.classList.contains('home-menu__open')) {
                        scrollNavParent.classList.remove('home-menu__open');
                        scrollNav.classList.remove('nav-icon__open');
                        menuScroll.classList.remove('nav--show');
                    }
                    // set the location.hash to the id of
                    // the element you wish to scroll to.

                    // call $anchorScroll()

                    var startY = currentYPosition();
                    var stopY = elmYPosition(eID);
                    var distance = stopY > startY ? stopY - startY : startY - stopY;
                    if (distance < 100) {
                        scrollTo(0, stopY);
                        return;
                    }
                    var speed = Math.round(distance / 100);
                    if (speed >= 20) speed = 20;
                    var step = Math.round(distance / 25);
                    var leapY = stopY > startY ? startY + step : startY - step;
                    var timer = 0;
                    if (stopY > startY) {
                        for (var i = startY; i < stopY; i += step) {
                            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                            leapY += step;
                            if (leapY > stopY) leapY = stopY;
                            timer++;
                        }
                        return;
                    }
                    for (var i = startY; i > stopY; i -= step) {
                        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                        leapY -= step;
                        if (leapY < stopY) leapY = stopY;
                        timer++;
                    }

                    function currentYPosition() {
                        if (self.pageYOffset) return self.pageYOffset;
                        if (document.documentElement && document.documentElement.scrollTop)
                            return document.documentElement.scrollTop;
                        if (document.body.scrollTop) return document.body.scrollTop;
                        return 0;
                    }

                    function elmYPosition(eID) {
                        var elm = document.getElementById(eID);
                        var y = elm.offsetTop;
                        var node = elm;
                        while (node.offsetParent && node.offsetParent != document.body) {
                            node = node.offsetParent;
                            y += node.offsetTop;
                        }
                        return y;
                    }


                };
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = "js/reveal.js";
                document.body.appendChild(script);
            }
        ]
    });
