//imports ----------------------------------------------------------------------

import * as viewController from './subcontrollers/ViewController.js';
//import * as modelController from './subcontrollers/ModelController.js';

//module code block ------------------------------------------------------------

/*
viewController.addListener('search', async (criteria) => {
  viewController.disableSearch();
  await modelController.getRecipes(criteria);
  viewController.enableSearch();
});

*/


//exports ----------------------------------------------------------------------

export async function initApp(){
  await viewController.loadMenuOptions();
}
