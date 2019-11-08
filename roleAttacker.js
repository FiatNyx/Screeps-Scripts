/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('roleAttacker');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    work: function(creep,attackDestination){
     
        if(creep.room.name != attackDestination){
           var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
           var wall = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_WALL});
           if(target == undefined){
              creep.moveTo(creep.pos.findClosestByPath(creep.room.findExitTo(attackDestination)),{reusePath : 10});
           }
           else{
                if(creep.attack(target) == ERR_NOT_IN_RANGE){
                    var deplacement = creep.moveTo(target);
                    if(deplacement == -2){
                        if(wall != undefined){
                            if(creep.attack(wall) == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(wall);
                            }
                        }
                            
                    }
                 }
            }
         
        }else{
            var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            var targetStructure = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TOWER});
            var wall = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_WALL});
            var gg = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_SPAWN})
            var restant = creep.pos.findClosestByRange(FIND_STRUCTURES,{filter: (s) => s.structureType != STRUCTURE_CONTROLLER});
           
            if (targetStructure != undefined){
                if(creep.attack(targetStructure) == ERR_NOT_IN_RANGE){
                    var deplacement = creep.moveTo(targetStructure);
                    if(deplacement == -2){
                        if(creep.attack(wall) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(wall);
                        }
                    }
                } 
                
            }else  if(target != undefined) {
                if(creep.attack(target) == ERR_NOT_IN_RANGE) {
                    var deplacement = creep.moveTo(target);
                    if(deplacement == -2){
                        if(creep.attack(wall) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(wall);
                        }
                    }
                }
            }else  if(gg != undefined) {
                if(creep.attack(gg) == ERR_NOT_IN_RANGE) {
                    var deplacement = creep.moveTo(gg);
                    if(deplacement == -2){
                        if(creep.attack(wall) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(wall);
                        }
                    }
                }
            }else if(restant != undefined){
                if(creep.attack(restant) == ERR_NOT_IN_RANGE) {
                    var deplacement = creep.moveTo(restant);
                    if(deplacement == -2){
                        if(creep.attack(wall) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(wall);
                        }
                    }
                }
            }
        }
    }
};