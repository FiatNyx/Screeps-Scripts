var roleHarvester = require('role.harvester');

module.exports = {
    run: function(creep) {
    if(creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
            creep.memory.working = true;
        } 
        
        if(creep.memory.working == true){
            var structure = creep.pos.findClosestByRange(FIND_STRUCTURES, { filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL});
       
           if(structure != undefined){
            if(creep.repair(structure) == ERR_NOT_IN_RANGE){
                creep.moveTo(structure);
            } else if(creep.carry.energy < 1){
                creep.memory.working = false;
            }
        } else{
            roleHarvester.run(creep);
        }
    }
  
        else{
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE ){
                creep.moveTo(source);
            }else if (creep.carry.energy < creep.carryCapacity) {
                creep.memory.working = false;
            }
        }
}};