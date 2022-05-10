import React, { useEffect } from 'react';

function Map() {
  let myMap;
  const initMap = () => {
    window.ymaps.ready( () => {
      myMap = new window.ymaps.Map(
        'map',
        {
          center: [59.92, 30.33],
          zoom: 12,
        },
        {
          searchControlProvider: 'yandex#search',
        }
      );

      const MyIconContentLayout = window.ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      );

      const myPlacemark = new window.ymaps.Placemark(
        [59.92, 30.35],
        {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка',
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          // iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '/home/egor/elbrus/doeat-fest/client/public/img/geometka.png',
          // Размеры метки.
          iconImageSize: [30, 42],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
        }
      );
      
      const myPlacemarkWithContent = new window.ymaps.Placemark(
        [59.93, 30.33],
        {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12',
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          // iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'images/ball.png',
          // Размеры метки.
          iconImageSize: [48, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout,
        }
        );
        
        myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
      });
    };
    useEffect(() => {
      initMap();
      return ()=> myMap.destroy()
    }, []);
  return <div id="map" style={{ width:"90%", height:"1000px", marginLeft:"5%" }}>fd</div>;
}

export default Map;
