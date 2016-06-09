/*global angular*/

angular.module('nsuForm')
.controller('FormController', function($scope, nsuService) {
  $scope.schema = {
    type: "object",
    properties: {
      firstName: { type: "string", minLength: 2, title: "First Name" },
      lastName: { type: "string", minLength: 2, title: "Last Name" },
      email: { type: "string", minLength: 2, title: "Email", 'pattern': '^\\S+@\\S+$'},
      date:{
        title: "Date of birth",
        type: "string",
        format: "date"
      }
    },
    "required": [
      "firstName",
      "lastName",
      "email"
    ]
  };

  $scope.form = [
    "*",
    {
     "key": 'multiselect',
     "type": 'strapselect',
     "options": { 
      "multiple": "true"
   },
   "titleMap": [
        {"value": 'value1', "name": 'text1'},
        {"value": 'value2', "name": 'text2'},
        {"value": 'value3', "name": 'long very very long label3'}
   ]
 },
    { type: 'submit', title: 'Submit' },
  ];
  
   $scope.submitForm = function(form, data) {
    // First we broadcast an event so all fields validate themselves
    debugger
    $scope.$broadcast('schemaFormValidate');
    // Then we check if the form is valid
    if (form.$valid) {
      nsuService.post($scope.model);
    }
  };

  $scope.model = {};
});