(function() {

	'use strict';

	function Notifier() {

		function showSuccess() {
			console.log('Yay! Success');
		}

		function showError() {
			console.log('Boo! Failure');
		}

		var service = {
			showSuccess: showSuccess,
			showError: showError
		};

		return service;
	}

	angular.module('app').factory('Notifier', Notifier);

})();