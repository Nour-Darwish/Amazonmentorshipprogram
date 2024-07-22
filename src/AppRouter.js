import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import AccountPage from './AccountPage';
import HomePage from './HomePage';
import DonationForm from './DonationForm';
import SendPasswordResetLink from './SendPasswordResetLink';
import PasswordReset from './PasswordReset'
import DonationFeed from './DonationFeed';
import DonationConfirmation from './RequestConfirmation';
import SuccessConfirmation from './SuccessConfirmation';
import EditDonation from './EditDonation';
import ThankYou from './ThankYou';

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
        <Route path="/SendPasswordResetLink" element={<SendPasswordResetLink/>}/>
        <Route path="/PasswordReset" element={<PasswordReset/>}/>
        <Route path="/DonationFeed" element={<DonationFeed/>}/>
        <Route path="/DonationConfirmation" element={<DonationConfirmation/>}/>
        <Route path="/SuccessConfirmation" element={<SuccessConfirmation/>}/>
        <Route path="/EditDonation" element={<EditDonation/>}/>
        <Route path="/ThankYou" element ={<ThankYou/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
