import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDelitSession , formSetFetch,festivalFetch } from '../../redux/thunk';
import './FormSets.css';


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
    <form onSubmit={onSubmit} action="">
    <div id="sets">
      <button onClick ={toLogout} className='button' type='button'>Выйти</button> <br />
      <div>Форма данных фестиваля</div>
      <input type="text"  id="titleSets" className="title" placeholder='title' />
      <input type="text" id='setDescription' className="setDescription" placeholder='setDescription'  />
      <input type="text" id='firstDish' className="firstDish" placeholder='firstDish' />
      <input type="text" id='secondDish' className="secondDish" placeholder='secondDish' />
      <input type="text" id='thirdDish' className="thirdDish" placeholder='thirdDish' />
      <input type="text" id='allWeight' className="allWeight" placeholder='allWeight' />
      {/* <input type="text" onClick={festival1} id='festivalId' className="festivalId" placeholder='festival'/> */}
      <select onClick={festival1} className="form-select" id="festivalId">
      {rezultat.map((el)=> (<option key={el.id} value={el.id}>{el.title}</option>) )}  
      </select>

      <div id="Resta">
      <div>Форма данных ресторана</div>
      <input type="text" id='titleRest' className="title" placeholder='name' />
      <input type="text" id='description' className="description" placeholder='description' />
      <input type="text" id='adress' className="adress" placeholder='adress'/>
      <input type="text" id='link' className="link" placeholder='link'/>
      <input type="text" id='phone' className="phone" placeholder='phone'/>
    </div>
      <button className='button' type="submit">Отправить</button>
    </div>
    </form>
  );
}

export default FormSets;
