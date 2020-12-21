const express = require('express')
var path = require('path');
const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/',function(req,res){      
  res.sendFile(path.join(__dirname,'./views/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
