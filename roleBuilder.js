
module.exports = {
    work: function(creep,colony){

        if(creep.room.name == colony){
            
            var source = "none";
            if (colony == 'W14N9'){
                source =  Game.getObjectById("5bbcac199099fc012e634ec0");
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
                source = Game.getObjectById('5bbcac1a9099fc012e634ec7')
            }
             if (creep.memory.working == true){
               if (creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()){
                   creep.memory.working = false;
                }
                
                else{
                    
                     if(creep.harvest(source) == ERR_NOT_IN_RANGE ){
                        creep.moveTo(source);
                     }
                }
               
               
           }
               
            else{
                if (creep.store[RESOURCE_ENERGY] == 0){
                    creep.memory.working = true;
                }
                
                else{
                   var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
                   
                    if (constructionSite != undefined){
                        if(creep.build(constructionSite) == ERR_NOT_IN_RANGE){
                        creep.moveTo(constructionSite);
                        }
                    }else{
                        if(colony == 'W15N7'){
                          creep.moveTo(Game.flags.BuilderCorner,{reusePath : 10});
                        }
                        
                        constructionSite = creep.pos.findClosestByRange(FIND_STRUCTURES, { filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART});
                        if(constructionSite == undefined){
                            constructionSite = creep.pos.findClosestByRange(FIND_STRUCTURES, { filter: (s) => s.hits < 1000 && s.structureType == STRUCTURE_WALL});
                        }
                        if(creep.repair(constructionSite) == ERR_NOT_IN_RANGE){
                            creep.moveTo(constructionSite);
                        }
                    }
                    
                    
               }
            }
     
        }else{
           creep.moveTo(creep.pos.findClosestByRange(creep.room.findExitTo(colony)),{reusePath : 10});
        }
        
        
             
    }
};