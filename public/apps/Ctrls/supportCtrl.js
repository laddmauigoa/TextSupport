var app = angular.module('textSupport');

app.controller('supportCtrl', function($scope, $firebase, mainService) {
	var ref = new Firebase('https://laddstextsupport.firebaseio.com/numbers');
	var sync = $firebase(ref);

	$scope.texts = sync.$asObject();
	console.log($scope.texts)
	$scope.test = 'this is serviceCtrl'
	
	$scope.postReply = function(text, to_number) {
		console.log(text, to_number)
		mainService.postMeData(text, to_number);
		$scope.NewMessageText = '';
	}



		

	

	

});