/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.harvester');
 * mod.thing == 'a thing'; // true
 */
  var roleUpgrader = require('role.upgrader');

module.exports = {
    run: function(creep) {
    if(creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
            creep.memory.working = true;
        } 
        
        if(creep.memory.working == true){
         //   var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {filter: (s) => s.energy < s.energyCapacity && s.structureType != STRUCTURE_TOWER && s.structureType != STRUCTURE_CONTAINER});
        var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_STORAGE});
       if(structure != undefined){
           
      
            if(creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(structure);
            }
            
            if(creep.carry.energy < 1){
                creep.memory.working = false;
            }
        } else{
          roleUpgrader.run(creep);
        }
            
            
        }
        else{
            var sourceNearest = creep.pos.findClosestByPath(FIND_SOURCES);
            var sourceGauche = Game.getObjectById("5bbcaf5a9099fc012e63a7bc");
            
            if(creep.harvest(sourceNearest) == ERR_NOT_IN_RANGE ){
                creep.moveTo(sourceNearest);
            }else if (creep.carry.energy < creep.carryCapacity) {
                creep.memory.working = false;
            }
        }
}};