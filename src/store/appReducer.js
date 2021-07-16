
const getPercent = (first, second, third) => (first + second + third) < 0
    ? 0 : (first + second + third) > 100
        ? 0 : 100 - (first + second + third);

const initialState = {
    firstRowValue: 10,
    secondRowValue: 36,
    thirdRowValue: 14,
    percentLeft: 40,
    chosenPack: 'Choose your pack'
}

export const appReducer = (state = initialState, action) => {
    if (!action) return state;
    switch (action.type) {
        case 'SET_FIRST_ROW_VALUE':
            return {
                ...state,
                firstRowValue: action.value,
                percentLeft: getPercent(action.value, state.secondRowValue, state.thirdRowValue)
            }
        case 'SET_SECOND_ROW_VALUE':
            return {
                ...state,
                secondRowValue: action.value,
                percentLeft: getPercent(state.firstRowValue, action.value, state.thirdRowValue)
            }
        case 'SET_THIRD_ROW_VALUE':
            return {
                ...state,
                thirdRowValue: action.value,
                percentLeft: getPercent(state.firstRowValue, state.secondRowValue, action.value)
            }
        case 'SET_CHOSEN_PACK':
            return {
                ...state,
                chosenPack: action.value
            }
        default:
            return state
    }
}

export const SetFirstRowValueAC = (value) => ({type: 'SET_FIRST_ROW_VALUE', value})
export const SetSecondRowValueAC = (value) => ({type: 'SET_SECOND_ROW_VALUE', value})
export const SetThirdRowValueAC = (value) => ({type: 'SET_THIRD_ROW_VALUE', value})
export const SetChosenPackAC = (value) => ({type: 'SET_CHOSEN_PACK', value})

