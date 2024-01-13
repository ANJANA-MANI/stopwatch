import React, { useState, useEffect } from 'react'
import Icon from '@mui/material/Icon';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Button from '@mui/material/Button';
function Counter() {
    const [counter, setCounter] = useState(0)
    const [limit, setLimit] = useState(true)


    useEffect(() => {
        let intervalId;

        if (limit) {
            intervalId = setInterval(() => {
                setCounter((i) => i + 1);
            }, 1000);
        }

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [limit]);

    const reset = () => {
        setCounter(0);
        setLimit(true);
    };

    const stop = () => {
        setLimit(false);
    };
    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${hours}:${minutes}:${seconds}`;
    };


    return (

        <div className="counter" style={{
            position: "relative", width: "400px", height: "400px",
            backgroundImage: "url(clock.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            margin:"auto",
            
            marginTop:"10px"
            
        }}>

            <div className="time"
                style={{
                    position: "absolute", backgroundColor: "#ABB2B9",
                    width: "180px", height: "85px", marginLeft: "110px", marginTop: "155px", borderRadius: "5px"
                }}>
                <h1 style={{ textAlign: "center", padding: "20px", color: "#0B5345" }}>{formatTime(counter)}</h1>
            </div>
            <div className="time"
                style={{backgroundColor: "pink",
                    position: "absolute",
                     marginLeft: "50px", marginTop: "40px"
                }}>
                <Button  variant="text"style={{ position: "absolute",width:"80px",height:"60px" }} onClick={stop}></Button>

            </div>
            <div className="time"
                style={{backgroundColor: "yellow",
                    position: "absolute",
                     marginLeft: "162px", marginTop: "35px"
                }}>
                <Button variant="text" style={{ position: "absolute",width:"75px",height:"50px" }} onClick={reset}></Button> 

            </div>
            <div className="time"
                style={{backgroundColor: "pink",
                    position: "absolute",
                     marginLeft: "290px", marginTop: "40px"
                }}>
                <Button  variant="text" style={{ position: "absolute",width:"80px",height:"60px" }}onClick={stop}></Button>

            </div>
         


            

        </div>

    )
}

export default Counter