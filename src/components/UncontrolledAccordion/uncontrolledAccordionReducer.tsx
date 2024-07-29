type ActionType = {
    type: "TOGGLE-COLLAPSED" | string
}

export type StateType = {
    collapsed: boolean
}


export const reducer = (state: StateType, action: ActionType): StateType => {
    console.log("reducer start:");
    console.log(state);
    console.log(action);
    console.log("reducer end.");

    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return {...state, collapsed: !state.collapsed};
        default:
            return state;
    }
}