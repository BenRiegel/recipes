var path = require('path');
var express = require('express');
var app = express();

app.use(express.static('build'));
app.use(express.json());

app.post('/get_primary', function (req, res) {
  var response = { options: [ {id:'Main Course'},
                              {id:'Side Dish'},
                              {id:'Dessert'},
                              {id:'Snack'},
                            ],
                 };
  res.end(JSON.stringify(response));
});

app.post('/get_secondary', function (req, res) {
  var primaryValue = req.body.primaryValue;

  if (primaryValue === 'Main Course'){
    var options = [{id:'Mexican'}, {id:'Asian'}];
  } else {
    var options = [{id:'Pasta'}, {id:'Bread'}];
  }
  res.end(JSON.stringify( {options} ));
});

app.post('/get_tags', function (req, res) {
  var response = { tags: [ {id:'Kids Like'},
                           {id:'Easy'},
                           {id:'Not Tried Yet'},
                         ],
                 };
  res.end(JSON.stringify(response));
});


var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port);
});
