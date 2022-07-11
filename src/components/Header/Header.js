import React, {useState} from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import '../../assets/stylesheets/header.css';
import DashboardLogo from '../../assets/images/dashboard/dashboardLogo.svg';
import HeaderLogo from '../../assets/images/HeaderTFLogo.svg';
import NotificationIcon from '../../assets/images/header/notificationButton.svg'
import AddIcon from '../../assets/images/AddButton.svg'
import Menu from '../../assets/images/Menu.svg'
import Dashboard from '../../assets/images/button_dashboardTop.svg'
import Inventory from '../../assets/images/button_inventory.svg'
import Market from '../../assets/images/button_market.svg'
import Profile from '../../assets/images/button_profile.svg'
import LogoutIcon from '../../assets/images/logoutIcon.svg'
import DashboardSelected from '../../assets/images/button_dashboardTopSelected.svg'
import InventorySelected from '../../assets/images/button_inventorySelected.svg'
import MarketSelected from '../../assets/images/button_marketSelected.svg'
import ProfileSelected from '../../assets/images/button_profileSelected.svg'
import { logout } from "../../features/user";

function Header() {
  const user = useSelector((state) => state.user.value);
  const [currentTab, setCurrentTab] = useState(4);
  const [loading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();

  const handleActiveTab = (index) => {
      setCurrentTab(prevIndex => index);
  }

  const handleToggleDropdown = (index) => {
    setCurrentTab(prevIndex => index);
  }

    setTimeout(() => {
    //   loader.style.display = "none";
      setIsLoading(false);
    }, 2500);

    const Logout = () => {
      dispatch(logout({username: '',password:''}))
      navigate('../login');
    }

  return (
    user?.username ? 
    <nav className= "grid grid-cols-5 h-14 justify-between bg-tfgreen ml-0">
      {/* <img className="hidden md:block h-20" id='HeaderLogo' alt='TFIcon' src={ user.username ? DashboardLogo : HeaderLogo } /> */}
        <div className="m-auto flex h-6 content-center justify-center col-span-1">
          <img className="ml-0" alt='TFIcon' src={ Menu } />
        </div>
        <div className="flex  items-center col-start-3 col-end-5 ">
          <h1 className="m-0 inline-flex items-baseline text-lg font-bold text-white">

            <div class="flex justify-center">
            <div>
              <div class="dropdown relative">
                <button
                  class="
                    dropdown-toggle
                    px-6
                    py-2.5
                    text-white
                    font-medium
                    text-xs
                    leading-tight

                  "
                  type="button"
                  id="dropdownMenuButton1d"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="m-0 inline-flex items-baseline text-lg font-bold text-white">
                  {user.username}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    class="w-2 m-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                  </svg>
                  </div>                
                {/* <img className=" content-center items-center h-7"  alt='NotificacitionIcon' src={ user.username ? NotificationIcon : NotificationIcon } /> */}
                </button>
                <ul
                  class="
                    dropdown-menu
                    min-w-max
                    absolute
                    hidden
                    bg-white
                    text-base
                    z-50
                    float-left
                    py-2
                    list-none
                    text-left
                    rounded-lg
                    shadow-lg
                    mt-1
                    hidden
                    m-0
                    bg-clip-padding
                    border-none
                  "
                  aria-labelledby="dropdownMenuButton1d"
                >
                  <li>
                    <a
                      class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                      
                      >Notification 1</a
                    >
                  </li>
                  <hr class="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                  <li>
                    <a
                      class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                      
                      >Notification 2</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
            </h1>
        </div>
        <div className="m-auto grid grid-cols-1 md:grid-cols-3 ">
          <div className="m-auto ">
          {/*TESTING*/}
          <div class="flex justify-center">
            <div>
              <div class="dropdown relative">
                <button
                  class="
                    dropdown-toggle
                    px-6
                    py-2.5
                    text-white
                    font-medium
                    text-xs
                    leading-tight

                  "
                  type="button"
                  id="dropdownMenuButton1d"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >                
                <img className=" content-center items-center h-7"  alt='NotificacitionIcon' src={ user.username ? NotificationIcon : NotificationIcon } />
                </button>
                <ul
                  class="
                    dropdown-menu
                    min-w-max
                    absolute
                    hidden
                    bg-white
                    text-base
                    z-50
                    float-left
                    py-2
                    list-none
                    text-left
                    rounded-lg
                    shadow-lg
                    mt-1
                    hidden
                    m-0
                    bg-clip-padding
                    border-none
                  "
                  aria-labelledby="dropdownMenuButton1d"
                >
                  <li>
                    <a
                      class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                      
                      >Notification 1</a
                    >
                  </li>
                  <hr class="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                  <li>
                    <a
                      class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                      
                      >Notification 2</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*TESTING*/}
          </div>
          {/* <img className="content-center items-center pt-3 h-10" alt='NotificacitionIcon' src={ user.username ? AddIcon : AddIcon } /> */}
          {/* <div className='m-auto hidden md:block'>
            <a onClick={()=> {handleActiveTab(1)}}>
                <img className=" w-20 h-6 content-center items-center"  alt='NotificacitionIcon' src={ currentTab === 1 ? MarketSelected :  Market } />
                <p className={ currentTab === 1 ?'mt-1 text-xs text-center font-bold text-white': 'mt-1 text-xs text-center font-bold text-tabsOff' }>Market</p>
            </a>
          </div>
          <div className='m-auto hidden md:block'>
            <a onClick={()=> {handleActiveTab(2)}}>
                <img className=" w-20 h-6 content-center items-center"  alt='NotificacitionIcon' src={ currentTab === 2 ? DashboardSelected :  Dashboard } />
                <p className={ currentTab === 2 ?'mt-1 text-xs text-center font-bold text-white': 'mt-1 text-xs text-center font-bold text-tabsOff' }>Dashboard</p>
            </a>
          </div>
          <div className='m-auto hidden md:block'>
            <a onClick={()=> {handleActiveTab(3)}}>
                <img className=" w-20 h-6 content-center items-center"  alt='NotificacitionIcon' src={ currentTab === 3 ? InventorySelected :  Inventory } />
                <p className={ currentTab === 3 ?'mt-1 text-xs text-center font-bold text-white': 'mt-1 text-xs text-center font-bold text-tabsOff' }>Inventory</p>
            </a>
          </div>
          <div className='m-auto hidden md:block'>
            <a onClick={()=> {handleActiveTab(4)}}>
                <img className=" w-20 h-6 content-center items-center"  alt='NotificacitionIcon' src={ currentTab === 4 ? ProfileSelected :  Profile } />
                <p className={ currentTab === 4 ?'mt-1 text-xs text-center font-bold text-white': 'mt-1 text-xs text-center font-bold text-tabsOff' }>Profile</p>
            </a>
          </div> */}
          
          <div className="m-auto hidden md:block">
          {/*TESTING*/}
          <div class="flex justify-center">
            <div>
              <div class="dropdown relative">
                <button
                  class="
                    dropdown-toggle
                    px-6
                    py-2.5
                    text-white
                    font-medium
                    text-xs
                    leading-tight

                  "
                  type="button"
                  id="dropdownMenuButton1d"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                
                 <div class="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg class="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
                </button>
                <ul
                  class="
                    dropdown-menu
                    min-w-max
                    absolute
                    hidden
                    bg-white
                    text-base
                    z-50
                    float-left
                    py-2
                    list-none
                    text-left
                    rounded-lg
                    shadow-lg
                    mt-1
                    hidden
                    m-0
                    bg-clip-padding
                    border-none
                  "
                  aria-labelledby="dropdownMenuButton1d"
                >
                  <li >
                    <div className="  ">
                    <a
                      class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                        flex flex-row
                      "
                      href="#"
                      >
                        <img className=" w-10 h-6 content-center items-center"  alt='NotificacitionIcon' src={ Market } />
                        Market                      
                      </a>
                    </div>

                  </li>
                  <li >
                    <div className="  ">
                    <a
                      class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                        flex flex-row
                      "
                      href="#"
                      >
                        <img className=" w-10 h-6 content-center items-center"  alt='NotificacitionIcon' src={ Dashboard } />
                        Dashboard                      
                      </a>
                    </div>

                  </li>
                  <li >
                    <div className="  ">
                    <a
                      class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                        flex flex-row
                      "
                      href="#"
                      >
                        <img className=" w-10 h-6 content-center items-center"  alt='NotificacitionIcon' src={ Inventory } />
                        Inventory                      
                      </a>
                    </div>

                  </li>
                  <li >
                    <div className="  ">
                    <a
                      class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                        flex flex-row
                      "
                      href="#"
                      >
                        <img className=" w-10 h-6 content-center items-center"  alt='NotificacitionIcon' src={ Profile } />
                        Profile                      
                      </a>
                    </div>

                  </li>
                  <hr class="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                  <li >
                    <div className="  ">
                    <a
                      class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                        flex flex-row
                      "
                      onClick={() => Logout()}
                      >
                        <img className=" w-10 h-6 content-center items-center"  alt='NotificacitionIcon' src={ LogoutIcon } />
                        Logout                      
                      </a>
                    </div>
 
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*TESTING*/}
          </div>


        </div>
        
        

    </nav>
    :
    !loading && location.pathname !== '/' ? 
    <nav class=" ml-0 relative sm:block hidden w-full flex flex-wrap items-center justify-between">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div class="overflow-hidden object-cover container-fluid bg-cover bg-center">
          <img className="ml-0 w-2/4" alt='TFIcon' src={ HeaderLogo } />
        </div>
      </div>
    </nav> 
    :
    <nav class=" ml-0 relative hidden w-full flex flex-wrap items-center justify-between">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div class="overflow-hidden object-cover container-fluid bg-cover bg-center">
          <img className="ml-0 w-2/4" alt='TFIcon' src={ HeaderLogo } />
        </div>
      </div>
    </nav>
  );
}
export default Header;
