'use strict';

//Register component

angular.
	module('practiceList').
	component('practiceList', {
		templateUrl: 'practice-list/practice-list.template.html',
		controller: ['$http', 
			function PracticeListController($http) { 
				var self = this;

				$http.get('practice/practice.json').then(function(response){
					self.practice = response.data;
					console.log(self.practice);
				});
			}
		]
	});