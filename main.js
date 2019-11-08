var roleHarvester = require('roleHarvester');
var roleUpgrader = require('roleUpgrader');
var roleBuilder = require('roleBuilder');
var roleClaimer = require('roleClaimer');
var roleTurret = require('roleTurret');
var roleAttacker = require('roleAttacker');


module.exports.loop = function () {

 if (Memory.AttackerName > 50){
      Memory.AttackerName = 0
 }
if(Memory.BuilderName > 50){
     Memory.BuilderName = 0
}
if(Memory.ClaimerName > 50){

    Memory.ClaimerName = 0
}
 if(Memory.HarvesterName > 50){
     Memory.HarvesterName = 0
 }
 if(Memory.UpgraderName > 50)
{
 Memory.UpgraderName = 0
    
}

 
 
 roleTurret.work();
 
 for (let name in Memory.creeps){
    var creep = Game.creeps[name];
    
    if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
    }else{
        if(creep.memory.colony == 0){
            colony = 'W14N9';
        }else if(creep.memory.colony == 1){
            colony = 'W15N9';
        }else if(creep.memory.colony == 2){
            colony = 'W15N8';
        }else if(creep.memory.colony == 3){
            colony = 'W15N7'
        }else if(creep.memory.colony == 4){
            colony = 'W14N7'
        }
        
        if (creep.memory.role == 'harvester' ){
            roleHarvester.work(creep,colony);
        }
        else if(creep.memory.role == 'upgrader'){
            roleUpgrader.work(creep,colony);
        }else if(creep.memory.role == 'builder'){
            roleBuilder.work(creep,colony);
        }else if(creep.memory.role == 'claimer'){
            roleClaimer.work(creep,"W14N7","W14N9");
        }else if(creep.memory.role == 'attacker'){
            roleAttacker.work(creep,"W15N6");
        }
    }
 }   
 
 var minNbHarvester = 2;
 var minNbUpgrader = 5;
 var minNbBuilder = 1;
 var minNbClaimer = 0;
 var minNbAttacker = 0;
 
 var spawn1 = Game.spawns.MainSpawn;
 var spawn2 = Game.spawns.MainSpawn2;
 var spawn3 = Game.spawns.MainSpawn3;
 var spawn4 = Game.spawns.MainSpawn4;
 var spawn5 = Game.spawns.MainSpawn45;
 
 var listDeSpawns = [spawn1,spawn2,spawn3,spawn4,spawn5];
 
 var template1 = [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY];
 var template2 = [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY];
 var templateAttacker = [TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE]
 var templateDebut = [WORK,MOVE,MOVE,CARRY,CARRY]
 
 for (i = 0; i < listDeSpawns.length; i++) {
     var nbHarvester = _.sum(Game.creeps, (c) => c.memory.role == 'harvester' && c.memory.colony == i);
     var nbUpgrader = _.sum(Game.creeps, (allo) => allo.memory.role == 'upgrader' && allo.memory.colony == i);
     var nbBuilder = _.sum(Game.creeps, (allo) => allo.memory.role == 'builder' && allo.memory.colony == i);
     var nbClaimer = _.sum(Game.creeps, (allo) => allo.memory.role == 'claimer');
     var nbAttacker = _.sum(Game.creeps, (allo) => allo.memory.role == 'attacker' && allo.memory.colony == i);
     
     console.log(i,nbHarvester,nbUpgrader,nbBuilder,nbClaimer,nbAttacker);
     
     var template = template2;
      
 
    if(listDeSpawns[i] != undefined){
        
        if (i == 0){
            template = template1;
            minNbUpgrader = 2;
            minNbHarvester = 2
        }else if(i == 1){
            template = template2;
            minNbUpgrader = 3;
            minNbHarvester = 2
        }else if(i == 2 || i == 3 || i == 4){
            template = templateDebut;
            minNbUpgrader = 3;
            minNbHarvester = 2
        }
         if(nbHarvester == 0){
            var number = Memory.HarvesterName.toString();
            var colonyName = i.toString();
            var creepName = colonyName+"_Harvester_"+number;
            
            if(listDeSpawns[i].spawnCreep([WORK,WORK,CARRY,MOVE],creepName,{memory:{ role: 'harvester', working: false,colony : i}}) == 0){
                Memory.HarvesterName += 1
            }
            //listDeSpawns[i].createCreep([WORK,WORK,CARRY,MOVE],undefined,{ role: 'harvester', working: false,colony : i});
         }
         else if(nbHarvester < minNbHarvester){
              var number = Memory.HarvesterName
              number = number.toString();
            var colonyName = i.toString();
            var creepName = colonyName+"_Harvester_"+number;
           
            
            if(listDeSpawns[i].spawnCreep(template,creepName,{memory:{ role: 'harvester', working: false,colony : i}}) == 0){
                 Memory.HarvesterName += 1
            }
         }
         else if(nbUpgrader < minNbUpgrader){
            var number = Memory.UpgraderName;
            number = number.toString();
            var colonyName = i.toString();
            var creepName = colonyName+"_Upgrader_"+number;
            
            
             if(listDeSpawns[i].spawnCreep(template,creepName,{memory:{ role: 'upgrader', working: false,colony : i}}) == 0){
                 Memory.UpgraderName += 1
             }
         }
         else if(nbUpgrader == minNbUpgrader && _.sum(Game.creeps, (allo) => allo.memory.role == 'upgrader' && allo.memory.colony == 4) == -1){
              var number = Memory.UpgraderName;
            number = number.toString();
            var colonyName = i.toString();
            var creepName = "4"+"_Upgrader_"+number;
           
            if(listDeSpawns[i].spawnCreep([WORK,WORK,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY],creepName,{memory : { role: 'upgrader', working: false,colony : 4}}) == 0){
                 Memory.UpgraderName += 1
            }
         }
         else if(nbBuilder < minNbBuilder){
             var number = Memory.BuilderName;
            number = number.toString();
            var colonyName = i.toString();
            var creepName = colonyName+"_Builder_"+number;
            
            
           if(listDeSpawns[i].spawnCreep(template,creepName,{memory:{ role: 'builder', working: false, colony : i}}) == 0){
               Memory.BuilderName += 1
            }
         }
         
        else if(nbBuilder == minNbBuilder && _.sum(Game.creeps, (allo) => allo.memory.role == 'builder' && allo.memory.colony == 4) == -1){
            var number = Memory.BuilderName
            number = number.toString();
            var colonyName = i.toString();
            var creepName = "4"+"_Builder_"+number;
            //console.log(listDeSpawns[i].createCreep([WORK,WORK,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY],creepName,{memory:{ role: 'builder', working: false,colony : 2}}))
             if(listDeSpawns[i].spawnCreep(template,creepName,{memory:{ role: 'builder', working: false, colony : 4}}) == 0){
                 Memory.BuilderName += 1
             }
         }
         else if(nbClaimer < minNbClaimer){
              var number = Memory.ClaimerName;
            number = number.toString();
            var colonyName = i.toString();
            var creepName = colonyName+"_Claimer_"+number;
            
             if(listDeSpawns[i].spawnCreep([CLAIM,CLAIM,MOVE,MOVE],creepName,{memory:{ role: 'claimer', colony : i}}) == 0){
                 Memory.ClaimerName += 1
             }
         }else if(nbAttacker < minNbAttacker){
             var number = Memory.AttackerName;
            number = number.toString();
            var colonyName = i.toString();
            var creepName = colonyName+"_Attacker_"+number;
           
            
            if(listDeSpawns[i].spawnCreep(templateAttacker,creepName,{memory:{ role: 'attacker', colony : i}}) == 0){
                Memory.AttackerName += 1 
            }
          
         }
     
    }
  

 }}
 