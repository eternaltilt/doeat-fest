const router = require('express').Router();
const { RestaurantManager } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    try{
      const {
      name,
      phone,
      email,
      restaurantName, 
      festivalId,
    } = req.body;
    const newRequest = await RestaurantManager.create({
      name: name,
      phone_number: phone,
      email: email,
      restaurant_name: restaurantName,
      festival_id: festivalId,
    })
    res.json({ newRequest })
  } catch(error) {
    console.log(error.message)
  }
  })
module.exports = router;
