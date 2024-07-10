import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUpDonor from './SignUpDonor';
import AccountPage from './AccountPage';
const AppRouter = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUpDonor />} />
        <Route path="/AccountPage" element={<AccountPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
