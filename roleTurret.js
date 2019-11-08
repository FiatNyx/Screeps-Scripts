/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('turret');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
work : function() {
    var turretRoom = ["W14N9","W15N9"]
    
    for(r = 0; r < turretRoom.length; r++){
        
    
    var turretFalse = Game.rooms[turretRoom[r]].find(FIND_STRUCTURES, { filter: (s) =>  s.structureType == STRUCTURE_TOWER});
  //  var turret = Game.getObjectById ("5da62c034419ff0ac47845e1");
    var hostiles = Game.rooms[turretRoom[r]].find(FIND_HOSTILE_CREEPS);
     
    for (i = 0; i < turretFalse.length; i++) {
        var structuresASoigner = Game.rooms[turretRoom[r]].find(FIND_STRUCTURES, { filter: (s) => (s.hits < 25000 && s.structureType == STRUCTURE_WALL) || (s.hits < s.hitsMax - 1000 && s.structureType == STRUCTURE_ROAD) || (s.hits < 25000 && s.structureType == STRUCTURE_RAMPART)});
        var structureChoisi = structuresASoigner[Math.floor(Math.random()*structuresASoigner.length)];
       
        if(hostiles != 0){
            turretFalse[i].attack(hostiles[0]);
    
        }else if (turretFalse[i].energy > 900){
            turretFalse[i].repair(structureChoisi)
          
        }
     
    }
    }
}
};