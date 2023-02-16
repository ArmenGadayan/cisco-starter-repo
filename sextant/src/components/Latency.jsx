import React, { useState, useEffect } from 'react'

const Latency = () => {
    const [latency, setLatency] = useState(null);

    const ws = new WebSocket("ws://localhost:55455");

    useEffect(() => {     
        ws.onmessage = function(message){
            const data = JSON.parse(message.data);
            setLatency(Date.now() - data)
        }

      }, []) 

  return (
    <div className="latency">{latency}</div>
  )
}

export default Latency