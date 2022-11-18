import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

/* Components */
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import { ChatApp } from './components/chatApp/ChatApp';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/auth/sign-in" element={<SignIn />} />
        <Route exact path="/auth/sign-up" element={<SignUp />} />
        <Route exact path="/" element={<ChatApp />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
