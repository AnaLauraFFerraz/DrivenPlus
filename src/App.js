import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
//import { useNavigate } from "react-router-dom";

import LoginPage from './pages/LoginPage'
import SignUpPage from "./pages/SignUpPage";
import Subscriptions from "./pages/Subscriptions";
import SubscriptionID from './pages/SubscriptionID'
import Home from "./pages/Home";

import UserContext from './contexts/UserContext'

export default function App() {

  const tokenOnLocalStorage = localStorage.getItem("token");

  const [token, setToken] = useState(tokenOnLocalStorage);

  //const navigate = useNavigate()

  // function loadToken() {
  //   if (tokenOnLocalStorage !== null) {
  //     setAndPersistToken(tokenOnLocalStorage);
  //     navigate("/home");
  //   } else {
  //     navigate("/");
  //   }
  // }

  function setAndPersistToken(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }

  return (
    <UserContext.Provider value={{ token, setToken, setAndPersistToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/subscriptions/:id" element={<SubscriptionID />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

