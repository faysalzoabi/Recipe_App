import axios from 'axios';


export const ADD_RECIPES = 'addRecpies'

export const addrecpies = (recpies) => {
    return {
        type: ADD_RECIPES,
        payload: recpies
    }
}



export const fetchData = (recipe) => (dispatch, getState) => {
    axios.get(`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_FF_KEY}&q=${recipe}&page=2`)
    .then(res => {
        console.log(res.data.recipes)
        dispatch(addrecpies(res.data.recipes))
    })
    .catch(err => console.log(err))
}