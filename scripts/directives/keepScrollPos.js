"use strict";
app.directive("keepscrollpos", ['$rootScope','$state', '$window', '$timeout', '$location', '$anchorScroll', function($rootScope, $state, $window, $timeout, $location, $anchorScroll) {
    // cache scroll position of each route's templateUrl
    $rootScope.scrollPosCache = {};
console.log("keepScrollPos() enter");
    // compile function
    return function(scope, element, attrs) {
		$rootScope.$on('$stateChangeStart', 
		function(event, toState, toParams, fromState, fromParams, options){ 
		    //event.preventDefault(); 
		    // transitionTo() promise will be rejected with 
		    // a 'transition prevented' error
		    
		    if ($state.current) {
                $rootScope.scrollPosCache[$state.current.name] = [ $window.pageXOffset, $window.pageYOffset ];
            }
		});
		$rootScope.$on('$stateChangeSuccess', 
		function(event, toState, toParams, fromState, fromParams){ 
			if ($location.hash()) {
                $anchorScroll();
            // else get previous scroll position; if none, scroll to the top of the page
            } else {
                var prevScrollPos = $rootScope.scrollPosCache[$state.current.name] || [ 0, 0 ];
                $timeout(function() {
                    $window.scrollTo(prevScrollPos[0], prevScrollPos[1]);
                }, 0);
            }
		})
    }
}]);