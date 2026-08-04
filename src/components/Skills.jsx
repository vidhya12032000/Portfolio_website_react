import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import JavaScript from '../assets/js.png'
import Reactjs from '../assets/atom.png'
import tailwind from '../assets/css.png'

const Skills = () => {
  return (
    <div className='skills'>

       <h1 className='text-3xl font-bold text-center p-10 text-red-700 '>Technical Skills</h1>
    <div className=' flex justify-center gap-15 flex-wrap items-center '>
     
<div className="technology">
<h2 className='text-xl py-5 text-center font-extrabold'>Front-End Technologies</h2>

<ul className=' flex flex-col justify-between gap-5 text-center skillsList'>
  <li className='flex gap-3 p-2 items-center justify-center'><img src={html} width="25" height='25' /><h3>HTML5</h3></li>
  <li className='flex gap-3 p-2 items-center justify-center'><img src={css}  width="25" height='25' /><h3>CSS3</h3></li>
  <li className='flex gap-3 p-2 items-center justify-center'><img src={JavaScript}  width="25" height='25' /><h3>JAVASCRIPT</h3></li>
  <li className='flex gap-3 p-2 items-center justify-center'><img src={Reactjs}  width="25" height='25' /><h3>REACT</h3></li>
  <li className='flex gap-3 p-2 items-center justify-center'><img src={tailwind}  width="25" height='25' /><h3>TAILWINDCSS</h3></li>
</ul>
</div>
<div className="technology">
<h2 className='text-2xl py-5 text-center font-extrabold'>Tools</h2>

<ul className='text-center flex flex-col justify-between gap-5  text-pink-700  font-bold skillsList' >
  <li>VsCode</li>
  <li>Vite</li>
  <li>GitHub</li>
  <li>Material UI</li>
  <li>IntellIJ idea</li>
</ul>


</div>

     
    </div>
    </div>
  )
}

export default Skills