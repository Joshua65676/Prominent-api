const express = require('express')
const app = express()
const PORT = 5000

const prominent ={
     'okoro': {
     'age': 20,
     'birthName': 'Okoro Joshua Osinachi',
     'birthLocation': 'Ondo Akure'
   },
    'joshua': {
     'age': 20,
     'birthName': 'Okoro Joshua Osinachi',
     'birthLocation': 'Ondo Akure'
   },
   'unknown':{
     'age': 0,
     'birthName':'unknown',
     'birthLocation':'unknown'
   }
}
app.get('/', (req, res)=>{
     res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req,res)=>{
     const prominentName = req.params.name.toLowerCase()
     if( prominent[prominentName] ){
          res.json(prominent[prominentName])
     }else{
          res.json(prominent['unknown'])
     }
})

app.listen(PORT, ()=>{
     console.log(`the server is now running on port ${PORT}! betta go catch it`);
})