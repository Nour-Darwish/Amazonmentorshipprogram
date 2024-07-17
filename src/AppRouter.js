import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import AccountPage from './AccountPage';
import HomePage from './HomePage';
import DonationForm from './DonationForm'
const AppRouter = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AccountPage" element={<AccountPage/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/DonationForm" element={<DonationForm/>}/>
        <Route path="/SendPasswordResetLink" element={<SendPasswordRestLink/>}/>
        <Route path="/PasswordResst" element={<PasswordReset/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
