import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './RestaurantCard.module.css';

function RestaurantCard() {
  const { restaurants } = useSelector((state) => state.restaurants);
  const { sets } = useSelector((state) => state.sets);
  const { pictures } = useSelector((state) => state.pictures);
  const { id } = useParams();
  const restaurant = restaurants[0].filter((elm) => elm.id === Number(id));
  const set = sets[0].filter((elm) => elm.restaurantCard_id === Number(id));
  const pics = pictures[0].filter((elm) => elm.restaurantSet_id === set.id);
  return (
    <div>
      <div>
        <h3>{restaurant.title}</h3>
        <p>Стоимость сета: {set.price}</p>
      </div>

      <div>
        <img src={restaurant.picture} alt="" />
      </div>

      <div>

        <div>

          <div>
            <img src={pics.first_dish} alt="1picDish" />
            <h4>1 блюдо</h4>
            <p>{sets.first_dish}</p>
          </div>
          <div>
            <img src={pics.second_dish} alt="2picDish" />
            <h4>2 блюдо</h4>
            <p>{sets.second_dish}</p>
          </div>
          <div>
            <img src={pics.third_dish} alt="3picDish" />
            <h4>3 блюдо</h4>
            <p>{sets.third_dish}</p>
          </div>

        </div>

        <div>

          <div>
            
          </div>
          <div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default RestaurantCard;
