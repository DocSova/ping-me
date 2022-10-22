import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import "./style.css";
import { UserContext } from './context';

function App() {

  const [userEmail, updateUserEmail] = useState("NULL");
  const [userPassword, updateUserPassword] = useState("NULL");

  const UserContextEmail = useMemo(() => ({userEmail, updateUserEmail}), [userEmail]);
  const UserContextPassword = useMemo(() => ({userPassword, updateUserPassword}), [userPassword]);

  return (
    <UserContext.Provider value={[UserContextEmail,UserContextPassword]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LoginScreen />} />
          <Route path="/Loading" exact element={<LoadingScreen />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
} 

export default App;
