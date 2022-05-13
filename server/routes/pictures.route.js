const router = require("express").Router();
const { Pictures, RestaurantSet } = require("../db/models");


router
  .route('/:id')
  .get(async (req, res) => {
    console.log(req.params)
    const { id } = req.params
    const pictures = await Pictures.findAll({
      where: { restaurantSet_id: Number(id)}
    })
    return res.json(pictures);
  })

module.exports = router;
