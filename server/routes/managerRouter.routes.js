const router = require("express").Router();
const { RestaurantManager } = require("../db/models");

router.route("/").get(async (req, res) => {
  const RestaurantManager1 = await RestaurantManager.findAll();
  res.json(RestaurantManager1);
});
router.route("/:id").post(async (req, res) => {
  const { id } = req.params;
  const delManager = await RestaurantManager.destroy({ where: { id } });
  res.json(id);
});
module.exports = router;
