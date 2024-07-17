import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUpDonor from './SignUpDonor';
import AccountPage from './AccountPage';
import HomePage from './HomePage';
import DonationForm from './DonationForm'
const AppRouter = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUpDonor" element={<SignUpDonor />} />
        <Route path="/AccountPage" element={<AccountPage/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
