'use strict';

angular.module('APPersicetoApp')
  .controller('ReportsCtrl', function ($scope) {
        $scope.master = {};

        $scope.send = function (report) {
            console.log('segnalazione inviata');
        };

        $scope.isUnchanged = function (report) {
            return angular.equals(report, $scope.master);
        };

  });

