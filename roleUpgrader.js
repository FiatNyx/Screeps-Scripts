

module.exports = {
    work: function(creep,colony){
    
        if(creep.room.name == colony){
          
            var source = "none";
            
            if (colony == 'W14N9'){
                source =  Game.getObjectById("5bbcac199099fc012e634ec2");
            }else if(colony == 'W15N9'){
                source = Game.getObjectById('5bbcac0c9099fc012e634c8e');
                
                if (source.energy == 0){
                    source = Game.getObjectById('5bbcac0c9099fc012e634c8d');
                }
                
            }else if(colony == 'W15N8'){
                source = Game.getObjectById('5bbcac0c9099fc012e634c91');
            }else if(colony == 'W15N7'){
                source = Game.getObjectById('5bbcac0c9099fc012e634c93')
            }else if(colony == 'W14N7'){
               
                source = Game.getObjectById('5bbcac1a9099fc012e634ec9')
            }
            
            if (creep.memory.working == true){
               if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()){
                   creep.memory.working = false;
                }
                
                else{
            
                     if(creep.harvest(source) == ERR_NOT_IN_RANGE ){
                         creep.moveTo(source,{reusePath : 10});
                     }
                }
               
               
           }
               
            else{
                if (creep.store[RESOURCE_ENERGY] == 0){
                    creep.memory.working = true;
                }
                
                else{
                    var ChoseAUpgrade = creep.room.controller;
                    
                    
                if(creep.upgradeController(ChoseAUpgrade) == ERR_NOT_IN_RANGE){
                        creep.moveTo(ChoseAUpgrade,{reusePath : 10});
                    }
               }
            }
        }else{
            
            creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(colony)),{reusePath : 10});
        }       
    }
};