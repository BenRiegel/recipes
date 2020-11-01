



//exports ----------------------------------------------------------------------



export function getFromServer(route, postData){

  var configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(postData),
  };

  return new Promise(async resolve => {
    var response = await fetch(`http://localhost:8081/${route}`, configObj);
    var responseData = await response.json();
    resolve(responseData);
  });
}
