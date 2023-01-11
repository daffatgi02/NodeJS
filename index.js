const express = require('express');
var cors = require('cors');
const app = express();
const port = 82;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sensor3', (req, res) => {
  res.send({sensor3: 1000});
});
//
app.listen(port, ()=>{
  console.log('\x1b[33m Welcome to the app! \x1b[0m');
  console.log('\x1b[36m%s\x1b[0m', 'Started on http://localhost:82')
});
