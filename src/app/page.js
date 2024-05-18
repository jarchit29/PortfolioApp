import Image from "next/image";
import Button from "./Components/Button";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import { Analytics } from '@vercel/analytics/react';


export default function Home() {
  return (
  <div >

    <NavBar/>
    
    <HomePage/>
    
    <Analytics />
    
  </div>  
  
  );
}
