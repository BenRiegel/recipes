//imports ----------------------------------------------------------------------

//import '../stylesheets/root.scss';


//module code block ------------------------------------------------------------

var tags;

var node = document.getElementById('tags-container');


//exports ----------------------------------------------------------------------

export default {

  node,

  addTags: function(tagsList){
    var htmlStr = '';
    for (let i = 0; i < tagsList.length; i++){
      htmlStr +=
      `<div class='checkbox-item'>
         <input type='checkbox' class='checkbox' id='tag${i}' name='${tagsList[i].id}'>
         <label for='tag1'>${tagsList[i].id}</label><br>
      </div>`
    }
    this.node.innerHTML = htmlStr;
  },

  getCheckedTags: function(){
    var checkedTags = [];
    var tagNodes = this.node.getElementsByClassName('checkbox');
    for (var i = 0; i < tagNodes.length; i++){
      if (tagNodes[i].checked){
        checkedTags.push(tagNodes[i].name);
      }
    }
    return checkedTags;
  },

  getValue: function(){
    return this.node.value;
  },

};
