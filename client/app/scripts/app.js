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
    'formlyBootstrap',
    'ui.bootstrap'
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
        templateUrl: 'views/work_preference.html',
        controller: 'WorkPreferenceCtrl'
      })
      .state('signup.leisure', {
        url: '/leisure',
        templateUrl: 'views/leisure_preference.html',
        controller: 'LeisurePreferenceCtrl'
      })
      .state('signup.dislike', {
        url: '/dislike',
        templateUrl: 'views/dislike_preference.html',
        controller: 'DislikePreferenceCtrl'
      })
      .state('signup.patterns', {
        url: '/patterns',
        templateUrl: 'views/patterns_dislike_preference.html',
        controller: 'PatternsDislikePreferenceCtrl'
      })
      .state('signup.cost', {
        url: '/cost',
        templateUrl: 'views/cost_preference.html',
        controller: 'CostPreferenceCtrl'
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
        },
      })
      .state('home.sizeprofile', {
        url: '/sizeprofile',
        templateUrl: 'views/size_profile.html',
        controller: 'SizeProfileCtrl'
      })
      .state('home.schedulebox', {
        url: '/box',
        templateUrl: 'views/schedule_box.html',
        controller: 'ScheduleBoxCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .state('checkout', {
        url: '/checkout/:unique_identifier',
        templateUrl: 'views/checkout.html',
        controller:'CheckoutCtrl',
        abstract:true
      })
      .state('checkout.welcome', {
        url: '',
        templateUrl: 'views/checkout_welcome.html'
      })
      .state('checkout.products', {
        url: '',
        templateUrl: 'views/checkout_products.html'
      })
      .state('checkout.revieworder', {
        url: '',
        templateUrl: 'views/checkout_review_order.html',
        controller:'CheckoutReviewOrderCtrl'
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
      $state.go('home');
    });

    $rootScope.$on('auth:invalid', function() {
      console.log('unauthorized');
      $state.go('login');
    });

  });
