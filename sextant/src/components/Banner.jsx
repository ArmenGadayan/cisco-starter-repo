import React from 'react'

const Banner = (props) => {
  return (
    <div>
        <header className="bannerHeader">  
            <h1 className="banner">{props.title}</h1>
        </header>
    </div>
  )
}

export default Banner