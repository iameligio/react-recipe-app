import React from 'react'

export default function Header({ children, title, styleClass }) {
 return (
  <div>
   <header>
    <div className="container-fluid">
     <div className={`row align-items-center ${styleClass}`}>
      <div className="col text-center">
       <h1 className="text-light text-uppercase display-3 letter-spacing text-slanted">
        {title}
       </h1>
       {children}
      </div>
     </div>
    </div>
   </header>
  </div>
 )
}

Header.defaultProps = {
 title: "default title",
 styleClass: "header-hero"
}
