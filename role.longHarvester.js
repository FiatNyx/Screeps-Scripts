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
     
           if(creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
            creep.memory.working = true;
             } 
             
        if(creep.room.name == "E41N47"){
            if(creep.memory.working == false){
                 var exit = creep.room.findExitTo("E42N47");
                creep.moveTo(creep.pos.findClosestByRange(exit)); 
            }else{
            var structure = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {filter: (s) => s.energy < s.energyCapacity});
                 if(structure != undefined){
           
      
            if(creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(structure);
            }
            
            if(creep.carry.energy < 1){
                creep.memory.working = false;
            }
                 }
            }
            
       
        }else if(creep.room.name == "E42N47"){
          
            if(creep.memory.working == false){
           
             var source = Game.getObjectById("5bbcaf6b9099fc012e63a942");
             if(creep.harvest(source) == ERR_NOT_IN_RANGE){
                creep.moveTo(source);
                 }
            }else{
              
                  var exit = creep.room.findExitTo("E41N47");
             creep.moveTo(creep.pos.findClosestByRange(exit)); 
            
            if(creep.carry.energy < 1){
                creep.memory.working = false;
            }
        }
    }else{
    }
            
 }
        
        

};