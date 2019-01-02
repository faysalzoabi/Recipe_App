import {ADD_RECIPES} from './action';

const initState = {
    recipes: []
}
const reducer = (state = initState, action) => {
    switch(action.type){
        case ADD_RECIPES:
            const newrecipes = [...action.payload]
            return {
                ...state,
                recipes: newrecipes
            }
        default:
            return state
    }
   
}

export default reducer