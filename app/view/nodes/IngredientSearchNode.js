//imports ----------------------------------------------------------------------

//import '../stylesheets/root.scss';


//module code block ------------------------------------------------------------

var node = document.getElementById('ingredient-search');


//exports ----------------------------------------------------------------------

export default {

  node,

  getValue: function(){
    return this.node.value;
  },

};
