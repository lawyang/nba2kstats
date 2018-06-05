let myNba = angular.module('myNba', []);

myNba.controller('nbaController', ['$http', function($http){

let vm = this;

vm.toDisplayArray = [];

class Player{
    constructor(name, archetype, twopoints, threepoints, rebounds, assists, steals, blocks)
    {
        this.name = name,
        this.archetype = archetype,
        this.twopoints = twopoints,
        this.threepoints = threepoints,
        this.rebounds = rebounds,
        this.assists = assists,
        this.steals = steals,
        this.blocks = blocks
    }
}

vm.addPlayer = function() {
    let playerToSend = {
        player: vm.player, 
        archetype: vm.archetype, 
        twopoints: vm.twopoints, 
        threepoints: vm.threepoints, 
        rebounds: vm.rebounds, 
        assists: vm.assists, 
        steals: vm.steals, 
        blocks: vm.blocks,
        points: vm.threepoints + vm.twopoints
    }
    console.log(playerToSend);
    $http({
        method: 'POST',
        url: '/basketball',
        data: playerToSend
    })
    .then( function(response) {
        console.log(`successfully added new PLAYER: ${playerToSend}`);
        vm.getPlayer();

    })
    .catch( function( error ){
        console.log(`ERROR POSTING to SERVER: ${error}`);
    })
}

vm.getPlayer = function() {
    $http({
        method: 'GET',
        url: '/basketball'
    })
    .then( function( response ) {
        console.log(`GET response back from server with ${response.data}`);
        vm.toDisplayArray = response.data;
    })
    .catch( function( error ) {
        console.log(`ERROR GET from server ${error}`);
        
    })
}

vm.getPlayer();

}]);