import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import {useSelector} from 'react-redux';
import userReducer from '../features/user';
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar'
        const useAuth=()=> {
        const user = useSelector((state) => state.user.value)
        return user;
        //use redux user slice
    }

    const PublicRoutes = () => {
        const user = useSelector((state) => state.user.value)
        const location = useLocation();
    
        // const auth =useAuth();
        return (
            user?.username
            ?(<>
            <Header/>
            {/* <Sidebar/> */}
            <Navigate to="/profile" state={{from: location}} replace />
            </>) 
            :
            (<>
                <Header/>
                {/* <Sidebar/> */}
                <Outlet/>
                </>)
            
                
            
        )

         
    };

export default PublicRoutes;