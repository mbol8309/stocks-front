import React from 'react';
import { TextField } from '@mui/material';
import { LoginPage } from './features/Auth/login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Authenticated from './features/Auth/Authenticated';
import BasePage from './features/Base/BasePage';
import Logout from './features/Auth/logout';
import RegisterPage from './features/Auth/register';
import ProfilePage from './features/Profile/ProfilePage';
import { main_routes, unauthenticated_routes } from "./app/config/routes";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {unauthenticated_routes.map((route)=>(
          <Route key={route.label} path={route.path} element={<route.component />} />
        ))}
        <Route element={<Authenticated />}>
          <Route path='/' element={<BasePage />}>
            {main_routes.map((route)=>(
              <Route key={route.label} path={route.path} element={<route.component />} />
            ))}
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
