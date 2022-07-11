import React,{useState} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../../assets/stylesheets/login.css';
import axios from '../../api/axios';
import UserIcon from '../../assets/images/IconUserLogin.svg';
import EmailIcon from '../../assets/images/IconPasswordLogin.svg';
import Alert from '../Alert'

function Login() {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [errMessage, setErrMessage] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post( "/auth/recovery-password", {email:email})
      .then((response) => {
          // console.log(response.data)
          const allUserData = response.data.data.user;
          navigate('../profile');
        // console.log(response)
        console.log(allUserData.name)
        })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          setShowAlert(false);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };


  return (
    <div class="parent clearfix">
      {/* <Modal /> */}
      <div className='absolute sm:bottom-0 w-full'>
        {<Alert alert={errMessage} showAlert={setErrMessage} />}
      </div>
      <div class="bg-illustration">
      </div>
    
      <div id='password' class="login">
        <div class="container">
            <h1>Recupera tu contraseña</h1>
            <h4 id='RecoveryText'>Te enviaremos un correo para modificar tu contraseña</h4>
	          <div>
                  <form>
                    <div className="omrs-input-group">
                      <label className="omrs-input-filled">
                        <input type="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span className="omrs-input-label">E-mail</span>
                        {/* <span class="omrs-input-helper">Ingrese su usuario</span> */}
                        <img alt='UserIcon' src={UserIcon} width="20" height="20" viewBox="0 0 24 24"/>
                      </label>
                    </div>
                    <button onClick={handleSubmit()} type='submit'>Enviar</button>
                  </form>
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default Login