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
        key: 'first_name',
        type: 'input',
        templateOptions: {
          // type: 'email',
          label: 'First Name',
          placeholder: 'First Name'
        }
      },
      {
        key: 'last_name',
        type: 'input',
        templateOptions: {
          // type: 'email',
          label: 'Last Name',
          placeholder: 'Last Name'
        }
      },
      {
        key: 'phn_no',
        type: 'input',
        templateOptions: {
          // type: 'email',
          label: 'Mobile Number',
          placeholder: 'Mobile Number'
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
