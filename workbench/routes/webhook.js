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

router.post('/', async (req, res) => {
  try {

//    console.log('POST: ' + req.originalUrl);
//    console.log(req.body);

    var formId = req.body.request.form;
    var data = req.body.request.data;
    var metadata = await getMetadata(formId);

    await FormDataSchema.create(
      new FormDataSchema({
        form: formId,
        title: metadata.title,
        timestamp: Date.now(),
        data: JSON.stringify(data),
        metadata: JSON.stringify(metadata),
      })
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
    console.log(formApiUrl);
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