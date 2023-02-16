import React from 'react'
import PublicIP from './PublicIP'

const Exhibit = (props) => {
  return (
    <div className="cardContainer">
        <div className="card">
            <div className="box">
                <div className="content">
                    <h2 className="cardTitle">{props.name}</h2>
                    {props.type === "IP" && <PublicIP IP_type={props.name}/> }
                </div>
            </div>
        </div>
  </div>
  )
}

export default Exhibit