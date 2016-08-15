myApp.controller('homeController', function($scope, $state, $stateParams) {
	$scope.user = {};

	$scope.saveUserInformation = function() {
		alert($scope.user);
		console.log($scope.user);
	};
	
	$scope.refreshUserInformation = function() {
		//document.location.reload(true);
		//$state.reload();
		//$state.go($state.current, {}, {reload: true});
		$state.transitionTo($state.current, $stateParams, {
			reload: true,
			inherit: false,
			notify: true
		});
	};

	$scope.goToNinjaUser = function() {
		$state.go('home.ninja');
	};
});