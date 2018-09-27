const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.post('/singup', (req, res)=>{
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, ()=>{
  console.log(`Server is up and running on port: ${PORT}`);
});