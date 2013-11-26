'use strict';

angular.module('APPersicetoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.links = [
      {'name': 'News', 'url': '#/news'},
      {'name': 'Eventi', 'url': '#/'},
      {'name': 'Mappa', 'url': '#/'},
      {'name': 'Segnalazioni', 'url': '#/reports'},
      {'name': 'Meteo', 'url': '#/'},
      {'name': 'Sito', 'url': '#/'}
    ];
  });
