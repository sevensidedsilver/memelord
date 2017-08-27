var app = require('../index.js')

module.exports= {

// just a test endpoint
  testPoint : function(req, res){
    console.log('testPoint hit')

    res.status(200).send(req)
  },







}
