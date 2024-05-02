import React, {useState} from 'react';

type OnOffPropsType = {
    // mode: boolean
    // changeMode: () => void
}

export const OnOff = ({}: OnOffPropsType) => {
    console.log("OnOff rendering")

    const [mode, setMode] = useState(true);

    console.log("Mode is " + mode);


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: "inline-block",
        padding: '2px',
        backgroundColor: mode ? 'lightGreen' : 'white',
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: "inline-block",
        marginLeft: "1px",
        padding: '2px',
        backgroundColor: mode ? 'white' : 'red',
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: mode ? 'lightGreen' : 'red',
    };

    return (
        <div>
            <div style={onStyle}
                 onClick={() => setMode(true)}>
                On
            </div>
            <div style={offStyle}
                 onClick={() => setMode(false)}>
                Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
