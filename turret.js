/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('turret');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
run: function() {
    var turret1 = Game.getObjectById ("5c1fe10f6a4b4446d0750aa4");
    var turret2 = Game.getObjectById ("5c264b0be38b1f6a473a072d");
    var hostiles = Game.rooms["E41N47"].find(FIND_HOSTILE_CREEPS);
     var structures = Game.rooms["E41N47"].find(FIND_STRUCTURES, { filter: (s) => s.hits < s.hitsMax && s.structureType == STRUCTURE_WALL});
var structure = structures[Math.floor(Math.random()*structures.length)];


    if(hostiles != 0){
        
        turret1.attack(hostiles[0]);
    }else if (turret1.energy > 750){
        turret1.repair(structure);
     
    }
    
        if(hostiles != 0){
        
        turret2.attack(hostiles[0]);
    }else if (turret2.energy > 750){
        turret2.repair(structure);
     
    }
    
}
};