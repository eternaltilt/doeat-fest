const router = require("express").Router();
const { RestaurantManager } = require("../db/models");

router.route("/").get(async (req, res) => {
  console.log("serveeeeeeeeeeeeer");
  const RestaurantManager1 = await RestaurantManager.findAll();
  res.json({ RestaurantManager1 });
});
module.exports = router;
