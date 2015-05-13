angular
    .module('guacamoleApp')
    .controller('GuacamoleController', GuacamoleController);

    function GuacamoleController(){
        var self = this;
        self.holes = [];
        self.score = 0;
        for(i=0;i<9;i++){
            self.holes.push({moleIsHere:"hole"})
        }
        self.holes[Math.floor(Math.random()*9)].moleIsHere = "moleHere";
        self.whack = function($index){
            if(self.holes[$index].moleIsHere == "moleHere"){
                self.holes[$index].moleIsHere = "hole";  
            self.holes[Math.floor(Math.random()*9)].moleIsHere = "moleHere";
            self.score++
            }
        }
    }