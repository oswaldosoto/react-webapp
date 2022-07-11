import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/stylesheets/register.css';
import Buyer from '../../assets/images/Buyer.jpg';
import Farmer from '../../assets/images/Farmer.jpg';
import YellowTFLogo from '../../assets/images/YellowTFLogo.svg';
import TFLogo from '../../assets/images/tflogo.svg';
import BackIcon from '../../assets/images/arrow.png'

function PreRegister() {

    const [isActiveLeft, setIsActiveLeft] = useState(false);
    const [isActiveRight, setIsActiveRight] = useState(false);
    let navigate = useNavigate();

    //Productor selected
    const handleClickLeft = (e) => {
        e.preventDefault();
        // toggle
        
        if (!isActiveLeft) {
            setIsActiveRight(false);
        }
        setIsActiveLeft(true);
      }

      //Retailer selected
      const handleClickRight = (e) => {
        e.preventDefault();
        // toggle
        
        if (!isActiveRight) {
            setIsActiveLeft(false);
        }
        setIsActiveRight(true);
        
      }

      const handleSubmit = () => {
        //Productor or Retailer
        isActiveLeft ? navigate("../onboarding/1") : navigate("/register/1") ;
        const userType = isActiveLeft ? "Productor" : "Retailer";
    }

      
      const handleButton = (e) => {
        if(!isActiveLeft && !isActiveRight) {
            e.currentTarget.disabled = true;
        }
      }

    return (
        <div id='preRegisterParent' className='parent'>
            {/* <div id="backgroundGradient">
                <div id="LogoIcon">
                    <img class="animate-flicker" src="tfloading.svg" alt="" />
                </div>
            </div> */}
            <div className='container' id='container'>
            {/* <button onClick={() => navigate('../welcome')} className='object-left-top m-0 pl-10'>
                <img className='row-span-3  inline w-20 gap-4 float-left' alt='BackIcon' src={BackIcon} />
            </button> */}
            <h3>Welcome to</h3>
            <img id='RegisterLogoIcon' alt='TFIcon' src={YellowTFLogo} />
            <img id='RegularLogoIcon' alt='TFIcon' src={TFLogo} />
            </div>

            <ul class="image-gallery">
                <li onClick={handleClickLeft} >
                    <div>
                        <img className={isActiveLeft ? ' selected' :''} src={Buyer} alt="Forest" />
                    </div>                  
                    <div class="centered">Productor</div>
                </li>
                <li onClick={handleClickRight}>
                    <div className='border-red-600'>
                        <img className={isActiveRight ? 'selected' :''} src={Farmer} alt="Mountains" />
                    </div>
                    <div class="centered">Retailer / Food Service</div>
                </li>
            </ul>
            {/* <div class="row">
                <div class="column">
                    <img src={PreReg} alt="Forest" />
                </div>
                <div class="column">
                    <img src={PreReg} alt="Mountains" />
                </div>
            </div> */}
            <h1 className='mt-2 text-sm' id='preRegisterText'>Or Service Provider / Referal</h1>
            <div className='mt-10 flex items-center justify-center'>
            <button onClick={() => { handleSubmit() } } type="button" className="fixed bottom-0 w-10/12 h-12 text-white font-black mb-5 xl:mt-5 lg:w-1/5 sm:w-full md:w-full bg-tforange  px-6 py-2 border-2 border-orange-400 text-white-200 font-medium text-xs leading-normal uppercase rounded-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Next</button>
        </div>
        </div>
      )
}

export default PreRegister