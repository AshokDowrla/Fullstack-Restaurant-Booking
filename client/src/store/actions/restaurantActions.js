import axios from 'axios'
import { GET_RESTAURANTS, CONTENT_LOADING, COST_LOW_HIGH, COST_HIGH_LOW, GET_LOADED_RESTAURANTS, HIGH_RATED } from './types'

export const getRestaurants = () => dispatch => {

    dispatch(setContentLoading())
    axios.get('/restaurants')
        .then(res =>

            dispatch({
                type: GET_RESTAURANTS,
                payload: res.data
            })
        )
}

export const costLowHigh=()=>{


    return{
        type:COST_LOW_HIGH
    }
}

export const costHighLow=() =>{
    
    return{
        type:COST_HIGH_LOW
    }
}

export const highRated =() =>{
    return{
        type:HIGH_RATED
    }
}
export const setContentLoading = () => {
    return {
        type: CONTENT_LOADING
    }
}

export const getLoadedRestaurants =()=>{
    return{
        type:GET_LOADED_RESTAURANTS
    }
}