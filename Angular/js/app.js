var myModule = angular.module('myApp', []);

myModule.controller('passController', function($scope) {
	this.data = testData;
	
	this.templates = {
		pass: {
			firstName: 'Ivan',
			middleName: 'S.',
			lastName: 'Petrov',
			gender: 'male',
			dateBirth: new Date('1976', '06', '28'),
			document: {
				type: 'passport',
				number: '4569 55 89',
				natioality: 'RF',
				placeBirth: 'Moscow'
			}
		}
	}
});

