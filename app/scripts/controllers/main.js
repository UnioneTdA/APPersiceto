'use strict';

angular.module('APPersicetoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.links = [
      'News',
      'Eventi',
      'Mappa',
      'Segnalazioni',
      'Meteo',
      'Sito'
    ];
  });
