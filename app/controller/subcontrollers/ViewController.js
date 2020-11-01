//imports ----------------------------------------------------------------------

import { getFromServer } from '../../utils/Utils.js';
import view from '../../view/View.js';


//module code block ------------------------------------------------------------

var loadSecondaryMenu = async function(primaryValue){
  view.nodes.secondarySelect.removeOptions();
  var secondaryOpts = await getFromServer('get_secondary', {primaryValue} );
  view.nodes.secondarySelect.addOptions(secondaryOpts.options);
}

//probably need an emitter here
view.nodes.searchButton.addClickListener( () => {
  var primaryValue = view.nodes.primarySelect.getValue();
  var secondaryValue = view.nodes.secondarySelect.getValue();
  var searchValue = view.nodes.ingredient.getValue();
  var checkedTags = view.nodes.tagsContainer.getCheckedTags();
  console.log(primaryValue);
  console.log(secondaryValue);
  console.log(searchValue);
  console.log(checkedTags);
});

view.nodes.primarySelect.addChangeListener(loadSecondaryMenu);


//exports ----------------------------------------------------------------------

export function loadMenuOptions(){
  var primaryOptsProm = getFromServer('get_primary');
  var tagsProm = getFromServer('get_tags');
  return Promise.all([primaryOptsProm, tagsProm]).then((values) => {
    var [primaryOptsData, tagsData] = values;
    view.nodes.primarySelect.addOptions(primaryOptsData.options);
    view.nodes.tagsContainer.addTags(tagsData.tags);
  });
}
