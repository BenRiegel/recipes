//imports ----------------------------------------------------------------------

//import '../stylesheets/root.scss';


//module code block ------------------------------------------------------------

var node = document.getElementById('primary-select');


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

  getValue: function(){
    return this.node.value;
  },

  addChangeListener: function(listener){
    this.node.addEventListener('change', async () => {
      await listener(this.node.value);
    });
  },

};
