//imports ----------------------------------------------------------------------

//import '../stylesheets/root.scss';


//module code block ------------------------------------------------------------

var node = document.getElementById('search-button');


//exports ----------------------------------------------------------------------

export default {

  node,

  addClickListener: function(listener){
    this.node.addEventListener('click', evt => {
      listener();
    });
  },

};
