import React from 'react';
import { TextField } from '@mui/material';
import { LoginPage } from './features/Auth/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authenticated from './features/Auth/Authenticated';



function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/" element={
          <Authenticated>
            <p>authenticated</p>
          </Authenticated>
        }/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
