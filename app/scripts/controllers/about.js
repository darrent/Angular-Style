(function() {

	'use strict';

	function About(MessageFactory) {
		var vm = this;
		vm.messages = MessageFactory.messages();

		vm.openMessage = function(message) {
			MessageFactory.openMessage(message);
		};

		vm.deleteMessage = function(message) {
			MessageFactory.deleteMessage(message);
		};

		MessageFactory
			.getMessages()
			.then(function() {
				vm.messages = MessageFactory.messages();
			});
	}

	About.$inject = ['MessageFactory'];
	angular.module('app').controller('About', About);

})();