import React, {useState} from 'react'
import { Outlet } from 'react-router-dom';
import '../assets/stylesheets/preloaderFixed.css'; 

function Preloader() {
//TwinsFarm svg preloader
  const [loading, setIsLoading] = useState(true);
 
    setTimeout(() => {
    //   loader.style.display = "none";
      setIsLoading(false);
    }, 2500);
  
  return (
    <>
    { loading ?
        <div id='backgroundGradient' className='flex justify-center items-center bg-tforange h-screen' >
            <img className="justify-center content-center h-64" src="tfloading.svg" alt="" />
        </div>

    :
        <Outlet/>
    }
    </>
  )
}

export default Preloader