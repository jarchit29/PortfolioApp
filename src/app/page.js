import Image from "next/image";
import Button from "./Components/Button";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import { Analytics } from '@vercel/analytics/react';
import Footer from "./Components/Footer";
import UserDashBoard from "./Nischay/UserDashBoard";
import NavBarS from "./Nischay/NavBarS";
import Blogs from "./Pages/Blogs";


export default function Home() {
  return (
    <div >

      <NavBar />

      <HomePage />

      {/* <Blogs/>  */}

      <Analytics />

      <Footer />


      {/* 
      <NavBarS />
      <UserDashBoard /> */}


      

    </div>

  );
}
