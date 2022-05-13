const router = require('express').Router();
const { RestaurantComments } = require('../db/models');

router
  .get('/', async (req, res) => {
    const comments = await RestaurantComments.findAll();
    return res.json(comments);
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
    return res.json(newComment);
  })
  .post('/confirmdecline', async (req, res) => {
    const {
      id,
      isConfirmed,
    } = req.body;
    if (isConfirmed) {
      const currComment = RestaurantComments.update(
        { status: true },
        { where: { id } },
      );
    } else {
      RestaurantComments.destroy({
        where: { id },
      });
    }
  });

module.exports = router;
