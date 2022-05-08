const router = require('express').Router();
const fileMiddleware = require('../middleware/uploadMiddleware');
const { RestaurantCard } = require('../db/models');

router.post('/', fileMiddleware.single('avatar'), (req, res) => {
  try {
    if(req.file) {
      
      res.send('ok')
    }
  } catch (error) {
    
  }
});

module.exports = router;
