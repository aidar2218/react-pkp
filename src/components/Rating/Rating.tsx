import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


type RatingPropsType = {
    value: RatingValueType
    callback: (value: RatingValueType) => void
}

export function Rating({value, callback}: RatingPropsType) {
    console.log("Rating rendering");

    return (
        <div>
            <Star selected={value > 0} value={1} onClick={callback}/>
            <Star selected={value > 1} value={2} onClick={callback}/>
            <Star selected={value > 2} value={3} onClick={callback}/>
            <Star selected={value > 3} value={4} onClick={callback}/>
            <Star selected={value > 4} value={5} onClick={callback}/>
        </div>
    )

}


type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star({selected, value, onClick}: StarPropsType) {
    console.log("Star rendering");

    return (
        <span onClick={() => onClick(value)}>{selected ? <b>star </b> : "star "}</span>
    )
}