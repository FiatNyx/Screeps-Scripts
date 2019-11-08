module.exports = {
work: function() {
    
    if (Game.powerCreeps['Cloche_A_Gateau'].enableRoom(Game.powerCreeps['Cloche_A_Gateau'].room.controller) == ERR_NOT_IN_RANGE){
        Game.powerCreeps['Cloche_A_Gateau'].moveTo(Game.powerCreeps['Cloche_A_Gateau'].room.controller)
    }
    
  /* if( Game.powerCreeps['Cloche_A_Gateau'].ticksToLive > 100){
       

    Game.powerCreeps['Cloche_A_Gateau'].moveTo(Game.getObjectById("5da6ebe3afdbea7a82598e1d"));
    if(Game.powerCreeps['Cloche_A_Gateau'].pos.x - Game.getObjectById("5da6ebe3afdbea7a82598e1d").pos.x <= 1 && Game.powerCreeps['Cloche_A_Gateau'].pos.x - Game.getObjectById("5da6ebe3afdbea7a82598e1d").pos.x >= -1){
       if(Game.powerCreeps['Cloche_A_Gateau'].usePower(PWR_OPERATE_EXTENSION, Game.getObjectById("5da6ebe3afdbea7a82598e1d")) == ERR_INVALID_TARGET){
           Game.powerCreeps['Cloche_A_Gateau'].say("Hi", true);
      }
    
       if(Game.powerCreeps['Cloche_A_Gateau'].usePower(PWR_GENERATE_OPS) == ERR_TIRED){
           
       }
    }
  }else if(Game.powerCreeps['Cloche_A_Gateau'].ticksToLive <= 100){
       Game.powerCreeps['Cloche_A_Gateau'].moveTo(Game.getObjectById("5da4dd69ead8df433cb2aa1d"));
        if(Game.powerCreeps['Cloche_A_Gateau'].pos.x - Game.getObjectById("5da4dd69ead8df433cb2aa1d").pos.x <= 1 && Game.powerCreeps['Cloche_A_Gateau'].pos.x - Game.getObjectById("5da4dd69ead8df433cb2aa1d").pos.x >= -1){
            if(Game.powerCreeps['Cloche_A_Gateau'].pos.y - Game.getObjectById("5da4dd69ead8df433cb2aa1d").pos.y <= 1 && Game.powerCreeps['Cloche_A_Gateau'].pos.y - Game.getObjectById("5da4dd69ead8df433cb2aa1d").pos.y >= -1){
                Game.powerCreeps['Cloche_A_Gateau'].renew(Game.getObjectById("5da4dd69ead8df433cb2aa1d"));
            }
        }
  }
       
       */
   }
}