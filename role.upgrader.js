/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function(creep) {
    if(creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
            creep.memory.working = true;
        } 
        
        if(creep.memory.working == true){
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller);
                creep.say("Damnit");
            } 
            if(creep.carry.energy < 1){
                creep.memory.working = false;
            }
        }else{
             var sourceDroite = creep.pos.findClosestByPath(FIND_SOURCES);
             
            if(creep.harvest(sourceDroite) == ERR_NOT_IN_RANGE ){
                
            creep.moveTo(sourceDroite);
          
            }
        }
}};