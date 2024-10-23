const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/soma/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.json({ resultado: parseInt(a) + parseInt(b) });
  // res.send(`A soma de ${a} + ${b} é ${parseInt(a) + parseInt(b)}`);
});

app.get('/subtracao/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.json({ resultado: parseInt(a) - parseInt(b) });
  // res.send(`A subtração de ${a} - ${b} é ${parseInt(a) - parseInt(b)}`);
});

app.get('/multiplicacao/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.json({ resultado: parseInt(a) * parseInt(b) });
  // res.send(`A multiplicação de ${a} * ${b} é ${parseInt(a) * parseInt(b)}`);
});

app.get('/divisao/:a/:b', (req, res) => {
  const { a, b } = req.params;
  res.json({ resultado: parseInt(a) / parseInt(b) });
  // res.send(`A divisão de ${a} / ${b} é ${parseInt(a) / parseInt(b)}`);
});

app.listen(port, () => {
  let date = new Date();
  console.log(`Inicio do servidor, ${date} exemplo app listen ${port}`);
});
