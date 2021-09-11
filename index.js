const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static("public"));

const bandeiras = [
  {
     name: "Bélgica",
     id: 1
  },
  { 
    name: "Alemanha",
    id: 2
  },
  
];

app.get('/bandeiras', (req, res) => {
  res.json(bandeiras);

})

app.post('/bandeiras', (req, res) => {
  const bandeira = req.body;

  bandeira.id = bandeiras.length + 1;

  bandeiras.push(bandeira);

  res.json(bandeira);
})

/*
app.put('/bandeiras/bandeiraid', (req, res) => {

  const {name} = req.body; 

  const {pais} = req.body;
  const {bandeiraid} = req.params;

  const bandeira = bandeiras[bandeiraid - 1];
  const newBandeira = {pais};
  bandeiras[bandeiraid - 1] = newBandeira;

  res.json(newBandeira);

  
})*/

app.listen(3000, () => console.log('Server Running'))