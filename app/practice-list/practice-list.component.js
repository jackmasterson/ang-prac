'use strict';

//Register component

angular.
	module('practiceApp').
	component('practiceList', {
		templateUrl: 'practice-list/practice-list.template.html',
		controller: function PracticeListController() { 
			this.facts = [
				{
					info: 'I can wash my hands with my feet',
					snippet: 'I learned it from the Internet'
				}, {
					info: 'I can speak backwards',
					snippet: 'I learned it from the OCD'
				}
			];
		}
	});