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
    }
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
    { type: 'submit', title: 'Cancel', onClick: function(){ console.log($scope.model);  } },
    { type: 'button', style: 'btn-danger', title: 'Cancel', 
      onClick: function(){
        debugger
        nsuService.post($scope.model);
      }
    }
  ];

  $scope.model = {};
});