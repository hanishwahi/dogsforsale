import React, { useState, useEffect } from 'react'

function Record() {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter1 === 1000) {
                setCounter1(counter1);
             }
            else {
                setCounter1((counter1) => counter1 + 1);                
            }
        }, 5);

        return () => {
            clearInterval(interval);
        };
    }, [counter1]);


   
    useEffect(() => {
        const interval2 = setInterval(() => {
            if (counter2===95) {
                setCounter2(counter2)
            }
            else {
                setCounter2((counter2) => counter2 + 1);
                
            }
        }, 50);

        return () => {
            clearInterval(interval2);
        };
    }, [counter2])

    useEffect(() => {
        const interval3 = setInterval(() => {
            if (counter3===570) {
                setCounter3(counter3)
            }
            else {
                setCounter3((counter3) => counter3 + 1);
                
            }
        }, 10);

        return () => {
            clearInterval(interval3);
        };
    }, [counter3])
    
 return (
        <>

            <div className='container-fluid py-md-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-4 text-center'>
                            <div className="Counter-1">{counter1}+</div>
                            <div className='record-004'><h2>Dogs Delivered</h2></div>
                        </div>
                        <div className='col-lg-4 col-sm-4 text-center'>
                          <div className="Counter-1">{counter2}%</div>
                            <div className='record-004'><h2>Positive feedback</h2></div>
                        </div>
                        <div className='col-lg-4 col-sm-4 text-center'>
                        <div className="Counter-1">{counter3}</div>
                            <div className='record-004'><h2>Happy Families</h2></div>
                        </div>
                        </div>
                    </div>
                </div>
            


        </>
    )
}

export default Record
