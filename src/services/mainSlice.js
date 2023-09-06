import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentNum : '',
    previousNum : '',
    operation : '',
    overwrite : false
}

export const ACTIONS = {
    ADD_DIGIT : 'addDigit',
    CLEAR : 'clear',
    DELETE_DIGIT : 'deleteDigit',
    CHOOSE_OPERATION : 'chooseOperation',
    EVALUATE : 'evaluate '
};

const evaluate = (state) => {
    const prevNum = parseFloat(state.previousNum);
    const curNum = parseFloat(state.currentNum);

    if(!prevNum || !curNum) return '';
    let result = '';
    switch(state.operation) {
        case "+" :
            result = prevNum + curNum;
            break;
        case "-" :
            result = prevNum - curNum;
            break;
        case "*" : 
            result = prevNum * curNum;
            break;
        case "/" :
            result = prevNum / curNum;
            break;
        default :
            return result;
    }
    return result.toString();
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
            } else {
                if(state.overwrite) {
                    return {
                        ...state,
                        overwrite : false,
                        currentNum : action.digit
                    }
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
            }
        },
        CLEAR: (state, action) => {
            return initialState;
        },
        CHOOSE_OPERATION: (state, action) => {
            if(state.currentNum === '' && state.previousNum === '') return state;
            if(state.currentNum === '') return {
                ...state,
                operation : action.operation
            }
            if(state.previousNum === '') return {
                ...state,
                previousNum : state.currentNum,
                operation : action.operation,
                currentNum : ''
            }
            return {
                ...state,
                previousNum: evaluate(state),
                operation: action.operation,
                currentNum: '',
            }
        },
        EVALUATE : (state, action) => {
            if(state.currentNum === '' || state.previousNum === '' || state.operation === '') return state;
            return {
                ...state,
                currentNum : evaluate(state),
                previousNum : '',
                operation : '',
                overwrite : true
            }
        },
        DELETE_DIGIT : (state, action) => {
            if(state.currentNum === '') return state;
            if(state.currentNum.length < 2) {
                return {
                ...state,
                currentNum : ''
                }
            } else {
                return {
                    ...state,
                    currentNum : state.currentNum.slice(0, -1)
                }
            }
        }
    },
});

export default mainSlice.reducer;
export const {ADD_DIGIT, CLEAR, CHOOSE_OPERATION, EVALUATE, DELETE_DIGIT} = mainSlice.actions;