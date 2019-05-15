/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.powerHarvesterAttack');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
 run: function(creep) {
     
     var roomDepart = 'E41N47';
     var roomTransit = 'E41N50';
     var roomFinal = 'E40N55';
//     creep.say("Yopo");
    if(creep.room.name == roomDepart){
        creep.memory.checkPoint = false;
        if( creep.memory.working == false){
             var exit = creep.room.findExitTo(roomTransit);
        creep.moveTo(creep.pos.findClosestByPath(exit));
        }
    }else if(creep.room.name == roomTransit){
        creep.memory.checkPoint = true;
        
        if(creep.memory.working == true){
            
              var exit = creep.room.findExitTo(roomDepart);
        creep.moveTo(creep.pos.findClosestByPath(exit));
            
        }else if(creep.memory.working == false){
            
              var exit = creep.room.findExitTo(roomFinal);
        creep.moveTo(creep.pos.findClosestByPath(exit));
            
        }
    }else if(creep.room.name == roomFinal){      
        
        if(creep.memory.working == false){
                   if(creep.hits < creep.hitsMax / 1.5){
               creep.heal(creep);
           }else{
                  if(creep.heal(Game.getObjectById("5cd856e5c689c476562336e6")) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.getObjectById("5cd856e5c689c476562336e6"));
          }
           }
        }
    
    if(creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
            creep.memory.working = true;
            creep.memory.checkPoint = false;
        } 
     if(creep.memory.working == true){
           var exit = creep.room.findExitTo("E41N50");
        creep.moveTo(creep.pos.findClosestByPath(exit));
     }
   
   
    }else{
        
        if(creep.memory.working == false){
            if(creep.memory.checkPoint == true){
                  var exit = creep.room.findExitTo(roomFinal);
                  creep.moveTo(creep.pos.findClosestByPath(exit));
            }else{
                
              var exit = creep.room.findExitTo(roomTransit);
              creep.moveTo(creep.pos.findClosestByPath(exit));
            }
        }
        else if(creep.memory.working == true){
            if(creep.memory.checkPoint == true){
                  var exit = creep.room.findExitTo(roomDepart);
                  creep.moveTo(creep.pos.findClosestByPath(exit));
            }else{
                
              var exit = creep.room.findExitTo(roomTransit);
              creep.moveTo(creep.pos.findClosestByPath(exit));
            }
        }
    }
     
 }
};


     