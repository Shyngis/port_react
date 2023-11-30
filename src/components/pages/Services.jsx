import React from 'react'
import { Heading } from '../common/Heading'
import { services } from '../data/dummydata'

export const Services = () => {
  return (
    <>

    <Heading title="Services" />
      <section className='services'>
      <div className="container">
        
          <div className="content grid3">
          {services.map((item)=>(
              <div className="box">
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
          ))}
        </div>
      </div>
      </section>
    </>
  )
}
