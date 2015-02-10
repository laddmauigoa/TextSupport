var app = angular.module('textSupport');

app.controller('mainCtrl', function($scope, mainService) {

$scope.test = 'this is mainCtrl';
mainService.getData()
});