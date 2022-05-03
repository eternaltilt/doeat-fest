const router = require("express").Router();
const { Festival } = require("../db/models");

router.route("/").get(async (req, res) => {
  const fest = await Festival.findAll();
  res.json({ fest });
});
module.exports = router;
