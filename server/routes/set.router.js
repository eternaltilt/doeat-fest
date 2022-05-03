const router = require("express").Router();
const { RestaurantSet } = require("../db/models");
const { RestaurantCard } = require("../db/models");

router.route("/").post(async (req, res) => {
  const {
    titleSets,
    adress,
    phone,
    link,
    setDescription,
    firstDish,
    secondDish,
    thirdDish,
    allWeight,
    titleRest,
    description,
    festivalId,
  } = req.body;
  //прверка на наличие ресторана в базе
  const restTitle = await RestaurantCard.findOne({
    where: { title: titleRest },
  });
  // если есть достаем ID
  if (restTitle) {
    const restSets = await RestaurantSet.create({
      title: titleSets,
      set_description: setDescription,
      first_dish: firstDish,
      second_dish: secondDish,
      third_dish: thirdDish,
      all_weight: allWeight,
      restaurantCard_id: restTitle.id,
      festival_id: festivalId,
    });

    // если нет создаем и используем id
  } else {
    const restCard = await RestaurantCard.create({
      title: titleRest,
      description: description,
      adress,
      phone,
      link,
    });
    const restSets = await RestaurantSet.create({
      title: titleSets,
      set_description: setDescription,
      first_dish: firstDish,
      second_dish: secondDish,
      third_dish: thirdDish,
      all_weight: allWeight,
      restaurantCard_id: restCard.id,
      festival_id: festivalId,
    });
  }
});

module.exports = router;
