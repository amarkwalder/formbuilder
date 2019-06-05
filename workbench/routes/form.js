var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

const FormDataSchema = require('../models/formdata');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(methodOverride('X-HTTP-Method-Override'));

router.get('/', async (req, res) => {

  try {

//    console.log('GET: ' + req.originalUrl);
//    console.log(result);
      
    await FormDataSchema.find(
    ).then((formdata)=>{
      res.status(200).send(formdata);
    }).catch((error)=>{
      console.error(error);
      res.status(500).send(error);
    });

  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }

});

router.get('/:id', async (req, res) => {

  try {

//    console.log('GET: ' + req.originalUrl);
//    console.log(result);
    
    await FormDataSchema.findById(
      req.params.id
    ).then((formdata)=>{
      res.status(200).send(formdata);
    }).catch((error)=>{
      console.error(error);
      res.status(500).send(error);
    });

  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }

});

router.get('/data/:id', async (req, res) => {

  try {

//    console.log('GET: ' + req.originalUrl);
//    console.log(result);
    
    await FormDataSchema.findById(
      req.params.id
    ).then((formdata)=>{
      res.status(200).send(JSON.parse(formdata.data));
    }).catch((error)=>{
      console.error(error);
      res.status(500).send(error);
    });

  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }

});

router.get('/metadata/:id', async (req, res) => {

  try {

//    console.log('GET: ' + req.originalUrl);
//    console.log(result);
    
    await FormDataSchema.findById(
      req.params.id
    ).then((formdata)=>{
      res.status(200).send(JSON.parse(formdata.metadata));
    }).catch((error)=>{
      console.error(error);
      res.status(500).send(error);
    });

  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }

});

module.exports = router;
