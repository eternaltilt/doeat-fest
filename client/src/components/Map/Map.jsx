import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantFetch } from '../../redux/thunk';


function Map() {
  // const [ myMap, setmyMap ]= useState('')
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(restaurantFetch())
  },[dispatch])
  let myMap;
  
  const {restaurants} = useSelector(state=>state.restaurantReducer);

  const initMap = () => {
    window.ymaps.ready( () => {
     myMap = new window.ymaps.Map(
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
      );
     
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
                    balloonContentBody: `${rest.description} `,
                    // balloonContentBody: `<img src="${event.event_picture}" alt="event_pic" height="170">`,
                    balloonContentFooter: `<br> ${rest.work_time }<br><a href="/calendar/${rest.id}">Посмотреть подробнее</a>`,
                  },
                {
                  iconImageHref: '/home/egor/elbrus/doeat-fest/client/public/img/geometka.png',
                  iconImageSize: [30, 42],
                  iconImageOffset: [-5, -38],
                }
              );
                myMap.geoObjects.add(myPlacemark);
              })
              return (rest)
        });
      
   
      });
    };

  

  useEffect(() => {
      initMap();
      return ()=> myMap.destroy()
    }, [myMap,restaurants]);


  return <div id="map" style={{ width:"90%", height:'600px', marginLeft:"5%" }}>.</div>;
}

export default Map;
