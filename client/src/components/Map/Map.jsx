import React, { useEffect, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantFetch } from '../../redux/thunk';


function Map() {
  const [ myMap, setmyMap ]= useState({})
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(restaurantFetch())
  },[dispatch])

  const {restaurants} = useSelector(state=>state.restaurantReducer);

  const initMap = () => {
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
    };

   const addMarks = ()=>restaurants.map((rest) => {
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
                balloonContentFooter: `<br> ${rest.work_time }<br><a href="/calendar/${rest.id}">Посмотреть подробнее</a>`,
              },
            {
              iconImageSize: [30, 42],
              iconImageOffset: [-5, -38],
            }
          );
           myMap.geoObjects.add(myPlacemark);
          })
    });
    // вынести на верх
useEffect(()=>{
  addMarks()
},[myMap])
  

  useEffect(() => {
if(restaurants.length) {  
  initMap()};
    }, [restaurants]);


  return (
   
  <div id="map" style={{ width:"90%", height:'600px', marginLeft:"5%",marginTop:'20px', marginBottom:'50px' }} /> 
  
 )
}

export default Map;
