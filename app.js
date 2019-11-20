'use strict';
const express = require('express');
const app = express();
const port = 3000;
const username = 'foo';
const password = 'bar';
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser());
//app.use(session());

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/setCookie/:clr', (req, res) => {
  res.cookie('color', req.params).send('cookie set');
});

app.get('/deleteCookie/', (req, res) => {
  res.clearCookie('color').send('cookie cleared');
});

app.get('/form', (req, res) => {
  res.render('form')
});

app.get('/secret', (req, res) => {
  res.render('secret')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
