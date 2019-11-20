'use strict';
const express = require('express');
const app = express();
const port = 3000;
const username = 'foo';
const password = 'bar';
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/setCookie/:clr', (req, res) => {
  res.cookie('color', {path: '/'}).send('cookie set');
});

app.get('/deleteCookie/', (req, res) => {
  res.clearCookie('color').send('cookie cleared');
});

app.get('/form', (req, res) => {
  res.render('./views/form.pug')
});

app.get('/secret', (req, res) => {
  res.render('./views/secret.pug')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
