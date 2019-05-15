/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.attacker');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
 run: function(creep) {
          var exit = creep.room.findExitTo("E41N47");
                // move to exit
        creep.moveTo(creep.pos.findClosestByPath(exit));
       
        if(creep.room.name != "E41N47"){
            
        }else{
                       var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
           var targetStructure = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TOWER});
           var wall = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_WALL});
            var gg = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_SPAWN})
      
             if (targetStructure != undefined){
                if(creep.attack(targetStructure) == ERR_NOT_IN_RANGE){
                    var deplacement = creep.moveTo(targetStructure);
                    if(deplacement == -2){
                        if(creep.attack(wall) == ERR_NOT_IN_RANGE) {
                           creep.moveTo(wall);
                    }
                  
                }
                  creep.say("Annihilate", true);
            } 
            
     } else  if(target != undefined) {
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
        }else {
            creep.moveTo(34,28);
        }
        
     
 }}
        
        

};