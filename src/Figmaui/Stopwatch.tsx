import React, { useEffect, useState } from 'react';

const Stopwatch = () => {

    const [time, settime] = useState(0)
    const [paus, setpaus] = useState(false)

    useEffect(() => {
      let interval:any;
      if(paus){
          interval = setInterval(() => settime((time) => time + 1),1000);
      }

      return () => clearInterval(interval);
    }, [paus])
    

    return (
        <div>
            {time}

            {!paus && (
                <button type='button' onClick={() => setpaus(true)}> Start </button>
            )}

            {paus && (
                <button type='button' onClick={() => setpaus(false)}> Stop </button>
            )}

        </div>
    );
};

export default Stopwatch;