
module.exports = {
    work: function(creep, destRoom, homeRoom){
        
        
        if(creep.room.name == homeRoom){
            creep.moveTo(creep.pos.findClosestByPath(creep.room.findExitTo(destRoom)));
           
        }
        else if(creep.room.name == destRoom){
            if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller);
             }
        }else{
            creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(destRoom)));
        }
        
    }
};