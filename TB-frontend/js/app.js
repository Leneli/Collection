var obs = angular.module('obsApp', []);

obs.controller('scaffold', function ($scope, $rootScope) {
	this.data = test_data;

	// Templates for add_tier
	this.templates = {
		passengers: {
			first_name: "",
			middle_name: "",
			last_name: "",
			gender: "m",
			passport_number: "",
			nationality: "",
			dob: "",
			pob: ""
		},
	};

	$rootScope.add_tier = function(where, what) {
		where.push (what);
		return true;
	}

	$rootScope.remove_tier = function(where, what) {
		var idx = where.indexOf(what);
		console.log (idx);
		if (idx > -1) {
			where.splice(idx, 1);
			return true;
		} else {
			return false
		}
	}
});