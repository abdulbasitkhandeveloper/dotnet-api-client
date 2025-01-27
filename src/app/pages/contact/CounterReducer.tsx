export type CounterState = {
    data: number 
}

const initialState: CounterState = {
    data: 0
}

export default function CounterReducer(state = initialState, action: {type: string}) {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, data: state.data + 1}
        case 'DECREMENT':
            return {...state, data: state.data - 1}
        default:
            return state;
    }
}