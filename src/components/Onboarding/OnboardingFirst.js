import React from 'react';
import { useNavigate } from 'react-router-dom';
import onbordingImage from '../../assets/images/onboarding/onboarding01.svg';
import BackIcon from '../../assets/images/arrow.png'

function OnboardingFirst() {
  //used for moving throught routes
  let navigate = useNavigate();
  return(
    <div className='wrapper'>
      <div id='slide' className='flex flex-wrap text-center max-h-screen max-h-full grid md:grid-cols-2 md:grid-rows-1 '>
        <button onClick={() => navigate('../preregister')} className=' md:hidden sm:block  order-0 float-left top m-0 p-0'>
            <img className='row-span-3 w-20 gap-4 ' alt='BackIcon' src={BackIcon} />
        </button>
        <div className='  items-center '>
            <button onClick={() => navigate('../preregister')} className='hidden md:block order-0 float-left top m-0 p-0'>
                <img className='row-span-3 w-20 gap-4 ' alt='BackIcon' src={BackIcon} />
            </button>
            <div className=' md:hidden sm:block  '>
              <img className=' inline w-80' alt='onboarding' src={onbordingImage} />
            </div>  
            <div className='mt-12 place-items-center '>
              <h1 className='text-2xl font-poppins font-extrabold text-tfgreen text-3xl'>Encuentra tu "Produce Twin"</h1>
              <h1 className='mt-10'>Crea tu perfil, cuenta tu historia, y haz el match perfecto con clientes conscientes que buscan lo que solo tú tienes</h1>
            </div>
        </div>
        <div className='hidden md:block '>
          <img className=' xl:max-w-xl ' alt='BackIcon' src={onbordingImage} />
        </div>  
        <div class="md:hidden mt-20 space-x-1 flex items-center justify-center">
            <div class="w-3 h-3 border bg-tforange border-orange-400 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
        </div>
        <div className='mt-10 flex items-center justify-center'>
            <button  onClick={() => { navigate('../onboarding/2') } } type="button" className="fixed bottom-0 w-10/12 h-12 text-white font-black mb-5 xl: mt-5 lg:w-1/5 sm:w-full md:w-full bg-tforange  px-6 py-2 border-2 border-orange-400 text-white-200 font-medium text-xs leading-normal uppercase rounded-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Next</button>
        </div>
        <div class="hidden md:flex mr-40 space-x-1 flex items-center justify-center">
            <div class="w-3 h-3 border bg-tforange border-orange-400 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
            <div class="w-3 h-3 border border-stone-900 rounded-full"></div>
        </div>
      </div>
    </div>
    
  )
}

export default OnboardingFirst