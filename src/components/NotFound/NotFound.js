import React from 'react'
import { Link } from 'react-router-dom';
import TFLogo from '../../assets/images/tflogo.svg';

function NotFound() {
  return (
    <div className='welcome'>
    <img id='LogoIcon' alt='TFIcon' src={TFLogo} />
    <h3>Oops.. Something is not working</h3>
    <Link to="/">
      <button className='p-0 w-10/12 h-12 text-white font-black mb-5 xl: mt-5 lg:w-1/5 sm:w-full md:w-full bg-tforange  px-6 py-2 border-2 border-orange-400 text-white-200 font-medium text-xs leading-normal uppercase rounded-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>Go back</button>
    </Link>
    </div>
  )
}

export default NotFound