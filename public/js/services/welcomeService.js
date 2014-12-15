'use strict';

angular.module('goApp')

.service('WelcomeService', function($http) {
    return {
        getAllPlayers: function() {
            return $http.get('/getAllPlayers');
        },
        joinGame: function(gameId, name) {
            return $http.get('/joinGame/' + gameId + '/' + name);
        }
    };
});
