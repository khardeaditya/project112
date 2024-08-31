import React from 'react'
import Nav from './nav'
import "./about.css"
import Abu from "./logo.svg"
const card = {
  border: "4px double black",
  backgroundColor: "yellow",
  borderRadius: "20px",
  padding: "10px",
  margin: "10px",
};

function about() {
  return (
  <>
    <div style={card}>
      <Nav/>
      <h1>About page</h1>
      <h2 >This is a About Page</h2>
    </div>
    <img src={Abu} style={{height:'500px'}} />
  </>
  )}

export default about
