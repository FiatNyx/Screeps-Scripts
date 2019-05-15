var roleUpgrader = require('role.upgrader');

module.exports = {
    run: function(creep) {
    if(creep.memory.working == false && creep.carry.energy == creep.carryCapacity){
            creep.memory.working = true;
        } 
        
        if(creep.memory.working == true){
            var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            if(constructionSite != undefined){
            if(creep.build(constructionSite) == ERR_NOT_IN_RANGE){
                creep.moveTo(constructionSite);
            } else if(creep.carry.energy < 1){
                creep.memory.working = false;
            }
        } else{
            roleUpgrader.run(creep);
        }
    }
        else{
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE ){
                creep.moveTo(source);
            }else if (creep.carry.energy < creep.carryCapacity) {
                creep.memory.working = false;
            }
        }
}};