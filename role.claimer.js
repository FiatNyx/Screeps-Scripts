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
          var exit = creep.room.findExitTo("E41N48");
                // move to exit
        creep.moveTo(creep.pos.findClosestByRange(exit));
       
        if(creep.room.name != "E41N48"){
            
        }else{
             if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller);
             }
     
 }
     
 }
        
        

};