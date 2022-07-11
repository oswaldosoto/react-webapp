import React, {useRef,useEffect,useState} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import user, { login } from '../../features/user'
import '../../assets/stylesheets/login.css';
import UserIcon from '../../assets/images/IconUserLogin.svg';
import PasswordIcon from '../../assets/images/IconPasswordLogin.svg';
import Alert from '../Alert'
import { data } from 'autoprefixer';

function Login() {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [data, setData] = useState({user: "",password: ""});
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState(true);
  const [success, setSuccess] = useState(false);
  let location = useLocation();
  const user = useSelector((state) => state.user.value)
  // useEffect(() => {
  //   userRef.current.focus(); 
  // }, [])

  // useEffect(() => {
  //   setErrMessage(''); 
  // }, [username,password])
  
  const handleSubmit = (e) => {
    // console.log(location);
    e.preventDefault();
    const userData = {
      user: username,
      password: password
    };
    axios
      .post( "/auth/login", userData)
      .then((response) => {
          console.log(response.data)
          const allUserData = response.data.data.user;
          dispatch(login({name: allUserData.name, username:allUserData.username, email: allUserData.email}))
          navigate('../profile');
          console.log(response)
        console.log(allUserData.name)
        })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          setErrMessage(false);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div className='parent clearfix relative'>
      {/* <Modal /> */}
      <div className='absolute sm:bottom-0 w-full'>
        {<Alert alert={errMessage} showAlert={setErrMessage} />}
      </div>
      <div className="parent clearfix">      
      <div class="bg-illustration">
      </div>
    
      <div class="login">
        <div class="container">
            <h1>Bienvenidos a<br />Twins Farm</h1>
            <h4 class="title">Una nueva manera de presentar tu negocio y darte a conocer con clientes alrededor del mundo</h4>
	          <div>
              <form className='items-center' onSubmit={handleSubmit}>
                <div className="omrs-input-group">
                  <label htmlFor="username" className="omrs-input-filled">
                    <input type="username" ref={userRef} value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <span className="omrs-input-label">Usuario</span>
                    <img alt='UserIcon' src={UserIcon} width="20" height="20" viewBox="0 0 24 24"/>
                  </label>
                </div>
                <div className="omrs-input-group">
                  <label htmlFor="password" className="omrs-input-filled">
                    <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <span className="omrs-input-label">Contraseña</span>
                    <img alt='PasswordIcon' src={PasswordIcon} width="20" height="20" viewBox="0 0 24 24"/>
                  </label>
                </div>
                <button type='submit'>Ingresar</button>
                <div>
                  <h4 className=" mt-10 PasswordForgetText"> <Link to="/password-recovery">¿Olvidaste tu contraseña?</Link></h4>
                  <h4 id="SeparationLine"><span>O ingresa con</span></h4>
                  <h4 id='EmailLogin'>Correo Electrónico</h4>
                  <h4 className='font-bold' id="RegisterLink">¿NO TIENES CUENTA?<span><Link to="/register">Registrate</Link></span></h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login