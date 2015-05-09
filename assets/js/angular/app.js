'use strict';

angular.module('demoApp', [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('overview',{
        url:'/',
        templateUrl:'/js/angular/overview/overview.html',
        controller: 'EventsController'
      })

      .state('single',{
        url:'/event/meineID',
        templateUrl:'/js/angular/single/single.html'
      })
  })