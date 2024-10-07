import React, {useState} from 'react';

const generateData = () => {
    console.log("GenerateData");
    //... difficult counting
    return 5646423341;
}

export const UseStateComponent = () => {
    console.log("Example1");

    // const initValue = useMemo(generateData, []);
    // In this case we don't need hook useMemo
    const [counter, setCounter] = useState(generateData);

    // 1. const changer = (state: number) => state + 1; => 2
    // 2. () => setCounter(changer) in button

    return (
        <>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </>
    );
};