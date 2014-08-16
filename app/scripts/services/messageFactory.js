(function() {

  'use strict';

  function MessageFactory($location, $http, Notifier) {

    var messageData = ['empty'];

    function messages() {
      return messageData;
    }

    function openMessage(message) {
      $location.search('id', message.id).path('/message');
    }

    function deleteMessage(message) {
      console.log('todo' + message);
    }

    function getMessages() {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=London')
        .success(function(data) {
          messageData = data;
          Notifier.showSuccess();
        })
        .error(function() {
          Notifier.showError();
        });
    }

    var service = {
      messages: messages,
      openMessage: openMessage,
      deleteMessage: deleteMessage,
      getMessages: getMessages
    };

    return service;
  }

  MessageFactory.$inject = ['$location', '$http', 'Notifier'];
  angular.module('app').factory('MessageFactory', MessageFactory);

})();