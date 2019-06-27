const path = require('path');
const express = require('express');
const app = express();

//server por
app.set('port',process.env.PORT||8000);

//folder
app.use(express.static(path.join(__dirname,'public')));

//punlic folder set
const server = app.listen(app.get('port'),()=>{

    console.log('server on port', app.get('port'));

});

//root route
app.get('/',(req,res,error)=>{

    //we open the index file
    res.redirect('index.html');
  
});

