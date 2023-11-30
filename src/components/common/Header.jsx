import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import { navlink } from '../data/dummydata';
import logomain from '../data/images/logomain.png';
import { Menu } from '@mui/icons-material';
export const Header  = () => {
  const [responsive, setResponsive] = useState(true)
  return (
    <>
      <header>
        <div className="container logo">
          <img src={logomain} alt="here should be logo" />
           <div className={responsive ? "nav" : "hideMenu"}>
            {navlink.map((links,i)=>(
              <Link to={links.url} key={i}>{links.text}</Link>
           ))}
          </div>
          <button className='toggle' onClick={()=> setResponsive(!responsive)} >
              <Menu className="icon" ></Menu>
          </button>
        </div>

       
      </header>
    </>
  )
}
