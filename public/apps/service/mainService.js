var app = angular.module('textSupport');

app.service('mainService', function($http) {

this.getData = function() {
	console.log('this is the service')
}

this.postMeData = function(text, to_number) {
	 $http({
		method: 'POST',
		url: '/api/support/messages',
		data: {
			to: to_number,
			message: text

		}
	})
	
}





})