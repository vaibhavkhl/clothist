'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngMessages',
    'ui.router',
    'ng-token-auth',
    'formly',
    'formlyBootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('landing', {
        url: '/landing',
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        abstract: true
      })
      .state('signup.work', {
        url: '/work',
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl'
      })
      .state('signup.leisure', {
        url: '/leisure',
        templateUrl: 'views/leisure.html',
        controller: 'LeisureCtrl'
      })
      .state('signup.not_wear', {
        url: '/not_wear',
        templateUrl: 'views/not_wear.html',
        controller: 'NotWearCtrl'
      })
      .state('signup.patterns', {
        url: '/patterns',
        templateUrl: 'views/patterns_unlike.html',
        controller: 'PatternsUnlikeCtrl'
      })
      .state('signup.spend', {
        url: '/spend',
        templateUrl: 'views/spend.html',
        controller: 'SpendCtrl'
      })
      .state('signup.registration', {
        url: '/registration',
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      });

    $urlRouterProvider.otherwise('/landing');

    $authProvider.configure({
      apiUrl: '/api'
    });
  })
  .run(function ($rootScope, $state) {
    $rootScope.$on('auth:login-success', function(ev) {
      $state.go('home');
    });

    $rootScope.$on('auth:logout-success', function(ev) {
      console.log('goodbye');
    });

    $rootScope.$on('auth:validation-success', function() {
      console.log('validated, user is allowed');
    });

    $rootScope.$on('auth:invalid', function() {
      console.log('unauthorized');
      $state.go('login');
    });

  });
