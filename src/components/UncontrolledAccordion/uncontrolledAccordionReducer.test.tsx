import {reducer, StateType} from "./uncontrolledAccordionReducer";

test("collapsed should be true", () => {
    // data
    const state: StateType = {
        collapsed: false,
    }
    // action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'});
    // expect
    expect(newState.collapsed).toBe(true);
});

test("collapsed should be false", () => {
    // data
    const state: StateType = {
        collapsed: true,
    }
    // action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'});
    // expect
    expect(newState.collapsed).toBe(false);
});