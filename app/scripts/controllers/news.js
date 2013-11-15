'use strict';

angular.module('APPersicetoApp')
  .controller('NewsCtrl', function ($scope) {
    $scope.feeds = [
      {'name': 'Notizie', 'url': 'http://www.comunepersiceto.it/notizie-home-page/RSS'},
      {'name': 'Comunicati Stampa', 'url': 'http://www.comunepersiceto.it/notizie/ledicola-comunale/comunicati-stampa/comunicati-stampa-2013/RSS'},
      {'name': 'Rassegna Stampa', 'url': 'http://www.comunepersiceto.it/notizie/ledicola-comunale/rassegna-stampa/rassegna-stampa-2013/RSS'}
    ];
  });
