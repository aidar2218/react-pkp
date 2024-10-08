import React, {useEffect, useState} from 'react';

export const UseEffectComponent = () => {
    console.log("UseEffectComponent rendering");
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        console.log("useEffect works every render");
        document.title = counter.toString();
        // api.getUsers().then("")
        // setInterval
        // indexedDB
        // document.getElementById
        // document.title = "User"
    });
    useEffect(() => {
        console.log("useEffect works only first render (componentsDidMount)");
        document.title = counter.toString();
    }, []);
    useEffect(() => {
        console.log("useEffect works first render and every counter change");
        document.title = counter.toString();
    }, [counter]);
    return (
        <>
            Hello, counter: {counter}, fake: {fake}
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
            <button onClick={() => setFake(fake + 1)}>fake+</button>
        </>
    );
};

export const SetTimeoutUseEffect = () => {
    console.log("SetTimeOutUseEffect rendering");
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            console.log("setTimeout");
            document.title = counter.toString();
        }, 2000);
    }, [counter]);

    return (
        <>
            Hello, counter: {counter}, fake: {fake}
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
            <button onClick={() => setFake(fake + 1)}>fake+</button>
        </>
    )
}

export const SetIntervalUseEffect = () => {
    console.log("SetIntervalUseEffect rendering");
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        setInterval(() => {
            console.log("tick");
            setCounter((state) => state + 1);
        }, 1000);
    },[]);

    return (
        <>
            Hello, counter: {counter}, fake: 0
        </>
    )
}