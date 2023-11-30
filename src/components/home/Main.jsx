import React from 'react'
import { home } from '../data/dummydata'
import Typewriter from 'typewriter-effect'
import CV from '../CV.pdf'
export const Main = () => {
  return (
    <div>
      <section className='main'>
        {home.map((val,i)=>(
          <div className="mainContainer">
             <h3>{val.text}</h3>
             <h1>
              <Typewriter options = {{strings: [`${val.name}`, `${val.post}` ],
              autoStart:true, loop:true  }} /> 
            </h1>
            <p>{val.desc}</p> <a href={CV} download="Shyngys cv.pdf">
            <button className='primaryBtn' >Download CV</button>
            </a>
            
             
          </div>
        ))}
      </section>
    </div>
  )
}
