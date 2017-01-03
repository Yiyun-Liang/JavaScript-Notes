var express = require('express')

var app = express()

// default is index.html in public folder
app.use(express.static('public'))

app.listen(3000, function(){
  console.log('Express server is up on port 3000')
})
