// import modules
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleAttacker = require('role.attacker');
var roleClaimer = require('role.claimer');
var turret = require('turret');
var roleLongHarvester = require('role.longHarvester');
var powOperator = require('powerCreep.Operator');
var roleHelper = require('role.helper')
var rolePowerHarvesterAttack = require('role.powerHarvesterAttack');
var rolePowerHarvesterDefense = require('role.powerHarvesterDefense');
module.exports.loop = function () {
    // check for memory entries of died creeps by iterating over Memory.creeps
    for (let name in Memory.creeps) {
        // and checking if the creep is still alive
        if (Game.creeps[name] == undefined) {
            // if not, delete the memory entry
            delete Memory.creeps[name];
        }
    }

    // for every creep name in Game.creeps
    for (let name in Game.creeps) {
        // get the creep object
        var creep = Game.creeps[name];

        // if creep is harvester, call harvester script
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        // if creep is upgrader, call upgrader script
        else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        // if creep is builder, call builder script
        else if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        else if (creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }else if(creep.memory.role == 'attacker'){
            roleAttacker.run(creep);
        }else if(creep.memory.role == 'claimer'){
            roleClaimer.run(creep);
        }else if(creep.memory.role == 'longHarvester'){
            roleLongHarvester.run(creep);
        }else if(creep.memory.role == 'helper'){
            roleHelper.run(creep);
        }else if(creep.memory.role == 'powerHarvesterAttack'){
            
            rolePowerHarvesterAttack.run(creep);
        }else if(creep.memory.role == 'powerHarvesterDefense'){
            
            rolePowerHarvesterDefense.run(creep);
        }
        
    }

    // setup some minimum numbers for different roles
    var minimumNumberOfHarvesters = 3;
    var minimumNumberOfUpgraders = 1;
    var minimumNumberOfBuilders = 3;
    var minimumNumberOfRepairers = 3;

    // count the number of creeps alive for each role
    // _.sum will count the number of properties in Game.creeps filtered by the
    //  arrow function, which checks for the creep being a harvester
    var numberOfHarvesters1 = _.sum(Game.creeps, (c) => c.memory.role == 'harvester' && c.memory.home == 1);
     var numberOfHarvesters2 = _.sum(Game.creeps, (c) => c.memory.role == 'harvester' && c.memory.home == 2);
    var numberOfUpgraders1 = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader' && c.memory.home == 1);
     var numberOfUpgraders2 = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader' && c.memory.home == 2);
    var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
    var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
    var numberOfAttackers = _.sum(Game.creeps, (c) => c.memory.role == 'attacker');
    var numberOfClaimers = _.sum(Game.creeps, (c) => c.memory.role == 'claimer');
    var numberOfLongHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'longHarvester');
    var numberOfHelpers = _.sum(Game.creeps, (c) => c.memory.role == 'helper');
    var numberOfPowerHarvestersAttack = _.sum(Game.creeps, (c) => c.memory.role == 'powerHarvesterAttack');
    var numberOfPowerHarvestersDefense = _.sum(Game.creeps, (c) => c.memory.role == 'powerHarvesterDefense');
    //------------------------------------------------------------------------------
    //-------------------------Normal Spawns Room 1---------------------------------
    //------------------------------------------------------------------------------
    if (numberOfHarvesters1 < minimumNumberOfHarvesters)
    {
        // try to spawn one
        name = Game.spawns.OriginalSpawn.createCreep([WORK,WORK, WORK, CARRY,CARRY,CARRY,CARRY,CARRY,MOVE, MOVE, MOVE, MOVE,MOVE], undefined,
            { role: 'harvester', working: false, home: 1});
            
    }
    else if (numberOfUpgraders1 < minimumNumberOfUpgraders)
    {
        // try to spawn one
        name = Game.spawns.OriginalSpawn.createCreep([WORK, WORK, WORK, WORK,CARRY, CARRY, CARRY, CARRY, MOVE,MOVE, MOVE, MOVE], undefined,
            { role: 'upgrader', working: false, home: 1});
           
    }
    else if (numberOfBuilders < minimumNumberOfBuilders)
    {
        // try to spawn one
        name = Game.spawns.OriginalSpawn.createCreep([WORK,WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY,MOVE, MOVE, MOVE, MOVE], undefined,
            { role: 'builder', working: false});
    }
    else if (numberOfLongHarvesters < 1)
    {
          name = Game.spawns.OriginalSpawn.createCreep([WORK,WORK,WORK,WORK, WORK, WORK,WORK,WORK, WORK, CARRY,CARRY,CARRY,CARRY,CARRY,
          CARRY,CARRY,CARRY, CARRY, CARRY, CARRY, CARRY, MOVE,MOVE,MOVE,MOVE, MOVE, MOVE,MOVE,MOVE,MOVE,MOVE,
          MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE, CARRY], undefined,
            { role: 'longHarvester', working: false});
   
    }
    else if (numberOfRepairers < minimumNumberOfRepairers)
    {
        // try to spawn one
        name = Game.spawns.OriginalSpawn.createCreep([WORK,WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], undefined,
            { role: 'repairer', working: false});
    }
    else if (numberOfAttackers < 2)
    {
          name = Game.spawns.OriginalSpawn.createCreep([ ATTACK, ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE], undefined,
            { role: 'attacker', working: false});
    }
    else if (numberOfClaimers < 0)
    {
          name = Game.spawns.OriginalSpawn.createCreep([CLAIM, MOVE, MOVE], undefined, 
            { role: 'claimer', working: false});
    }    
    else if (numberOfHelpers < 1)
    {
          name = Game.spawns.OriginalSpawn.createCreep([WORK,WORK,WORK,WORK, WORK, WORK,WORK,WORK, WORK, CARRY,CARRY,CARRY,CARRY,CARRY,
          CARRY,CARRY,CARRY, CARRY, CARRY, CARRY, CARRY, MOVE,MOVE,MOVE,MOVE, MOVE, MOVE,MOVE,MOVE,MOVE,MOVE,
          MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE, CARRY], undefined,
            { role: 'helper', working: false});
   
    }  
    else if (numberOfPowerHarvestersAttack < 0)
    {
          name = Game.spawns.AlternativeSpawn1.createCreep([ATTACK,ATTACK,ATTACK,ATTACK, ATTACK, ATTACK,ATTACK,ATTACK, ATTACK, ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,
          ATTACK,ATTACK,ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK,ATTACK,ATTACK,ATTACK, MOVE, MOVE,MOVE,MOVE,MOVE,MOVE,
          MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE, CARRY], undefined,
            { role: 'powerHarvesterAttack', working: false, checkPoint: false});
   
    }
    else if (numberOfPowerHarvestersDefense < 0)
    {
          name = Game.spawns.AlternativeSpawn2.createCreep([HEAL,HEAL,HEAL,HEAL, HEAL, HEAL,HEAL,HEAL, HEAL, HEAL,HEAL,HEAL,HEAL,HEAL,
          HEAL,HEAL,HEAL, HEAL, HEAL, HEAL, HEAL, HEAL,HEAL,HEAL,HEAL, HEAL, HEAL,HEAL,HEAL,HEAL,MOVE,
          MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE, CARRY], undefined,
            { role: 'powerHarvesterDefense', working: false, checkPoint: false});   
   
    }


    //------------------------------------------------------------------------------
    //-------------------------Normal Spawns Room 2---------------------------------
    //------------------------------------------------------------------------------
    if (numberOfHarvesters2 < 5)
    {
           name = Game.spawns.SpawnNord.createCreep([WORK,CARRY,CARRY, MOVE, MOVE], undefined,
            { role: 'harvester', working: false, home: 2});
    }
    else if (numberOfUpgraders2 < minimumNumberOfUpgraders)
    {
            name = Game.spawns.SpawnNord.createCreep([WORK,CARRY,CARRY, MOVE, MOVE], undefined,
              { role: 'upgrader', working: false, home: 2});
    }
    

    //------------------------------------------------------------------------------
    //-------------------------Power Creep Spawning---------------------------------
    //------------------------------------------------------------------------------
    
    if(Game.powerCreeps['Cloche_A_Gateau'].ticksToLive <= 0 || Game.powerCreeps['Cloche_A_Gateau'].ticksToLive == undefined){
        if(!(Game.powerCreeps['Cloche_A_Gateau'].spawnCooldownTime > Date.now)){
            Game.powerCreeps['Cloche_A_Gateau'].spawn(Game.getObjectById('5c91a78fcd69243ec33f0a93'));
        }
    }
    powOperator.run();
    turret.run();
};