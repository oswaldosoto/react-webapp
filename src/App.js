import React,{ useState } from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Welcome from './components/Onboarding/Onboarding'
import Login from './components/Login/Login'
import PreRegister from './components/Register/PreRegister'
import Register from './components/Register/Register'
import RegisterFirst from './components/Register/RegisterFirst'
import RegisterSecond2 from './components/Register/RegisterSecond2'
import RegisterSecond from './components/Register/RegisterSecond'
import RegisterThird from './components/Register/RegisterThird'
import RegisterFourth from './components/Register/RegisterFourth'
import RegisterFourth1 from './components/Register/RegisterFourth1'
import RegisterFifth from './components/Register/RegisterFifth'
import Onboarding from './components/Onboarding/Onboarding'
import OnboardingFirst from './components/Onboarding/OnboardingFirst'
import OnboardingSecond from './components/Onboarding/OnboardingSecond'
import OnboardingThird from './components/Onboarding/OnboardingThird'
import OnboardingFourth from './components/Onboarding/OnboardingFourth'
import OnboardingFifth from './components/Onboarding/OnboardingFifth'
import OnboardingSixth from './components/Onboarding/OnboardingSixth'
import Dashboard from './components/Dashboard/Dashboard'
import Profile from './components/Profile/Profile'
import ProfileWeb from './components/Profile/ProfileWeb'
import Password from './components/PasswordRecovery/Password'
import NotFound from './components/NotFound/NotFound'
import Protected from './Auth/PublicRoutes'
import './assets/stylesheets/slideIn.css'; //Separate .css files for development stage
import Header from './components/Header/Header'
import Alert from './components/Alert'
import Preloader from './components/Preloader'
import PublicRoutes from './Auth/PublicRoutes';
import ProtectedRoutes from './Auth/RequireAuth';


function App() {

  return (
      <Routes>
        <Route element={ <PublicRoutes />}>
        {/*Public routes*/}
          <Route element={ <Preloader/> }>
            <Route path="/" element={ <Welcome/> } />
          </Route>
        
          <Route path="login" element={<Login/>} />
          <Route path="password-recovery" element={<Password/>} />
          <Route path="register" element={<Register/>} />
          <Route index path="preregister" element={<PreRegister/>} />          
          <Route path="register/1" element={<RegisterFirst/>} />
          <Route path="register/2" element={<RegisterSecond/>} />
          <Route path="register/21" element={<RegisterSecond2/>} />
          <Route path="register/3" element={<RegisterThird/>} />
          <Route path="register/41" element={<RegisterFourth/>} />
          <Route path="register/4" element={<RegisterFourth1/>} />
          <Route path="register/5" element={<RegisterFifth/>} />
          <Route path="onboarding/1" element={<OnboardingFirst/>} />
          <Route path="onboarding/2" element={<OnboardingSecond/>} />
          <Route path="onboarding/3" element={<OnboardingThird/>} />
          <Route path="onboarding/4" element={<OnboardingFourth/>} />
          <Route path="onboarding/5" element={<OnboardingFifth/>} />
          <Route path="onboarding/6" element={<OnboardingSixth/>} />
          {/* <Route path="profile" element={<Profile/>} /> */}
          
        
        </Route>
        {/*Private routes*/}
        <Route element={<ProtectedRoutes/>}>          
          <Route path="dashboard" element={<Dashboard />} />          
          <Route path="profile" element={<Profile />} />
        </Route>
        {/*Catch all*/}
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      

  );
}

export default App;