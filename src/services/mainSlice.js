import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentNum : '',
    previousNum : '',
    operation : ''
}

export const ACTIONS = {
    ADD_DIGIT : 'addDigit',
    CLEAR : 'clear',
    DELETE_DIGIT : 'deleteDigit',
    CHOOSE_OPERATION : 'chooseOperation',
    EVALUATE : 'evaluate '
};

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        ADD_DIGIT: (state, action) => {
            if(state.currentNum === '0' && state.previousNum === '0') {
                return state;
            } else if(action.digit === '.' && state.currentNum.includes(".")) {
                return state;
            } else if(state.currentNum === '' && action.digit === '.') {
                return {
                    ...state,
                    currentNum : '0.'
                }
            } else {
                return {
                    ...state,
                    currentNum : state.currentNum + action.digit
                }
            }
        },
        CLEAR: (state, action) => {
            return initialState;
        },
        CHOOSE_OPERATION: (state, action) => {
            if(state.currentNum === '' && state.previousNum === '') return state;
            if(state.previousNum === '') return {
                ...state,
                previousNum : state.currentNum,
                operation : action.operation,
                currentNum : ''
            }
        }
    },
});

export default mainSlice.reducer;
export const {ADD_DIGIT, CLEAR, CHOOSE_OPERATION} = mainSlice.actions;