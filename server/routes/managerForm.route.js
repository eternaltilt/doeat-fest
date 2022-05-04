const router = require('express').Router();
const { restaurantManager } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const {
      name,
      phone,
      email,
      restaurantName, 
      festivalId,
    } = req.body;
    const newRequest = await restaurantManager.create({
      name: name,
      phone_number: phone,
      email: email,
      restaurant_name: restaurantName,
      festival_ide: festivalId,
    })
  })
module.exports = router;
