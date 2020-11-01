//imports ----------------------------------------------------------------------

//import '../stylesheets/root.scss';


//module code block ------------------------------------------------------------

var node = document.getElementById('secondary-select');


//exports ----------------------------------------------------------------------

export default {

  node,

  addOptions: function(options){
    for (let i = 0; i < options.length; i++){
      var option = document.createElement('option');
      option.text = options[i].id;
      this.node.add(option);
    }
  },

  removeOptions: function(){
    var numOptions = this.node.options.length;
    for (var i = 1; i < numOptions; i++){
      this.node.remove(1);
    }
  },

  getValue: function(){
    return this.node.value;
  },

};
