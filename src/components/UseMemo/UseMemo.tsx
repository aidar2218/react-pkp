import React, {useMemo, useState} from 'react';

export const UseMemo = () => {

    const [a, setA] = useState(5);
    const [b, setB] = useState(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while(fake < 1000000000) {
                fake++;
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return (
        <>
            <input type="number" value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input type="number" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </>
    );
};