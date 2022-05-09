const router = require("express").Router();
const { Festival } = require("../db/models");

router.route("/")
.get(async (req, res) => {
  const fest = await Festival.findAll();
  res.json( fest );
})
.post(async (req, res) => {
  try{
  const {
    festivalName,
    festivalDescription,
    festivalStart,
    festivalEnd,
    festivalSetPrice,
  } = req.body;
  const newFestival = await Festival.create({
    title: festivalName,
    description: festivalDescription,
    start_date: festivalStart,
    finish_date: festivalEnd,
    festivalSetPrice: festivalSetPrice,
  })
  res.json({ newFestival });
} catch(error) {
  console.log(error.message)
}
})
module.exports = router;
