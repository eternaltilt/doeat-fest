/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Comment  from '../../Comment/Comment';
import Map from '../../Map/Map';
import style from './RestaurantCurrentCard.module.css';
import {
  festivalFetch,
  restaurantFetch,
  restaurantSetFetch,
  restaurantCommentsFetch,
  submitCommentFetch,
  picturesFetch,
} from '../../../redux/thunk';



function RestaurantCurrentCard() {

  const dispatch = useDispatch();
  const [stateMap, setState] = useState(true);
  const [commentStatus, setCommentStatus] = useState('');
  const { restId, id } = useParams();
  const { restaurants } = useSelector((state) => state.restaurantReducer);
  const { sets } = useSelector((state) => state.restaurantSetReducer);
  const { festival } = useSelector((state) => state.festivalReducer);
  const { comments } = useSelector((state) => state.restaurantReducer);
  const { pictures } = useSelector((state) => state.picturesReducer);

  const currentFest = festival.find((el) => el.id === +restId);
  const currentRest = restaurants.find((el) => el.id === +restId);
  const currentSet = sets.filter((el) => el.id === +currentRest.id);
  const currentComments = comments.filter((comm) => comm.restaurantCard_id === currentRest.id);
  console.log(currentSet);
  const arrRest = [currentRest];

  console.log('COMMENTS ', currentComments);

  useEffect(() => {
    dispatch(picturesFetch(currentSet[0].id))
    dispatch(restaurantCommentsFetch());
  }, [dispatch]);

  const addComment = (e) => {
    e.preventDefault();
    const { username, text } = e.target;
    if (username.value === '' && text.value === '') {
      setCommentStatus('Введите имя и комментарий!');
    } else if (username.value === '') {
      setCommentStatus('Введите имя!');
    } else if (text.value === '') {
      setCommentStatus('Введите комментарий!');
    } else {
      const body = {
        username: username.value,
        text: text.value,
        restaurantCard_id: currentRest.id,
      };
      e.target.reset();
      dispatch(submitCommentFetch(body));
    }
  };

  // map
  const [myMap, setmyMap] = useState({});

  useEffect(() => {
    addMarks();
  }, [myMap]);

  useEffect(() => {
    if (restaurants.length && stateMap) {
      initMap();
    }
  }, [arrRest]);

  function initMap() {
    window.ymaps.ready(() => {
      const myMapS = new window.ymaps.Map(
        'map',
        {
          center: [59.92, 30.33],
          zoom: 12,
          controls: ['zoomControl', 'searchControl', 'fullscreenControl', 'routeButtonControl'],
        },
        {
          searchControlProvider: 'yandex#search',
        }
      );
      setmyMap(myMapS);
    });
    setState(false);
  }

  function addMarks() {
    arrRest.map((rest) => {
      window.ymaps
        .geocode(rest.adress, {
          // boundedBy: myMap.getBounds(),
        })
        .then((res) => {
          const firstGeoObj = res.geoObjects.get(0);
          const coords = firstGeoObj.geometry.getCoordinates();
          const myPlacemark = new window.ymaps.Placemark(
            coords,
            {
              hintContent: rest.title,
              balloonContentHeader: `${rest.title}`,
              balloonContentBody: `${rest.description} <br>
                   <img src="${rest.img}" alt="event_pic" width=200 height="150">`,
                   balloonContentFooter: `адрес: ${rest.adress}<br>Время работы: ${rest.work_time } <br>телефон: ${rest.phone}`,
                 },
               {
                 iconImageSize: [30, 42],
                 iconImageOffset: [-5, -38],
               }
             );
              myMap.geoObjects.add(myPlacemark);
             })
       })};
  return (
    <>
      <section className={style.currentRestContainer}>
        <div className={style.currentRestInfo}>
          <h2 className={style.currentRestTitle}>{currentRest.title}</h2>
          <p className={style.currentRestPrice}>Общий вес сета: {currentSet[0].all_weight} г.</p>
        </div>
        <div className={style.imgContainer}>
          {pictures.length > 0 && (
            <img className={style.mainImg} src={pictures[0].img_menu} alt="img" />
          )}
        </div>
      </section>
      <section className={style.container}>
        <div className={style.RestMapContainer}>
          <div className={style.restContainer}>
            <Card className={style.test}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={style.restInfoImg}
                  image={currentRest.img}
                  alt="3d"
                />
              </CardActionArea>
            </Card>
          </div>
          <div className={style.containerWidth}>
            <CardContent className={style.cardContentTitle}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={style.restaurantTitle}
              >
                {currentRest.title}
              </Typography>
              <Typography variant="body2" color="text.white" className={style.restaurantAdres}>
                {currentRest.adress}
              </Typography>
              <Typography variant="body2" color="text.white" className={style.restaurantWork}>
                {currentRest.work_time}
              </Typography>
              <Typography variant="body2" color="text.white" className={style.restaurantDesc}>
                Описание сета:&nbsp; <br/>
                {currentSet[0].set_description}
              </Typography>
            </CardContent>
          </div>
        </div>
        <div className={style.setContainer}>
          <Card className={style.test}>
            <CardActionArea>
              {pictures.length > 0 && (
                <CardMedia
                  component="img"
                  className={style.testimg}
                  image={pictures[0].first_dish_img}
                  alt="1st"
                />
              )}
              <CardContent className={style.cardContentTitle}>
                <Typography gutterBottom variant="h5" component="div">
                  {currentSet[0].first_dish}
                </Typography>
                <Typography variant="body3" color="text.white">
                  {currentSet[0].first_dish_description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={style.test}>
            <CardActionArea>
              {pictures.length > 0 && (
                <CardMedia
                  component="img"
                  className={style.testimg}
                  image={pictures[0].second_dish_img}
                  alt="2nd"
                />
              )}
              <CardContent className={style.cardContentTitle}>
                <Typography gutterBottom variant="h5" component="div">
                  {currentSet[0].second_dish}
                </Typography>
                <Typography variant="body3" color="text.white" >
                  {currentSet[0].second_dish_description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={style.test}>
            <CardActionArea>
              {pictures.length > 0 && (
                <CardMedia
                  component="img"
                  className={style.testimg}
                  image={pictures[0].third_dish_img}
                  alt="3d"
                />
              )}
              <CardContent className={style.cardContentTitle}>
                <Typography gutterBottom variant="h5" component="div">
                  {currentSet[0].third_dish}
                </Typography>
                <Typography variant="body3" color="text.white">
                  {currentSet[0].third_dish_description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </section>
      <section className={style.commentsContainer}>
      <h3 style={{color: 'white', paddingLeft: '28px', textAlign:'center'}}>Уже тут побывали? Оставьте свой отзыв!</h3>

      <form action="" onSubmit={addComment} className={style.commentInputForm}>
        <input type="text" id='username' className={style.nameInput} placeholder='Введите ваше имя' autoComplete='off'/>
        <textarea type="text" id='text' className={style.textInput} placeholder='     Введите ваш отзыв'/>
        <input type="submit" className={style.buttonInput}/>
      </form>

      

      <p className={style.commentStatus}>{commentStatus}</p>
      <h2 className={style.whiteColor}>Отзывы:</h2>
      <div className={style.commentContainer}>
        { currentComments.map((comment) => comment.status && <Comment username={comment.username} text={comment.text} status={comment.status} /> ) }
      </div>
    </section>
    </>
  );
}

export default RestaurantCurrentCard;
