'use strict';

/**
 * @ngdoc function
 * @name angularYoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularYoApp
 */
angular.module('angularYoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
