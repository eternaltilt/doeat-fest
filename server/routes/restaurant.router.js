const router = require("express").Router();
const { RestaurantCard } = require("../db/models");


router.route("/")
.get(async (req, res) => {
  console.log('123')
  const restaurant = await RestaurantCard.findAll();
  res.json( restaurant );
})

module.exports = router;
