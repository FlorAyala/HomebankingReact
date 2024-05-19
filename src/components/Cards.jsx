import React from 'react'

const Cards = (props) => {
  return (
    <section>
    <h2>{props.text}</h2>
    <img className="w-[250px] " src={props.src} alt="img-logo"></img>
    <img className="w-[250px] " src={props.src1} alt="img-logo"></img>
    <img className="w-[250px] " src={props.src2} alt="img-logo"></img>
    
  </section>
  )
}

export default Cards