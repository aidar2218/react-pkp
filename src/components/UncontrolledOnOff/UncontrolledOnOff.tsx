import React, {useState} from 'react';

type UncontrolledOnOffPropsType = {
    onChange: (value: boolean) => void;
    defaultMode?: boolean
}

export const UncontrolledOnOff = ({onChange, defaultMode}: UncontrolledOnOffPropsType) => {
    console.log("UncontrolledOnOff rendering")

    const [mode, setMode] = useState<boolean>(defaultMode ? defaultMode : false);

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

    const onClicked = () => {
        setMode(true);
        onChange(true);
    }
    const offClicked = () => {
        setMode(false);
        onChange(false);
    }

    return (
        <div>
            <h3>Uncontrolled OnOff</h3>
            <div style={onStyle}
                 onClick={onClicked}>
                On
            </div>
            <div style={offStyle}
                 onClick={offClicked}>
                Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

