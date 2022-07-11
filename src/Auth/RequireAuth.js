import { useLocation, Navigate, Outlet } from "react-router-dom";
import {useSelector} from 'react-redux';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'

const RequireAuth = () => {
    const user = useSelector((state) => state.user.value)
    const location = useLocation();

    // const useAuth=()=> {
    //     return user;
    //     //use redux user slice
    // }

    return (
        user?.username
            ? (<>
            <Header/>
            <Outlet/>
            <Footer/>
            </>)
            :
            <Navigate to="/login" state={{from: location}} replace />
    );
}

export default RequireAuth;