'use strict';

/**
 * @ngdoc function
 * @name angularYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularYoApp
 */
angular.module('angularYoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
