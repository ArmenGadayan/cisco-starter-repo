import React from 'react'

const Exhibit = (props) => {
  return (
    <div className="cardContainer">
        <div className="card">
            <div className="box">
                <div className="content">
                    <h2 className="cardTitle">{props.name}</h2>
                    <p className="cardInfo">{props.info}</p>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Exhibit