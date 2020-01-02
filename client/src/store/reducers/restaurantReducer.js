import { GET_RESTAURANTS, CONTENT_LOADING, COST_HIGH_LOW, GET_LOADED_RESTAURANTS, COST_LOW_HIGH, HIGH_RATED } from "../actions/types"


const initialState = {
    restaurants: [],
    loading: true,
}


const sortHighLow = (restaurants) => {

    restaurants.sort((x, y) => {

        const a = parseInt(x['Average Cost for two'])
        const b = parseInt(y['Average Cost for two'])

        return (b - a)
    })

}

const sortByRating = (restaurants) => {
    restaurants.sort((x, y) => {

        const a = x['Aggregate rating']
        const b = y['Aggregate rating']

        return (b - a)
    })
}

const sortLowHigh = (restaurants) => {

    restaurants.sort((x, y) => {

        const a = parseInt(x['Average Cost for two'])
        const b = parseInt(y['Average Cost for two'])

        return (a - b)
    })

}

const reducer = (state = initialState, action) => {


    switch (action.type) {
        case GET_RESTAURANTS:
            return {

                ...state,
                restaurants: action.payload,
                loading: false
            }
        case CONTENT_LOADING:

            return {
                ...state,
                loading: true
            }

        case COST_HIGH_LOW:
            let highCostRestaurants = state.restaurants

            sortHighLow(highCostRestaurants.Restaurants)

            return {
                ...state,
                restaurants: highCostRestaurants,
                loading: false
            }
        case COST_LOW_HIGH:
            let lowCostRestaurants = state.restaurants

            sortLowHigh(lowCostRestaurants.Restaurants)

            return {
                ...state,
                restaurants: lowCostRestaurants,
                loading: false
            }
        case HIGH_RATED:
            let highRated = state.restaurants
            sortByRating(highRated.Restaurants)
            return {
                ...state,
                restaurants: highRated,
                loading: false
            }


        case GET_LOADED_RESTAURANTS:
            return {
                ...state,
                restaurants: state.restaurants,
                loading: false

            }

        default:
            return state

    }


}

export default reducer