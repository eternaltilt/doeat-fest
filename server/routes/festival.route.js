const router = require('express').Router();
const { fesival } = require('../db/models');

router.route('/')
 .get(( req,res ) => {
   fesival.findAll()
    .then((allFestivals) => res.json(allFestivals))
    .catch((error) => console.log(error));
 })
module.exports = router;
