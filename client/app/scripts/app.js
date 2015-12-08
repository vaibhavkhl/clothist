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
        templateUrl: 'views/temp_landing.html',
        controller: 'LandingCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        abstract: true
      })
      .state('signup.registration', {
        url: '/registration',
          templateUrl: 'views/registration.html',
          controller: 'RegistrationCtrl'
        })
      .state('admin', {
        url: '/admin',
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        },
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
      })
      .state('checkout.thankyou', {
        url: '',
        templateUrl: 'views/checkout_thankyou.html',
        controller:'CheckoutThankYouCtrl'
      })
      .state('error', {
        url: '/error',
        templateUrl: 'views/error.html'
      });

    $urlRouterProvider.otherwise('/landing');

    $authProvider.configure({
      apiUrl: '/api'
    });
  })
  .run(function ($rootScope, $state) {

    $rootScope.$on('auth:login-success', function(ev) {
      // $state.go('home');
    });

    $rootScope.$on('auth:logout-success', function(ev) {
      console.log('logged out')
      $state.go('login');
    });

    $rootScope.$on('auth:validation-success', function() {
      console.log('validated, user is allowed');
      // $state.go('home');
    });

    $rootScope.$on('auth:invalid', function() {
      console.log('unauthorized');
      $state.go('login');
    });

    // $rootScope.$on('$stateChangeStart', function(event, toState, toParams,
    //   fromState, fromParams) {
    //     if (toState.name == 'admin') {
    //       if ($rootScope.user.role !== 'admin') {
    //         event.preventDefault();
    //       }
    //     }
    //   })

  });
