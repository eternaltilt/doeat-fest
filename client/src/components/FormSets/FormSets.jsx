/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { axiosImg } from './axios/upload';

import {
  fetchDelitSession,
  formSetFetch,
  festivalFetch,
  fetchAddFestival,
  managerFetch
} from '../../redux/thunk';
import style from './FormSets.module.css';


function FormSets() {
  const [image1, setImage1] = useState({ selectedFile: null });
  const [image2, setImage2] = useState({ selectedFile: null });
  const [image3, setImage3] = useState({ selectedFile: null });
  const [imageMenu, setImageMenu] = useState({ selectedFile: null });
  const [imageRestaurant, setImageRestaurant] = useState({ selectedFile: null });
  // const [url1, setUrl1] = useState('');
  // const [url2, setUrl2] = useState('');
  // const [url3, setUrl3] = useState('');
  // const [urlMenu, setUrlMenu] = useState('');
  // const [urlRestaurant, setUrlRestaurant] = useState('');
  // const [load, setLoad] = useState('');
  // const [showUpload, setShowUpload] = useState(false);

  const { festival } = useSelector((state) => state.festivalReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // выход, очищение сессии
  const toLogout = async () => {
    await dispatch(fetchDelitSession());
    localStorage.clear();
    navigate('/admin');
  };
  const rezultat = festival.fest ? festival.fest : [];

  // const config = {
  //   onUploadProgress (progressEvent) {
  //     const percentCompleted = Math.round(
  //       (progressEvent.loaded * 100) / progressEvent.total
  //     );
  //     setLoad(`Загружено: ${  percentCompleted  }%`);
  //   },
  // };
  const fileSelectedHandler1 = (e) => {
      setImage1({
        selectedFile: e.target.files[0],
      });
    };

  const fileUploader1 = async () => {
    const pictureName = Math.floor(Math.random() * (99999 - 1) + 1);
    const pictureName1 = Math.floor(Math.random() * (99999 - 1) + 1);
    const body = new FormData();
    body.set('key', '96cea888424c27c83b9632fbdfdf9da2');
    body.set('name', `${pictureName}${pictureName1}`);
    body.append('image', image1.selectedFile);
    const data = await axiosImg.post('upload', body);
    return data.data.data.url;
    // setUrl1(data.data.data.url);
    // console.log('URL1 ', url1);
    // console.log('DATA 1 !!! ', data.data.data.url);
    // setShowUpload(false);
  };

  const fileSelectedHandler2 = (e) => {
    setImage2({
      selectedFile: e.target.files[0],
    });
  };

  const fileUploader2 = async () => {
    const pictureName = Math.floor(Math.random() * (99999 - 1) + 1);
    const pictureName1 = Math.floor(Math.random() * (99999 - 1) + 1);
    const body = new FormData();
    body.set('key', '96cea888424c27c83b9632fbdfdf9da2');
    body.set('name', `${pictureName}${pictureName1}`);
    body.append('image', image2.selectedFile);
    const data = await axiosImg.post('upload', body);
    return data.data.data.url;
    // setShowUpload(false);
  };

  const fileSelectedHandler3 = (e) => {
    setImage3({
      selectedFile: e.target.files[0],
    });
  };

  const fileUploader3 = async () => {
    const pictureName = Math.floor(Math.random() * (99999 - 1) + 1);
    const pictureName1 = Math.floor(Math.random() * (99999 - 1) + 1);
    const body = new FormData();
    body.set('key', '96cea888424c27c83b9632fbdfdf9da2');
    body.set('name', `${pictureName}${pictureName1}`);
    body.append('image', image3.selectedFile);
    const data = await axiosImg.post('upload', body);
    return data.data.data.url;
    
    // setShowUpload(false);
  };
  
  const fileSelectedHandlerMenu = (e) => {
    setImageMenu({
      selectedFile: e.target.files[0],
    });
  };

  const fileUploaderMenu = async () => {
    const pictureName = Math.floor(Math.random() * (99999 - 1) + 1);
    const pictureName1 = Math.floor(Math.random() * (99999 - 1) + 1);
    const body = new FormData();
    body.set('key', '96cea888424c27c83b9632fbdfdf9da2');
    body.set('name', `${pictureName}${pictureName1}`);
    body.append('image', imageMenu.selectedFile);
    const data = await axiosImg.post('upload', body);
    return data.data.data.url;
    // setShowUpload(false);
  };

  const fileSelectedHandlerRestaurant = (e) => {
    setImageRestaurant({
      selectedFile: e.target.files[0],
    });
  };

  const fileUploaderRestaurant = async () => {
    const pictureName = Math.floor(Math.random() * (99999 - 1) + 1);
    const pictureName1 = Math.floor(Math.random() * (99999 - 1) + 1);
    const body = new FormData();
    body.set('key', '96cea888424c27c83b9632fbdfdf9da2');
    body.set('name', `${pictureName}${pictureName1}`);
    body.append('image', imageRestaurant.selectedFile);
    const data = await axiosImg.post('upload', body);
    return data.data.data.url;
    // setShowUpload(false);
  };
  // отправляем данные по ресторану и фестивалю
  const onSubmit = async (e) => {
    e.preventDefault();

    const url1 = await fileUploader1();
    const url2 = await fileUploader2();
    const url3 = await fileUploader3();
    const urlMenu = await fileUploaderMenu();
    const urlRestaurant = await fileUploaderRestaurant();
    console.log('URLS! ', url1, url2, url3, urlMenu, urlRestaurant);
    // console.log(e.target.files[0]);

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
    } = e.target;

    const body = {
      titleSets: titleSets.value,
      setDescription: setDescription.value,
      firstDish: firstDish.value,
      secondDish: secondDish.value,
      thirdDish: thirdDish.value,
      allWeight: allWeight.value,
      titleRest: titleRest.value,
      description: description.value,
      adress: adress.value,
      link: link.value,
      phone: phone.value,
      festivalId: festivalId.value,
      worktime: worktime.value,
      url1,
      url2,
      url3,
      urlMenu,
      urlRestaurant,
    };
    console.log('BODY ', body);
    e.target.reset();
    dispatch(formSetFetch(body));
  };

  const onSubmitFest = (e) => {
    e.preventDefault();
    const { festivalName, festivalDescription, festivalStart, festivalEnd, festivalSetPrice } =
      e.target;
    const body = {
      festivalName: festivalName.value,
      festivalDescription: festivalDescription.value,
      festivalStart: festivalStart.value,
      festivalEnd: festivalEnd.value,
      festivalSetPrice: festivalSetPrice.value,
    };
    e.target.reset();
    dispatch(fetchAddFestival(body));
  };


  // вытаскиваем все фестивали
  const festival1 = () => {
    dispatch(festivalFetch());
  };

  // заявки от менеджеров
  useEffect(()=>{
    dispatch(managerFetch())
  },[])
  const { RestaurantManager } = useSelector((state) => state.applicationReducer);
  const application = RestaurantManager.RestaurantManager1?RestaurantManager.RestaurantManager1:[];
  
  // удаление заявки p.s.не работает
  const deleteManager = () =>{
    console.log({id:application.id});
    //  dispatch(delManager({id:application.id}))
  }


  return (
    <>
 <div>
     <form className={style.form} onSubmit={onSubmit} action="">
       <button onClick ={toLogout} className={style.formBtnExit} type='button'>Выйти</button> <br />
       <div  className={style.title} >Добавить участника</div>
     <div className={style.formContainer}  id="sets">
      <div className={style.rightContainer} >
       <input type="text"
        id="titleSets"
        className={style.inputSize} 
        placeholder='Название сета' 
        autoComplete="off"/>
       <input type="text"
        id='firstDish'
        className={style.inputSize}
        placeholder='1 блюдо'
        autoComplete="off" />
       <input type="text"
        id='secondDish'
        className={style.inputSize}
        placeholder='2 блюдо'
        autoComplete="off"/>
       <input type="text"
        id='thirdDish'
        className={style.inputSize}
        placeholder='3 блюдо'
        autoComplete="off"/>
       <input type="text"
        id='setDescription'
        className={style.inputSize}
        placeholder='Описание сета'
        autoComplete="off"/>
       <input type="text"
        id='allWeight'
        className={style.inputSize}
        placeholder='Вес'
        autoComplete="off"/>
       <select onClick={festival1}
        className={style.inputSize}
        placeholder='Фестиваль'
        id="festivalId">
       {rezultat.map((el)=> (<option key={el.id} value={el.id}>{el.title}</option>) )}  
       </select>
       </div>
       <div id="Resta" className={style.leftContainer}>
       <input type="text"
        id='titleRest'
        className={style.inputSize}
        placeholder='Название заведения'
        autoComplete="off" />
       <input type="text"
        id='adress'
        className={style.inputSize}
        placeholder='Адрес заведения'
        autoComplete="off"/>
       <input type="text"
        id='phone'
        className={style.inputSize}
        placeholder='телефон'
        autoComplete="off"/>
       <input type="text"
        id='description'
        className={style.inputSize}
        placeholder='Описание заведения'
        autoComplete="off"/>
       <input type="text"
        id='link'
        className={style.inputSize}
        placeholder='ссылочка на ресторан'
        autoComplete="off"/>
       <input type="text"
        id='worktime'
        className={style.inputSize}
        placeholder='время работы ресторана'
        autoComplete="off"/>

        <div>
          <input id='imgid1' type="file" className={style.inputSize} onChange={fileSelectedHandler1}/>
        </div>
        <div>
          <input id='imgid2' type="file" className={style.inputSize} onChange={fileSelectedHandler2}/>
        </div>
        <div>
          <input id='imgid3' type="file" className={style.inputSize} onChange={fileSelectedHandler3}/>
        </div>
        <div>
          <input id='imgidMenu' type="file" className={style.inputSize} onChange={fileSelectedHandlerMenu}/>
        </div>
        <div>
          <input id='imgidRestaurant' type="file" className={style.inputSize} onChange={fileSelectedHandlerRestaurant}/>
        </div>

       <button className={style.formBtn} type="submit">Отправить</button>
       <button className={style.formBtn} type="submit">Добавить фото</button>
     </div>
     </div>
     </form>
    </div>


      <h3 className={style.festFormTitle}>Заявки</h3>
        <section className={style.Formapp}>
         {application.map((el)=>(<ul className={style.manager} key={el.id}>
           <li className={style.application}>{el.name}</li>
           <li className={style.application}>{el.phone_number}</li>
           <li className={style.application}>{el.email}</li>
           <li className={style.application}>{el.restaurant_name}</li>
           <li className={style.application}>{el.festival_id}</li>
           <button onClick={deleteManager} className={style.delete} type="submit">
           🗑
            </button>
           </ul>))}
         </section>
       



      <h3 className={style.festFormTitle}>Создать фестиваль</h3>
      <section className={style.festForm}>
        <div className={style.festFormContainer}>
          <form onSubmit={onSubmitFest} action="" method="post">
            <div>
              <input
                type="text"
                id="festivalName"
                name="festivalName"
                placeholder="Название фестиваля"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                id="festivalDescription"
                name="festivalDescription"
                placeholder="Описание фестиваля"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="date"
                id="festivalStart"
                name="festivalStart"
                placeholder="Дата начала"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="date"
                id="festivalEnd"
                name="festivalEnd"
                placeholder="Дата окончания"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                id="festivalSetPrice"
                name="festivalSetPrice"
                placeholder="Стоимость сета"
                autoComplete="off"
              />
            </div>
            <button type="submit">Сохранить</button>
          </form>
        </div>
        
      </section>
    </>
  );
}

export default FormSets;
