import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDelitSession , formSetFetch,festivalFetch } from '../../redux/thunk';
import style from "./FormSets.module.css"


function FormSets() {
const {festival}= useSelector(state=>state.festivalReducer)
const dispatch = useDispatch()
const navigate = useNavigate()
// выход, очищение сессии
const toLogout = async ()=>{
  await dispatch(fetchDelitSession())
  localStorage.clear();
  navigate('/admin')
}

  const rezultat = festival.fest?festival.fest:[];

// отправляем данные по ресторану и фестивалю
const onSubmit = (e) =>{
  e.preventDefault();
  const { titleSets,adress,phone,link, setDescription,firstDish, secondDish,thirdDish,allWeight,titleRest,description,festivalId } = e.target;

  const body = {
    titleSets: titleSets.value,
    setDescription: setDescription.value,
    firstDish: firstDish.value,
    secondDish: secondDish.value,
    thirdDish: thirdDish.value,
    allWeight: allWeight.value,
    titleRest:titleRest.value,
    description:description.value,
    adress:adress.value,
    link:link.value,
    phone:phone.value,
    festivalId:festivalId.value,
  };
  e.target.reset();
  dispatch(formSetFetch(body));
}
// вытаскиваем все фестивали
const festival1 = () =>{
  dispatch(festivalFetch())
}

  return ( 
    <div>
    <form className={style.form} onSubmit={onSubmit} action="">
      <button onClick ={toLogout} className={style.formBtnExit} type='button'>Выйти</button> <br />
      <div  className={style.title} >Добавить участника</div>
    <div className={style.formContainer}  id="sets">
     <div className={style.rightContainer} >
      <input type="text"  id="titleSets"  className={style.inputSize} placeholder='Название сета' />
      <input type="text" id='firstDish'  className={style.inputSize} placeholder='1 блюдо' />
      <input type="text" id='secondDish'  className={style.inputSize} placeholder='2 блюдо' />
      <input type="text" id='thirdDish'  className={style.inputSize} placeholder='3 блюдо' />
      <input type="text" id='setDescription'  className={style.inputSize} placeholder='Описание сета'  />
      <input type="text" id='allWeight'  className={style.inputSize} placeholder='Вес' />
      {/* <input type="text" onClick={festival1} id='festivalId' className="festivalId" placeholder='festival'/> */}
      <select onClick={festival1} className={style.inputSize} placeholder='Фестиваль' id="festivalId">
      {rezultat.map((el)=> (<option key={el.id} value={el.id}>{el.title}</option>) )}  
      </select>
      </div>

      <div id="Resta" className={style.leftContainer}>
      <input type="text" id='titleRest'  className={style.inputSize} placeholder='Название заведения' />
      <input type="text" id='adress'  className={style.inputSize} placeholder='Адрес заведения'/>
      <input type="text" id='phone'  className={style.inputSize} placeholder='телефон'/>
      <input type="text" id='description'  className={style.inputSize} placeholder='Описание заведения' />
      <input type="text" id='link'  className={style.inputSize} placeholder='почта'/>
      <button className={style.formBtn} type="submit">Отправить</button>
      <button className={style.formBtn} type="submit">Добавить фото</button>
    </div>
    </div>
    </form>
    </div>
  );
}

export default FormSets;
