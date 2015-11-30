'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegistrationCtrl', function ($scope) {
    $scope.userFields = [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Name',
          placeholder: 'Name'
        }
      },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter email'
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Password'
      }
    },
    {
      key: 'password_confirmation',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Confirm Password',
        placeholder: 'Password'
      }
    }
    ];

  });
