import React from 'react';
import { useState } from 'react';
import Clock from 'react-digital-clock';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Countdown from 'react-countdown';


const Npmdigital = ()=>{   

    
        const [startDate, setStartDate] = useState(new Date());

        const Completionist = () => <span>You are good to go!</span>;
    
     return(  
         <> 
         <div className='clock'> 
            <Clock />
            </div> 
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    
                    <Countdown date={Date.now() + 10000} /><br/>

                    <Countdown date={Date.now() + 5000}>
                        <Completionist />
                </Countdown>

            </>   
            );   
}

export default Npmdigital;