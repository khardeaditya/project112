import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import About from "./about"
import Cont from "./contact"
const root = ReactDOM.createRoot(document.getElementById('root'));
const cpath=window.location.pathname;

if(cpath=="/")
{
  root.render(<About/>);
}
else if(cpath=="/contact")
{
  root.render(<Cont />);
}



