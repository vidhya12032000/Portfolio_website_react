import React from 'react'

import portfolio from "../assets/portfolio.jpg"
import quiz from "../assets/quiz.jpeg"
import ecommerce from "../assets/ecommerce.webp"
import netflix from "../assets/netflix.png"

const Project = () => {

  const projects=[
    {
      title:"E-Commerce Website",
      tech:"Html,Css,ReactJs,React Router,ReactHooks",
      image:ecommerce,
      link:"https://shopping-time-react-e-commerce-shop.vercel.app/"
    },

    {
      title:"NetFlix Clone",
      tech:"Html,Css,ReactJs,React Router,ReactHooks",
      image:netflix,
      link:"https://netflix-clone-react-two-flax.vercel.app/"
    },
      {
      title:"PortFolio",
      tech:"Html,Css,ReactJs,React Router,Tailwind CSS",
      image:portfolio,
      link:"https://portfolio-website-react-beige.vercel.app/"
    },
      {
      title:"Quiz App",
      tech:"Html,Css,ReactJs,React Router,ReactHooks",
      image:quiz,
      link:"https://quiz-app-react-brown.vercel.app/"
    }

  ]
  return (
    <div className=' flex flex-col gap-10 projectPage text-center'>
      <h1 className='text-white text-2xl py-2'>My Projects</h1>
      <div className='text-white flex text-xl justify-center  gap-10 gitlink'>
        <a href='https://github.com/vidhya12032000?tab=repositories' className=' bg-amber-500 px-5 py-2'>Github Link</a>
      <a href='https://dev.to/vidhya_murali_5aabe7784bd' className=' bg-amber-500 px-5 py-2'>Dev.to Blogs</a></div>
      <div className="flex flex-row justify-center gap-8 flex-wrap projectContainer">

        {
projects.map((project,index)=>{
  return(

    <div key={index+1} className="w-[310px] min-h-[300px] text-center p-5 text-white flex flex-col gap-5 projectItem" >
<img src={project.image}  />
      <h2 className='text-xl text-green-400 font-bold'>{project.title}</h2>
      <p className='font-extrabold'>{project.tech}</p>
   <a href={project.link}  className='text-2xl text-red-600 font-bold'>Live demo</a>
      </div>
  )
})
        }
      </div>
    
    </div>
  )
}

export default Project