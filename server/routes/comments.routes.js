const router = require('express').Router();
const { RestaurantComments } = require('../db/models');

router
  .get('/', async (req, res) => {
    const comments = await RestaurantComments.findAll();
    console.log('COMMS ', comments);
    res.json(comments);
  })
  .post('/', async (req, res) => {
    const {
      username,
      text,
      restaurantCard_id,
    } = req.body;
    const newComment = await RestaurantComments.create({
      username,
      text,
      restaurantCard_id,
      status: false,
    })
    res.json(newComment);
  });

module.exports = router;
