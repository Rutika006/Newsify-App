import React, { Component } from 'react'
import Loading from './Loading.gif'
const Spinner = ()=> {
  
    return (
      <div className="text-center">
        <img src={Loading} alt="loading" width="50" height="50"/>
      </div>
    )
  
}

export default Spinner
