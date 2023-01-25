import React from "react";
import { Routes, Route } from 'react-router-dom';
import LogIn from './LogInComponent';


function Main() {

    return (
      <div>
        <Routes>
          <Route path="/" element={<LogIn />} />
        </Routes>
      </div>
    );
  }
  
    
export default Main;