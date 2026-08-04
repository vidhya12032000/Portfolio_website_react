import React from 'react'
import image from '../assets/image.png'

const About = () => {
  return (
    <div className=' flex flex-col gap-15 aboutPage'>

<div> 
 
  <div>
    <h1 className='p-5 font-bold text-2xl text-white'>About me</h1>
  <p className='text-amber-200'>Hi, I'm Vidhya M, a passionate Frontend Developer with a strong
interest in building responsive and user-friendly web applications.

I have hands-on knowledge of <span className='text-white'>HTML, CSS, JavaScript, React,
Tailwind CSS, and React Router</span>. I enjoy creating clean and
responsive interfaces and continuously improving my frontend skills.

Currently, I am expanding my knowledge of Java and learning
Java Core as part of my journey towards becoming a Full Stack Developer.

I am looking for an opportunity where I can apply my frontend skills,
learn from experienced developers, and grow into a well-rounded
Full Stack Developer.</p>
  </div>

</div>

<div className=" flex justify-between gap-20 flex-wrap Educontainer">

  <div className="px-2 educationDetails ">

<h2 className='text-2xl text-white font-bold  py-5'>Education Details</h2>
<h1 className='text-xl text-blue-300' >Bachelor of Engineering <span className='font-bold'>(ECE)</span></h1>
<p className='text-amber-200'>Sri Venkateswaraa College Of Technology</p>



</div>
<img src={image} width="300" height='80'  />
</div>
    </div>
  )
}

export default About