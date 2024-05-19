import React from 'react'

export const AnchorSocial = (props) => {
  return (
    <a href={props.href}> <img className="w-[50px] " src={props.src} alt="img-logo"></img></a>
    
  )
}
