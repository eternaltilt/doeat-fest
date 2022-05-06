import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import './AdminLogin';
import { loginFetch } from '../../redux/thunk';
import style from './AdminLogin.module.css';

function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
const  {user}  = useSelector(state=>state.loginReducer)
  const [error, setError] = useState(false)
  const [entrance, setEntrance] = useState(false)
  useEffect(() => {
    if (user?.message === 'Ошибка! Неверный логин или пароль') {
      setError(true)
      setTimeout(() => {
        setError(false);
      }, 2000);
    }else if (user?.message === 'Вы успешно вошли на сайт') {
      setEntrance(true)
      setTimeout(() => {
        navigate('/admin/panel');
      }, 2000);
      localStorage.setItem('Admin', user.AdminSession)
    }
  }, [user, navigate]);

  const loginAdmin = (e) => {
    e.preventDefault();
    const { login, password } = e.target;
    const body = {
      login: login.value,
      password: password.value,
    };
    e.target.reset();
    dispatch(loginFetch(body));
  };

  return (
    <section className={style.adminLogin}>
      <h2 className={style.adminTitle}>Вход</h2> 
    <form onSubmit={loginAdmin} id="login">
      <div>
      <input className={style.adminInput} type="text" id="login" placeholder="Логин" required autoComplete='off' />
      </div>
      <div>
      <input className={style.adminInput} type="password" id="password" placeholder="Пароль" minLength={3} required autoComplete='off'/>
      </div>
      <button className={style.adminBtn} type="submit">Войти</button>
      {entrance?<div className='message'>Вы успешно вошли на сайт</div>:entrance}
      {error?<div className='message'>Ошибка! Неверный логин или пароль</div>:error}
    </form>
    </section>
  );
}

export default AdminLogin;
