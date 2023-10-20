import { useEffect, useState } from 'react'

import { Route, Routes } from 'react-router-dom';
import { Main } from "./Component/Main";
import './App.css';
import { Navbar } from "./Component/Navbar";
import { Homep } from "./Pages/Homep";
import { Moviesp } from "./Pages/Moviesp";
import { Searchp } from "./Pages/Searchp"
import { Loginpage } from "./Pages/Loginpage";
import { MovieDetailsp } from "./Pages/MovieDetailsp";
import { Signuppage } from "./Pages/Signuppage";
import { NotFoundp } from "./Pages/NotFoundp";
import { PotectMovie } from './Component/PotectMovie';


function App() {




  const [isloggedin, setIsloggedin] = useState(false)


  return (
    <div className=" flex flex-col  w-screen h-screen overflow-x-hidden">


      <Navbar setIsloggedin={setIsloggedin} isLoggedin={isloggedin}></Navbar>

      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Homep />}></Route>
          <Route path="/Movies/:type" element={
            <PotectMovie isloggedin={isloggedin}>
              <Moviesp setIsloggedin={setIsloggedin} isloggedin={isloggedin} />
            </PotectMovie>}>
          </Route>

          <Route path="/Movie/:id" element={<MovieDetailsp isLoggedin={isloggedin} />}></Route>
          <Route path="/Login" element={<Loginpage setIsloggedin={setIsloggedin} isloggedin={isloggedin} />}></Route>
          <Route path="/Sigup" element={<Signuppage setIsloggedin={setIsloggedin} isloggedin={isloggedin} />}></Route>
          <Route path="*" element={<NotFoundp />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
