import React,{ useState} from 'react'
import '../../assets/stylesheets/welcome.css';
import { Link } from 'react-router-dom';
import TFLogo from '../../assets/images/tflogo.svg';


function Onbording() {
  const [loading, setIsLoading] = useState(true);
  const loader = document.getElementById("backgroundGradient");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
      setIsLoading(false);
    }, 2500);
  }
  
  return (
    <div className='welcome'>
    <img id='LogoIcon' alt='TFIcon' src={TFLogo} />
    <h3>Bienvenido a Twins Farm</h3>
    <h1>Una nueva manera de presentar tu negocio y darte a conocer con clientes alrededor del mundo</h1>
    
    <Link to="login">
      <button className=" bottom-0 w-10/12 h-12 text-white font-black mb-5 xl: mt-5 lg:w-1/5 sm:w-full md:w-full bg-tforange  px-6 py-2 border-2 border-orange-400 text-white-200 font-medium text-xs leading-normal uppercase rounded-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Siguiente</button>
    </Link>
    
    </div>
  )
}

export default Onbording