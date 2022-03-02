const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { title: 'Home'});
});

router.get('/projects', function (req, res) {
  res.render('projects', { title: "Projects" });
});

router.get('/about', function (req, res) {
  res.render('about', { title: 'About' });
});

router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact Info' })
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'Login' });
});

router.get('/signup', function(req, res) {
  res.render('signup', { title: 'Singup' });
});

module.exports = router;
