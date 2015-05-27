;'use strict';

var Undead = (function() {

  return {

    getThisObject: function() {
      // Store 
      var self = this;
      console.log("this is an Undead object:");
      console.log(this);

      var internal_function = function(){
        // 'this' refers to Window
        console.log("this is Window object:");
        console.log(this);

        // Assigning 'this' to 'self' will refer to the scoped variable 'this'
        console.log("this is an Undead object:");
        console.log(self);
      }
      internal_function();
    }

  };

}());

Undead.getThisObject();