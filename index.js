const express = require('express');
const app = express();
const port = 3000;
const engine = require('ejs')

app.engine('html', engine.__express);
app.set('view engine', 'html');
app.get('/', (req, res) => {
  res.render('index', { title: 'Nitria' });
});
app.get('/search', (req, res) => {
  res.render('search');
})
app.listen(port, () => {
  console.log('Server started on port ' + port);
});

app.use(express.static('views/src'));

app.post('/display-input', (req, res) => {
  const input = req.body.hello;
  res.render('input', { input });
});
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/input', (req, res) => {
  res.render('input');
});