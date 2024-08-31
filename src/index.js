import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Home from './home'
import About from "./about"
import Cont from "./contact"
const root = ReactDOM.createRoot(document.getElementById('root'));
const cpath=window.location.pathname;

if(cpath=="/")
{
  root.render(<Home />);
}
else if(cpath=="/about")
  {
    root.render(<About />);
  }
  
else if(cpath=="/contact")
{
  root.render(<Cont />);
}
else{
  root.render(<>
  <h1>404 ERROR</h1>
  </> )
}



