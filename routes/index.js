var express = require('express');
var router = express.Router();
var data = require('../db/data')

/* GET home page. */
router.get('/', function(req, res, next) {
  var language = 'es'
  var translate = data
  res.render('index', { title: 'Express', language, translate });
});

router.get('/:lang', function(req, res, next) {
  var language = req.params.lang
  var translate = data
  console.log(language)
  res.render('index', { 
    title: 'Express',
    language,
    translate
     });
});

router.get('/:lang/curso', function (req, res){
  var language = req.params.lang
  var translate = data
  res.render('curso', {
    title: 'Express',
    language,
    translate
  })
})

module.exports = router;
