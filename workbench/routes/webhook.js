var express = require('express');
var router = express.Router();

var basicAuth = require('basic-auth');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

const http = require('http');

const FormDataSchema = require('../models/formdata');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(methodOverride('X-HTTP-Method-Override'));
router.use((req, res, next) => {
  const credentials = basicAuth(req);
  if (!credentials || credentials.name !== process.env.BASIC_AUTH_USER || credentials.pass !== process.env.BASIC_AUTH_PWD) {
    return res.status(401).json('Access denied');
  }
  next();
});

router.put('/', async (req, res) => {
  try {

//    console.log('PUT: ' + req.originalUrl);
//    console.log(req.body);

    var data = req.body;
    var metadata = await getMetadata(data.submission.form);

    await FormDataSchema.findByIdAndUpdate(
      data.submission._id, 
      new FormDataSchema({
        _id: data.submission._id,
        form: data.submission.form,
        title: metadata.title,
        created: data.submission.created,
        modified: data.submission.modified,
        data: JSON.stringify(data),
        metadata: JSON.stringify(metadata),
      }),
      { upsert: true, useFindAndModify: false }
    ).then((formdata)=>{
      res.status(200).send();
    }).catch((error)=>{
      console.error(error);
      res.status(500).send(error);
    });

  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }

});

router.post('/', async (req, res) => {
  try {

//    console.log('POST: ' + req.originalUrl);
//    console.log(req.body);
    
    var data = req.body;
    var metadata = await getMetadata(data.submission.form);

    await FormDataSchema.findByIdAndUpdate(
      data.submission._id, 
      new FormDataSchema({
        _id: data.submission._id,
        form: data.submission.form,
        title: metadata.title,
        created: data.submission.created,
        modified: data.submission.modified,
        data: JSON.stringify(data),
        metadata: JSON.stringify(metadata),
      }),
      { upsert: true, useFindAndModify: false }
    ).then((formdata)=>{
      res.status(200).send();
    }).catch((error)=>{
      console.error(error);
      res.status(500).send(error);
    });

  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }

});

router.delete('/', async (req, res) => {
  try {

//    console.log('DELETE: ' + req.originalUrl);
//    console.log(req.body);
    
    var submissionId = req.query.submissionId;
    await FormDataSchema.deleteOne(
      { _id: submissionId }
    ).then((formdata)=>{
      res.status(200).send();
    }).catch((error)=>{
      console.error(error);
      res.status(500).send(error);
    });
  
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }

});

async function getMetadata(formId) {
  var formApiUrl = process.env.FORM_API_URL + formId;
  
  return new Promise((resolve, reject) => {
  
    http.get(formApiUrl, (resp) => {
      let metadata = '';
    
      resp.on('data', (chunk) => {
        metadata += chunk;
      });
    
      resp.on('end', () => {
        resolve(JSON.parse(metadata));
      });
  
    }).on('error', (err) => {
      var msg = 'ERROR: ' + err.message;
      console.error(msg);
      result = { "title": msg };
      reject(JSON.parse(result));
    });
  });

}

module.exports = router;