import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'
import '../assets/stylesheets/header.css';
import Menu from '../assets/images/Menu.svg'
import Dashboard from '../assets/images/button_dashboardTop.svg'
import Inventory from '../assets/images/button_inventory.svg'
import Market from '../assets/images/button_market.svg'
import Profile from '../assets/images/button_profile.svg'
import DashboardSelected from '../assets/images/button_dashboardTopSelected.svg'
import InventorySelected from '../assets/images/button_inventorySelected.svg'
import MarketSelected from '../assets/images/button_marketSelected.svg'
import ProfileSelected from '../assets/images/button_profileSelected.svg'

function Footer() {
    const user = useSelector((state) => state.user.value);
    const [currentTab, setCurrentTab] = useState(4);

    const handleActiveTab = (index) => {
        setCurrentTab(prevIndex => index);
    }
    
  return (
    <footer className="  md:hidden block grid grid-cols-4 gap-4 justify-items-center w-full h-20 fixed justify-between bottom-0 bg-tfgreen ">
      {/* <img className="hidden md:block h-20" id='HeaderLogo' alt='TFIcon' src={ user.username ? DashboardLogo : HeaderLogo } /> */}
        <div className='m-auto'>
            <a onClick={()=> {handleActiveTab(1)}}>
                <img className=" w-20 h-6 "  alt='NotificacitionIcon' src={ currentTab === 1 ? MarketSelected :  Market } />
                <p className={ currentTab === 1 ? 'mt-1 text-xs text-center font-bold text-white': 'mt-1 text-xs text-center font-bold text-tabsOff' }>Market</p>
            </a>

        </div>
        <div className='m-auto'>
            <a onClick={()=> {handleActiveTab(2)}}>
                <img className=" w-20 h-6 content-center items-center"  alt='NotificacitionIcon' src={ currentTab === 2 ? DashboardSelected :  Dashboard } />
                <p className={ currentTab === 2 ?'mt-1 text-xs text-center font-bold text-white': 'mt-1 text-xs text-center font-bold text-tabsOff' }>Dashboard</p>
            </a>
        </div>
        <div className='m-auto'>
            <a onClick={()=> {handleActiveTab(3)}}>
                <img className=" w-20 h-6 content-center items-center"  alt='NotificacitionIcon' src={ currentTab === 3 ? InventorySelected :  Inventory } />
                <p className={ currentTab === 3 ?'mt-1 text-xs text-center font-bold text-white': 'mt-1 text-xs text-center font-bold text-tabsOff' }>Inventory</p>
            </a>
        </div>
        <div className='m-auto'>
            <a onClick={()=> {handleActiveTab(4)}}>
                <img className=" w-20 h-6 content-center items-center"  alt='NotificacitionIcon' src={ currentTab === 4 ? ProfileSelected :  Profile } />
                <p className={ currentTab === 4 ?'mt-1 text-xs text-center font-bold text-white': 'mt-1 text-xs text-center font-bold text-tabsOff' }>Profile</p>
            </a>
        </div>    
    </footer>

  )
}

export default Footer