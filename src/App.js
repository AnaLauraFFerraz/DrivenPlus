import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import { UserContext } from './context/UserContext'
import LoginPage from './pages/LoginPage'
import SignUpPage from "./pages/SignUpPage";
import Subscriptions from "./pages/Subscriptions";
import Home from "./pages/Home";


export default function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/subcriptions" element={<Subscriptions />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

