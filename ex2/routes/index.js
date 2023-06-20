var express = require('express');
var router = express.Router();

var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:16016/repairs')
      .then(response => {
          res.render('index', {repairs: response.data})
      })
      .catch(error => {
          res.render('error', {error: error})
      });
});




router.get('/marca/:id', function(req, res, next) {
  axios.get('http://localhost:16016/repairs?marca=' + req.params.id)
      .then(response => {
          res.render('marca', {repairsMarca: response.data})
      }).catch(error => {
          res.render('error', {error: error})
      });
});




router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:16016/repairs/' + req.params.id)
      .then(response => {
          res.render('repair', {repair: response.data})
      }).catch(error => {
          res.render('error', {error: error})
      });
});


module.exports = router;
