import React from 'react';
import HomeImage from "../../assets/images/home-image.gif";
import PrimaryButton from "../../components/PrimaryBtn";

function Hero() {
  return (
<>
    <div className='flex flex-row mt-10 '>
      <div className='space-y-6  w-[50%] mt-24'>
        <h1 className="text-primary text-4xl font-bold">
          WE ARE THINKING BEYOND <span className="text-secondary">TODAY</span>
        </h1>
        <p className="text-primary text-xl">Why would you choose to sell for just some decades; if you have the chance to build a brand name that can last long for centuries?</p>
        

          <PrimaryButton>More Details</PrimaryButton> 

      </div>
      <div className=' w-[90%]'>
        <img src={HomeImage} alt="home" />
      </div>
    </div>
</>
  )
}
export default Hero