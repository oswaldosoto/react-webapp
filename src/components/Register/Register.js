import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/stylesheets/login.css';
import axios from '../../api/axios';
import  register from '../../features/register'
import UserIcon from '../../assets/images/IconUserLogin.svg';
import PasswordIcon from '../../assets/images/IconPasswordLogin.svg';
import EmailIcon from '../../assets/images/email_icon2.svg';
import Alert from '../Alert'

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState(true);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value)

  const handleSubmit = (e) => {
    // console.log(location);
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
      name: name
    };

    axios
      .post( "/auth/register/farmer", userData)
      .then((response) => {
          console.log(response.data)
          const allUserData = response.data.data.user;
          const token = response.data.data.access_token;
          console.log(token)
          localStorage.setItem('token', token);
          if(token){
            navigate('../preregister');
          }
          // dispatch(register({name: allUserData.name, username:allUserData.username, email: allUserData.email}))
          
        console.log(response.data)
        console.log(allUserData)
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
                    <form onSubmit={handleSubmit}>
                      <div className="omrs-input-group">
                        <label className="omrs-input-filled">
                          <input type="username" value={name} onChange={(e) => setName(e.target.value)} required />
                          <span className="omrs-input-label">Nombre</span>
                          {/* <span class="omrs-input-helper">Ingrese su usuario</span> */}
                          <img alt='UserIcon' src={UserIcon} width="20" height="20" viewBox="0 0 24 24"/>
                        </label>
                      </div>
                      <div className="omrs-input-group">
                        <label className="omrs-input-filled">
                          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                          <span className="omrs-input-label">Email</span>
                          {/* <span class="omrs-input-helper">Ingrese su contraseña</span> */}
                          <img alt='PasswordIcon' src={PasswordIcon} width="20" height="20" viewBox="0 0 24 24"/>
                        </label>
                      </div>
                      <div className="omrs-input-group">
                        <label className="omrs-input-filled">
                          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                          <span className="omrs-input-label">Contraseña</span>
                          {/* <span class="omrs-input-helper">Ingrese su contraseña</span> */}
                          <img alt='PasswordIcon' src={PasswordIcon} width="20" height="20" viewBox="0 0 24 24"/>
                        </label>
                      </div>
                      <button type='submit'>Ingresar</button>
                      <div>
                      <h4 className='font-bold mt-10' id="RegisterLink">Ya eres miembro?<span><Link to="/login"> Iniciar Sesion </Link></span></h4>
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