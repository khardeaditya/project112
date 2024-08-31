import React from 'react'
import Nav from './nav'
import Img from "./contact.png"
function home() {
  return (
    <div>
      <Nav/>
      <h1>Home Page</h1>
        <img src={Img}  style={{height:'500px'}}/>
    </div>
  )
}
<img src={Img} style={{height:'500px'}}/>
export default home
