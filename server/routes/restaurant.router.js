const router = require("express").Router();
const { RestaurantCard } = require("../db/models");


router
.get(('/'), async (req, res) => {
  const restaurant = await RestaurantCard.findAll();
  return res.json( restaurant );
})

module.exports = router;
