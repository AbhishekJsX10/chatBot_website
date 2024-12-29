import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import { TypeAnimation } from 'react-type-animation';

const Homepage = () => {

  const [typeStatus, setTypeStatus] = useState("human1")

  return (
    <div className='homepage flex items-center h-screen gap-[100px] justify-between'>
      {/* <Link to="/dashboard">Dashboard</Link> */}
      <img src="./orbital.png" className=' orbital absolute bottom-0 left-0 opacity-[0.1]' alt="" />
      <div className="bg-transparent z-[5] left flex-1 flex flex-col items-center justify-center gap-[16px] text-center ">
        <h1 className='text-[128px] h1'>LAMA AI</h1>
        <h2>AI for Everyone</h2>
        <h3 className="h3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error repellat ex temporibus voluptatem exercitationem dolorem molestiae, enim incidunt tempore quibusdam.</h3>
        <Link to="/dashboard" className='start-button'>Get Started</Link>
      </div>
      <div className="right flex-1 flex items-center justify-center">
        <div className="wrapper relative">
          <div className="imgContainer relative flex items-center justify-center bg-[#140e2d] rounded-[50px] w-[500px] h-[400px] overflow-hidden">
            <div className="bgContainer absolute inset-0">
              <div className="back"></div>
            </div>
            <img src="./bot.png" className='bot w-[80%] h-[80%] object-contain relative z-10' alt="" />
          </div>
          <div className="chat z-[10] absolute right-[0px] bottom-[-10px] flex items-center gap-[10px] p-[20px] bg-[#2c2937] rounded-[10px]" >
            <img src={typeStatus === "human-1" ? "./human1.jpeg" : typeStatus === "human2" ? "./human2.jpeg" : "./bot.png" } className="w-[40px] h-[40px] rounded-[50%] object-cover"  alt="" />
            <TypeAnimation
              sequence={[
                'We produce food for Mice!!',
                2000,()=>{
                  setTypeStatus("bot")
                },
                'We produce food for Hamsters!!',
                2000,()=>{
                  setTypeStatus("human2")
                },
                'We produce food for Guinea Pigs!!',
                2000,()=>{
                  setTypeStatus("bot")
                },
                'We produce food for Chinchillas!!',
                2000,()=>{
                  setTypeStatus("human1")
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms absolute bottom-[20px] left-[50%] translate-x-[-50%] flex flex-col items-center gap-[20px]">
        <img src="./logo.png" className="w-[25px] h-[25px] ml-[3rem]" alt="" />
        <div className="links flex gap-[10px] text-[#888] text-[12px]">
          <Link to="/" className='text-xl'>Terms & Conditions</Link>
          <span className='text-xl'>|</span>
          <Link to="/" className='text-xl'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage