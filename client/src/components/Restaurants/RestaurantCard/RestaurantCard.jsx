/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import style from './RestaurantCard.module.css';


// eslint-disable-next-line react/prop-types
function RestaurantCard({ restaurant, festId }) {

  const navigate = useNavigate();


  return (
    <Card className={style.test} onClick={() => navigate(`/calendar/${festId}/${restaurant.RestaurantCard.id}`)}>
    <CardActionArea>
      <CardMedia
        component="img"
        className={style.testimg}
        image={restaurant.RestaurantCard.img}
        alt="green iguana"
      />
      <CardContent className={style.cardContentTitle}>
        <Typography gutterBottom variant="h5" component="div">
          {restaurant.RestaurantCard.title}
        </Typography>
        <Typography variant="body2" color="text.white">
         Адрес: ул.{restaurant.RestaurantCard.adress}
        </Typography>
        <Typography variant="body2" color="text.white">
          Время работы: {restaurant.RestaurantCard.work_time}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
}

export default RestaurantCard;
