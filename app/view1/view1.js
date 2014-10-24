'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, Jobhunts) {
    $scope.alljobhunts = Jobhunts.query();
    $scope.idSelectedJob = null;
    $scope.showSelectedElement = function(onejobhunt) {
        $scope.selected = onejobhunt.companyId.companyName + " - " + onejobhunt.jobPositionId.jobPositionName;
        $scope.idSelectedJob = onejobhunt.jobHuntId;
    };
});