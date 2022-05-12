import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import style from './AdminLogin.module.css';
import { loginFetch } from '../../redux/thunk';

function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const  {user}  = useSelector(state=>state.loginReducer)
  const [error, setError] = useState(false)
  const [entrance, setEntrance] = useState(false)
  useEffect(() => {
    if (user?.message === 'Ошибка! Неверный логин или пароль') {
      setError(true)
      setTimeout(() => {
        setError(false);
        setOpen(false);
      }, 2000);
    }else if (user?.message === 'Вы успешно вошли на сайт') {
      localStorage.setItem('Admin', user.AdminSession)
      setEntrance(true)
      setTimeout(() => {
        handleClose()
        navigate('/admin/panel');
      }, 2000);
    }
  }, [user]);


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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <button onClick={handleClickOpen} className={style.adminBtn} type="submit">Войти</button>
      
    </form>
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{backgroundColor: 'black'}}>
          <DialogContentText style={{backgroundColor: 'black'}} id="alert-dialog-description">
          {entrance?<div className={style.massege} >Вы успешно вошли на сайт</div>:entrance}
          {error?<div  className={style.massege}>Ошибка! Неверный логин или пароль</div>:error}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
    </section>
  );
}

export default AdminLogin;

