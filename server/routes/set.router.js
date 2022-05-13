const router = require("express").Router();
const { RestaurantSet } = require("../db/models");
const { RestaurantCard } = require("../db/models");
const { Pictures } = require('../db/models');
const uuid = require('uuid');
const path = require('path');
// const fileMiddleware = require('../middleware/uploadMiddleware');

//test
router.route('/')
.get(async (req, res) => {
  const set = await RestaurantSet.findAll({include: {
    model: RestaurantCard
  }});
  return res.json( set )
})
.post(async (req, res) => {
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
    worktime,
    url1,
    url2,
    url3,
    urlMenu,
    urlRestaurant,
    firstDishDescription,
    secondDishDescription,
    thirdDishDescription,
  } = req.body;
  console.log(req.body)
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
      first_dish_description: firstDishDescription,
      second_dish_description: secondDishDescription,
      third_dish_description: thirdDishDescription,
    });
    const restSetId = restSets.id;
    const pics = await Pictures.create({
      restaurantSet_id: restSetId,
      img_menu: urlMenu,
      first_dish_img: url1,
      second_dish_img: url2,
      third_dish_img: url3,
    });

    // если нет создаем и используем id
  } else {
    const restCard = await RestaurantCard.create({
      title: titleRest,
      description: description,
      adress,
      link,
      phone,
      img: urlRestaurant,
      work_time: worktime,
      phone,
      link,
      work_time: worktime,
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
      first_dish_description: firstDishDescription,
      second_dish_description: secondDishDescription,
      third_dish_description: thirdDishDescription,
    });
    const restSetId = restSets.id;
    const pics = await Pictures.create({
      restaurantSet_id: restSetId,
      img_menu: urlMenu,
      first_dish_img: url1,
      second_dish_img: url2,
      third_dish_img: url3,
    });
  }
});

module.exports = router;
