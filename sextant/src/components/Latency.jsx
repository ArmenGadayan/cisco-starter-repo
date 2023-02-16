import React, { useState, useEffect } from 'react'

const Latency = () => {
    const [timeSent, setTimeSent] = useState(null);

    const ws = new WebSocket("ws://localhost:55455");

    useEffect(() => {
        ws.onerror = function(){
            console.log('Error');
        }
        
        ws.onopen = function(){
            console.log("Connected");
        };        

        ws.onmessage = function(message){
            const data = JSON.parse(message.data);
            setTimeSent(data)
            console.log(data)
        }

      }, []) 

  return (
    <div className="latency">{Date.now() - timeSent}</div>
  )
}

export default Latency