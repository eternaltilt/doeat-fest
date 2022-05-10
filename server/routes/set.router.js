const router = require("express").Router();
const { RestaurantSet } = require("../db/models");
const { RestaurantCard } = require("../db/models");
const { Pictures } = require('../db/models');
const fileMiddleware = require('../middleware/uploadMiddleware');

//test
router.route('/')
.get(async (req, res) => {
  const set = await RestaurantSet.findAll({include: {
    model: RestaurantCard
  }});
  res.json( set )
})
.post(fileMiddleware.any(), async (req, res) => {
  // console.log('FILES ', req.files);
  // try {
  //   console.log(req.file);
  //   if (req.file) {
  //     const {
  //       titleSets,
  //       adress,
  //       phone,
  //       link,
  //       setDescription,
  //       firstDish,
  //       secondDish,
  //       thirdDish,
  //       allWeight,
  //       titleRest,
  //       description,
  //       festivalId,
  //       imgRest,
  //       worktime,
  //     } = req.body;
  //     //прверка на наличие ресторана в базе
  //     const restTitle = await RestaurantCard.findOne({
  //       where: { title: titleRest },
  //     });
  //     // если есть достаем ID
  //     if (restTitle) {
  //       const restSets = await RestaurantSet.create({
  //         title: titleSets,
  //         set_description: setDescription,
  //         first_dish: firstDish,
  //         second_dish: secondDish,
  //         third_dish: thirdDish,
  //         all_weight: allWeight,
  //         restaurantCard_id: restTitle.id,
  //         festival_id: festivalId,
  //       });
  //       const newPic = await Pictures.create({
  //         restaurantSet_id: restSets.id,
  //         img_menu: req.file.path,
  //       });
  //       // если нет создаем и используем id
  //     } else {
  //       const restCard = await RestaurantCard.create({
  //         title: titleRest,
  //         description: description,
  //         adress,
  //         phone,
  //         link,
  //         worktime,
  //         imgRest,
  //       });
  //       const restSets = await RestaurantSet.create({
  //         title: titleSets,
  //         set_description: setDescription,
  //         first_dish: firstDish,
  //         second_dish: secondDish,
  //         third_dish: thirdDish,
  //         all_weight: allWeight,
  //         restaurantCard_id: restCard.id,
  //         festival_id: festivalId,
  //       });
  //       const newPic = await Pictures.create({
  //         restaurantSet_id: restSets.id,
  //         img_menu: req.file.path,
  //       });
  //     }
  //   }
  // } catch (error) {

  // }
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
      work_time: worktime,
      img: "1233333",
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
