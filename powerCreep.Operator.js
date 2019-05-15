/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('powerCreep.Operator');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
run: function() {
   if( Game.powerCreeps['Cloche_A_Gateau'].ticksToLive > 100){
       

    Game.powerCreeps['Cloche_A_Gateau'].moveTo(Game.getObjectById("5c2697e6b4eebe1850f28f77"));
    if(Game.powerCreeps['Cloche_A_Gateau'].pos.x - Game.getObjectById("5c2697e6b4eebe1850f28f77").pos.x <= 1 && Game.powerCreeps['Cloche_A_Gateau'].pos.x - Game.getObjectById("5c2697e6b4eebe1850f28f77").pos.x >= -1){
       if(Game.powerCreeps['Cloche_A_Gateau'].usePower(PWR_OPERATE_EXTENSION, Game.getObjectById("5c2697e6b4eebe1850f28f77")) == ERR_INVALID_TARGET){
           Game.powerCreeps['Cloche_A_Gateau'].say("Hi", true);
      }
    
       if(Game.powerCreeps['Cloche_A_Gateau'].usePower(PWR_GENERATE_OPS) == ERR_TIRED){
           
       }
    }
  }else if(Game.powerCreeps['Cloche_A_Gateau'].ticksToLive <= 100){
       Game.powerCreeps['Cloche_A_Gateau'].moveTo(Game.getObjectById("5c91a78fcd69243ec33f0a93"));
        if(Game.powerCreeps['Cloche_A_Gateau'].pos.x - Game.getObjectById("5c91a78fcd69243ec33f0a93").pos.x <= 1 && Game.powerCreeps['Cloche_A_Gateau'].pos.x - Game.getObjectById("5c91a78fcd69243ec33f0a93").pos.x >= -1){
            if(Game.powerCreeps['Cloche_A_Gateau'].pos.y - Game.getObjectById("5c91a78fcd69243ec33f0a93").pos.y <= 1 && Game.powerCreeps['Cloche_A_Gateau'].pos.y - Game.getObjectById("5c91a78fcd69243ec33f0a93").pos.y >= -1){
                Game.powerCreeps['Cloche_A_Gateau'].renew(Game.getObjectById("5c91a78fcd69243ec33f0a93"));
            }
        }
  }
       
       
   }
}