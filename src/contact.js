import React from 'react'
import Nav from "./nav"

import Img from "./contact.png"
function contact() {
  return (
    <div>
      <Nav/>
      <h1>Contact Page</h1>
      <img src={Img} style={{height:'500px'}} />
    </div>
  )
}

export default contact
