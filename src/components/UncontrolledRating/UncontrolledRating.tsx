import React, {useState} from "react";

type ValueType = 0 | 1 | 2 | 3 | 4 | 5

export function UncontrolledRating() {
    console.log("Rating rendering");

    const [value, setValue] = useState<ValueType>(0);

    return (
        <div>
            <Star selected={value > 0} onClick={() => setValue(1)}/>
            <Star selected={value > 1} onClick={() => setValue(2)}/>
            <Star selected={value > 2} onClick={() => setValue(3)}/>
            <Star selected={value > 3} onClick={() => setValue(4)}/>
            <Star selected={value > 4} onClick={() => setValue(5)}/>
        </div>
    )

}


type StarPropsType = {
    selected: boolean
    onClick: () => void
}

function Star({selected, onClick}: StarPropsType) {
    console.log("Star rendering");

    return (
        <span onClick={onClick}>{selected ? <b>star </b> : "star "}</span>
    )
}