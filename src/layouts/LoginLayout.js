import React, { createContext } from 'react';
import { Outlet } from "react-router-dom";
import Header from "../components/HeaderCompnents/Header";
import BackToTop from "../components/BackToTop";
import Footer from '../components/Footer';
import PageNotFound from '../components/PageNotFound';

export const usernameContext = createContext();

const LoginLayout = () => {
  const user = JSON.parse(sessionStorage.getItem('user')) || null; 
  const username = user?.username || ''; 
  
  return (
    <div className="bg-white">
      {
        user ? (
          <usernameContext.Provider value={username}>
            <Header />
            <main>
              <Outlet />
            </main>
            <BackToTop />
            <Footer />
          </usernameContext.Provider>
        ) : (
          <PageNotFound />
        )
      }
    </div>
  );
}

export default LoginLayout;
