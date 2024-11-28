import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type ClockPropsType = {
    mode: "digital" | "analog"
}

export const Clock = ({mode}: ClockPropsType) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("tick")
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalID);
        }
    }, []);

    const view = mode === "digital" ? <DigitalClockView date={date}/> : <AnalogClockView date={date}/>

    return (
        <div>
            {view}
        </div>
    );
};


export type ClockViewPropsType = {
    date: Date
}