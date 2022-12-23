import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { UserContext } from './UserContext';

import LoginPage from './pages/LoginPage'
import SignUpPage from "./pages/SignUpPage";
import Subscriptions from "./pages/Subscriptions";
import Home from "./pages/Home";


function App() {
  return (
    <UserContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/subcriptions" element={<Subscriptions />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
