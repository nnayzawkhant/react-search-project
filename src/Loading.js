import React from 'react'
import spinner from './img/spinner.gif';

function Loading() {
  return (
    <div><img src={spinner} className="spinner"/></div>
  )
}

export default Loading;