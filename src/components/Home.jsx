import React from 'react'
// import heroBG from '../assets/heroBG.jpg';
import { FaGithubSquare,FaDev, FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const Home = () => {
 let navigate= useNavigate();
  return (
    <div className='homepage'>

     <div>
      <p className='text-xl text-white font-bold py-5' >Hi there , Welcome to my site</p>
     <h1 className="text-2xl md:text-3xl text-white pb-10">

   I am Vidhya 

 <p className="py-5 text-2xl md:text-4xl font-bold text-[#FF0642] text-shadow-amber-600">
  Frontend Developer | Aspiring Java Full Stack Developer
</p>
</h1>
      {/* <img src={heroBG} /> */}
     </div>
     <div className='flex flex-row gap-x-8 py-10 '>

      <a href='https://github.com/vidhya12032000?tab=repositories' target='_blank' className=" hover:text-white transition duration-300"><FaGithubSquare size={35} /></a>
      <a href='https://dev.to/dashboard' className=" hover:text-white transition duration-300" target="_blank" ><FaDev size={35} /></a>
      <a href='https://www.linkedin.com/in/vidhya-m-347187191/ ' target="_blank" className=" hover:text-white transition duration-300"><FaLinkedin size={35} /></a>
     
     
     </div>

     <div className='flex gap-12  pr-10 py-8 buttons'>

      <button onClick={()=>navigate('/contact')} >Contact me</button>
      <a
  href="/Vidhya_Murali_Resume_Updated.pdf"
  download="Vidhya_Murali_Resume_Updated.pdf"
  className="bg-blue-600 text-white px-8 py-3 rounded-2xl "
>
  Download Resume
</a>
     </div>
    </div>
  )
}

export default Home