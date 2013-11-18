'use strict';

angular.module('APPersicetoApp')
  .controller('NewsCtrl',['$scope','feedFactory', function ($scope, feedFactory) {
    $scope.feeds = [
      {'name': 'Notizie', 'url': 'http://www.comunepersiceto.it/notizie-home-page/RSS'},
      {'name': 'Comunicati Stampa', 'url': 'http://www.comunepersiceto.it/notizie/ledicola-comunale/comunicati-stampa/comunicati-stampa-2013/RSS'},
      {'name': 'Rassegna Stampa', 'url': 'http://www.comunepersiceto.it/notizie/ledicola-comunale/rassegna-stampa/rassegna-stampa-2013/RSS'}
    ];
    $scope.loadButtonText = 'Scegli categoria';
    $scope.loadFeed=function(e){
        var url = $(e.target).data('url');
        feedFactory.parseFeed(url).then(function(res){
            $scope.feedSrc = url;
            $scope.loadButtonText=angular.element(e.target).text();
            $scope.entries=res.data.responseData.feed.entries;
        });
    }
  }]);
