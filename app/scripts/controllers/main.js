(function() {

	'use strict';

	function Main() {
		var vm = this;
		vm.greeting = 'Allo, Allo!';
	}

	angular.module('app').controller('Main', Main);

})();