import React from 'react';
import s from "./OnOff.module.css"

type OnOffPropsType = {
    mode: boolean
    changeMode: () => void
}

export const OnOff = ({mode, changeMode}: OnOffPropsType) => {
    return (
        <div className={s.boxForOnOff}>
            <span className={mode ? s.on : ""}
                  id={s.onOff}
                  onClick={() => changeMode()}
            >
                on
            </span>
            <span className={!mode ? s.off : ""}
                  id={s.onOff}
                  onClick={() => changeMode()}
            >
                off
            </span>
            <span className={mode ? s.on : s.off}
                  id={s.radio}>
            </span>
        </div>
    );
};

