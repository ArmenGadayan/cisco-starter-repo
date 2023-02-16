import React, { useState, useEffect } from 'react'

const PublicIP = (props) => {
    const [IP, setIP] = useState(null);

    const API_endpoints = {
        "IPv4": "https://api.ipify.org?format=json",
        "IPv6": "https://api64.ipify.org?format=json"
    }

    useEffect(() => {
        getIP()
      }, [])

    let getIP = async () => {
        let API_Endpoint = API_endpoints[props.IP_type]
        let response = await fetch(API_Endpoint)
        let data = await response.json()
        setIP(data.ip)
    } 

  return (
    <div className="ipInfo">{IP}</div>
  )
}

export default PublicIP