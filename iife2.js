var myApp = (function() {

  return {

    details: {
      'name':     'My APP',
      'version':  'v1.0'
    },

    getDetails: function() {
      console.log(this.details.name);
    }

  };

}());

myApp.getDetails();
