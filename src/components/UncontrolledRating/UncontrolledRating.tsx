import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType
    callback?: () => void
}

export function UncontrolledRating({ defaultValue, callback }: UncontrolledRatingPropsType) {
    console.log("UncontrolledRating rendering");
    const [value, setValue] = useState<RatingValueType>(defaultValue ? defaultValue : 0);
    const callbackHandler = () => {
        if (callback !== undefined) {
            callback();
        }
    }
    return (
        <div>
            <h3>Uncontrolled Rating</h3>
            <Star selected={value > 0} setValue={() => {setValue(1); callbackHandler()}} />
            <Star selected={value > 1} setValue={() => {setValue(2); callbackHandler()}}/>
            <Star selected={value > 2} setValue={() => {setValue(3); callbackHandler()}}/>
            <Star selected={value > 3} setValue={() => {setValue(4); callbackHandler()}}/>
            <Star selected={value > 4} setValue={() => {setValue(5); callbackHandler()}}/>
        </div>
    )

}


type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star({selected, setValue}: StarPropsType) {
    console.log("Star rendering");

    return (
        <span onClick={setValue}>{selected ? <b>star </b> : "star "}</span>
    )
}