const initialState = { 
    name: ' ',
    age: 0
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'SET_NAME':
            return {
                age: state.age,
                name: action.data
            }
        case 'SET_AGE':
            return {
                name : state.name,
                age: action.data
            }
        default: 
            return state
    }
}

export default reducer;