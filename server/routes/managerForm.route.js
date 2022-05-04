const router = require('express').Router();
const { restaurantManager } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    try {
      const { name, phone_number, email, restaurant_name, festival_id} = req.body;
      const manager = await restaurantManager.create({
        name, phone_number, email, restaurant_name, festival_id
      })
      res.status(200).json(newUser);
    }
    catch (error) {
      res.status(412).json({ message: 'error' });
    }
  })
module.exports = router;
