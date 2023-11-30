import React from 'react'
import { Heading } from '../common/Heading';
import { about } from '../data/dummydata';
import CV from "../CV.pdf"


export const About = () => {
  return (
    <>
      <section className='about'>
        <div className="container flex">
          {about.map((val, i)=>(
            <>
              <div className="left">
                <img src={val.cover} alt="" />
              </div>
              <div className="right">
                  <Heading title="About me" />
                  <p>{val.desc}</p>
                  <p>{val.desc1}</p>
                  <a href={CV} download="Shyngys cv.pdf">
                  <button>Download CV</button>
                  </a>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
