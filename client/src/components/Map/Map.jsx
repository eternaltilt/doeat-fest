/* eslint-disable no-unused-vars */
import React, { useEffect, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { restaurantFetch,festivalFetch, restaurantSetFetch, restaurantCommentsFetch } from '../../redux/thunk';
import style from './Map.module.css';


function Map() {
  const navigate = useNavigate();
  const [ myMap, setmyMap ]= useState({})
  const dispatch = useDispatch()
  const {restaurants} = useSelector(state=>state.restaurantReducer);
  // ToDo:убрать костыли )
  const [ state, setState ] = useState(true)

  useEffect(()=>{
    dispatch(restaurantFetch())
    dispatch(restaurantSetFetch());
    dispatch(restaurantCommentsFetch());
    dispatch(festivalFetch());
  },[dispatch])
  
  useEffect(() => {
  if(restaurants.length && state ) {
  initMap()};
  }, [restaurants]);

  useEffect(()=>{
  addMarks()
  },[myMap])



  function initMap() {
    window.ymaps.ready( () => {
      const myMapS = new window.ymaps.Map(
        'map',
        {
          center: [59.92, 30.33],
          zoom: 12,
          controls: [
            'zoomControl',
            'searchControl',
            'fullscreenControl',
            'routeButtonControl',
          ],
        },
        {
          searchControlProvider: 'yandex#search',
        }
        )
        setmyMap(myMapS)
      })
      setState(false)
    };

    function addMarks() {
    restaurants.map((rest) => {
       window.ymaps
         .geocode(rest.adress, {
           // boundedBy: myMap.getBounds(),
         })
         .then( (res)=> {
           const firstGeoObj = res.geoObjects.get(0);
           const coords = firstGeoObj.geometry.getCoordinates();
           const myPlacemark = new window.ymaps.Placemark(
             coords,
             {
                 hintContent: rest.title,
                 balloonContentHeader: `${rest.title}`,
                 balloonContentBody: `${rest.description} <br>
                 <img src="${rest.img}" alt="event_pic" width=200 height="150">`,
                 balloonContentFooter: `<br> ${rest.work_time }<br><a href="/calendar/1/${rest.id}">Посмотреть подробнее</a>`,
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
    <div>
      {/* <div>
          <button onClick={() => navigate(-1) } className={style.buttonRight} type="submit">Список участников</button>
      </div>  */}
      <div className={style.map} id="map" />
    </div>
 )
}

export default Map;
