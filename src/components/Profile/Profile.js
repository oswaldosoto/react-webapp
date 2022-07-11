import React, {useState} from 'react'
import {useSelector} from 'react-redux';
import AppIcon from '../../assets/images/App.svg';
import TrophieIcon from '../../assets/images/button_trofeo.svg';
import GoldMemberIcon from '../../assets/images/Gold.svg';
import ProductIcon from '../../assets/images/button_product.svg';
import InfoIcon from '../../assets/images/button_info.svg';
import CertificateIcon from '../../assets/images/button_certificate.svg';
import EditIcon from '../../assets/images/Edit.svg';
import profileHeader from '../../assets/images/profileHeader.svg';
import testingHeader from '../../assets/images/Artboard.svg';
import PhotoIcon from '../../assets/images/photo_upload.svg';
import Modal from '../Modal'
import FileModal from '../FileInputModal'
import TextModal from '../TextInputModal'
import wave1 from '../../assets/images/wave-haikei.svg'
import wave2 from '../../assets/images/wave-haikei2.svg'

function Profile() {
  const user = useSelector((state) => state.user.value)
  const [input, setInput] =useState('');
  const [showInputModal, setShowInputModal] = useState(false);
  const [showTextModal, setShowTextModal] = useState(false);
  const [currentTab, setCurrentTab] = useState(4);

  const handleActiveTab = (index) => {
    setCurrentTab(prevIndex => index);
}

const handleToggleDropdown = (index) => {
  setCurrentTab(prevIndex => index);
}

  return (

    <div className='bg-tfbackground'>
      <div className='max-h-46 section relative'>
              {/*Carousel buttons left/right */}
      <div className='block sm:hidden'>
      <a
        class="carousel-control-prev absolute top-0 bottom-12 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="h-10 carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next absolute top-0 bottom-20 md:bottom-12 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
        {/* <img className='  w-full ' src={wave1} /> */}
        <div className='relative'>
          {/*Followers*/}
          <div className="top-0 flex flex-row justify-between">
            <div class=" top-4 right-6 absolute  ">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="ml-7 relative top-0 w-7 text-tforange " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
              </svg>
              <h1 className='text-sm ml-7 text-white' >432</h1>
            </div>
          </div>
          <img className='w-full ' src={wave2} />
          <a onClick={(e)=> setShowInputModal(!e.target.value)}>
              <span class=" right-0 md:bottom-48 bottom-20 absolute  w-7 h-7 bg-white border-2 border-white dark:border-gray-800 rounded-full">
                <img className='object-scale-down ' src={PhotoIcon} />
              </span>
            </a>
        </div>
      </div>
      <div className='sm:block hidden mx-10'>
      <div id="default-carousel" class="relative" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
         {/* <!-- Item 1 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src="/docs/images/carousel/carousel-1.svg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="hidden">Previous</span>
        </span>
    </button>
    <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="hidden">Next</span>
        </span>
    </button>
</div>
      </div>
      <div>
        
      </div>
      </div>
      <div className="">
      {/*Profile picture*/}
      <a onClick={(e)=> setShowInputModal(!e.target.value)}>
      <div className='relative'>
      
        <div class=" rounded-full">
          <span class="bottom-8 left-6 absolute border-4 w-24 h-24 sm:w-48 sm:h-48 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full">
            <div class="relative w-full h-full overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg class="absolute  text-gray-400 left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            </div>
            {/*Change picture*/}
            <a onClick={(e)=> setShowInputModal(!e.target.value)}>
              <span class="bottom-0 right-0 md:right-5  absolute  w-7 h-7 bg-white border-2 border-white dark:border-gray-800 rounded-full">
                <img className='object-scale-down ' src={PhotoIcon} />
              </span>
            </a>
          </span>
          
        </div>
        
      </div>
      </a>
      
      <div className='mt-20 sm:mt-40 flex flex-row justify-between'>
      {/*profile header info*/}
      <div className=''>
        <div >
          {/*Username*/}
          <div>
            <h1 className='text-lg text-tfgreen font-bold m-0 ml-5 '>
                {user.name.toUpperCase()}
            </h1>
          </div>
          {/*Location*/}
          <div>
            <h1 className='text-lg m-0 ml-5 '>
                {/* {user.location} */}
                Gya, Ecuador
            </h1>
          </div>
          {/*Rating*/}
          <div className=''>
            <ul class="ml-5 flex ">
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                </svg>
              </li>
              <li>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                </svg>
              </li>
              <li>
              <h1 className="text-sm float-left ">4.2/5(27)</h1>
              </li>
              
            </ul>
            
          </div>
        </div>

      </div>
      <div className="">
            <a type="button" class=" px-6 py-2.5 bg-tforange text-white font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out">Produce Twins</a>
          </div>
      </div>
      </div>


      <div className='bt-40 relative tfbackground'>
        {/* <svg fill="" className='absolute mt-20 w-full  z-50 ' src={testingHeader} /> */}
      <div className='flex flex-row justify-between'>
          
      </div>
      </div>

      {/*Profile content */}
      <div className='grid grid-cols-3 my-5 mx-20 h-24 gap-4 justify-items-center bg-white border-2 border-white rounded-lg m-3 '>
        <div className=' m-auto'>
            <a>
                <img className=" w-20 h-10"  alt='NotificacitionIcon' src={ GoldMemberIcon } />
                <p className='mt-1 text-xs text-center font-bold text-tfblack'>Gold Member</p>
            </a>

        </div>
        <div className='m-auto'>
            <a>
                <img className="  w-20 h-10 "  alt='NotificacitionIcon' src={ TrophieIcon } />
                <p className='mt-1 text-xs text-center font-bold text-tfblack'>6 Trofeos</p>
            </a>

        </div>
        <div className='m-auto'>
            <a>
                <img className="  w-20 h-10 "  alt='NotificacitionIcon' src={ AppIcon } />
                <p className='mt-1 text-xs text-center font-bold text-tfblack'>TF Score</p>
            </a>
        </div>
      </div>

      <div className='grid grid-rows-2 '>
        <div className='grid grid-cols-3 mt-10 mx-20  h-24 gap-4 justify-items-center bg-white border-2 border-white rounded-lg m-3 '>
          <div className='m-auto'>
              <a>
                  <img className=" w-20 h-10"  alt='NotificacitionIcon' src={ InfoIcon } />
                  <p className='mt-1 text-xs text-center font-bold text-tfblack'>Market</p>
              </a>

          </div>
          <div className='m-auto'>
              <a>
                  <img className="  w-20 h-10 "  alt='NotificacitionIcon' src={ ProductIcon } />
                  <p className='mt-1 text-xs text-center font-bold text-tfblack'>Market</p>
              </a>

          </div>
          <div className='m-auto'>
              <a>
                  <img className="  w-20 h-10 "  alt='NotificacitionIcon' src={ CertificateIcon } />
                  <p className='mt-1 text-xs text-center font-bold text-tfblack'>Market</p>
              </a>
          </div>
        </div>
        <div className='flex mx-20 justify-items-center bg-white border-2 border-white rounded-lg'>
          <h1 className='text-tfgreen font-bold ml-5 mr-0'>Sobre Nosotros</h1>
          <a onClick={(e)=> setShowTextModal(!e.target.value)}>
            <img className="  w-20 h-6 "  alt='NotificacitionIcon' src={ EditIcon } />
          </a>
          
        </div>
      </div>
    <FileModal showModal={showInputModal} setShowModal={setShowInputModal}/>
    <TextModal input={input} setInput={setInput} showModal={showTextModal} setShowModal={setShowTextModal}/>
    
    </div>


  )
}

export default Profile