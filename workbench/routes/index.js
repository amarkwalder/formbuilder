var express = require('express');
var router = express.Router();

const FormDataSchema = require('../models/formdata');

router.get('/', async (req, res) => {

  try {

        await FormDataSchema.find(
        ).sort(
          { timestamp: -1 }
        ).then((formList)=>{
          res.render('index', { form_list: formList });
        }).catch((err)=>{
          console.error(error);
          res.status(500).send(error);
        });
    
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }

});

module.exports = router;
