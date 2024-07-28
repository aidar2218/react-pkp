import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from "./Select.module.css"

export type ItemType = {
    id: any
    title: string
}

type SelectPropsType = {
    value?: any
    onChange: (id: any) => void
    items: ItemType[]
}

export const Select = ({value, onChange, items}: SelectPropsType) => {

    const [active, setActive] = useState(true);
    const [hoveredElementValue, setHoveredElementValue] = useState(value);

    const selectedItem = items.find(item => item.id === value);
    const hoveredItem = items.find(item => item.id === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(value);
    }, [value]);

    const toggleItems = () => setActive(!active);
    const onItemClick = (id: string) => {
        onChange(id);
        toggleItems();
    }
    const onKeyUpHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === hoveredElementValue) {
                    const contenderElement = event.key === "ArrowDown"
                        ? items[i + 1]
                        : items[i - 1];
                    if (contenderElement) {
                        onChange(contenderElement.id);
                        break;
                    }
                }
            }
            if (!selectedItem) {
                onChange(items[0].id);
            }
        }
        if (event.key === "Enter" || event.key === "Escape") {
            setActive(false);
        }
    }

    return (
        <div className={s.select}
             tabIndex={0}
             onKeyUp={onKeyUpHandler}>
                <span className={s.main}
                      onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </span>
            {
                active &&
                <div className={s.items}>
                    {items.map(item =>
                        <div key={item.id}
                             onMouseEnter={() => {setHoveredElementValue(item.id)}}
                             className={s.item + " " + (hoveredItem === item ? s.selected : "")}
                             onClick={() => onItemClick(item.id)}>
                            {item.title}
                        </div>)
                    }
                </div>
            }
        </div>
    );
};