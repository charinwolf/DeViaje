import {
  GET_FLIGHTS_INFO, FLIGHTS_NO_FOUND, STOP_FILTER,
  DATE_FILTER, PRICE_FILTER, AVAILABILITY_FILTER, GET_INPUTS,
  GET_FLIGHTS_INFO_FROM, TOP_DESTINATION, GET_PASSENGERS, SHOW_LOADING, CLEAR_STATES, GET_DATA, RESET_DATA, GET_RETURN, RESET_RETURN
} from "../actions/constants";

const initialState = {
  flights: [],
  allFlights: [],
  modalErr: false,
  topDestination: [],
  loading: false,
  passengers: 1,
  dataInputs: {},
  destination: [],
  passengersInfo: []

};

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case GET_FLIGHTS_INFO:
      return {
        ...state,
        flights: action.payload,
        allFlights: action.payload.data,
        loading: false
      };
    case CLEAR_STATES:
      return {
        ...state,
        flights: [],
        allFlights: [],
        destination: [],
      }
    case SHOW_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_FLIGHTS_INFO_FROM:
      return {
        ...state,
        flights: action.payload,
        allFlights: action.payload.data,
        loading: false
      };

    case STOP_FILTER:
      if (action.payload.toFrom === false) {
        let filterStops = action.payload.value === 'direct' ? state.flights.data.filter(p => {
          return p.route.length === 1
        }) : state.flights.data.filter(p => {
          if (action.payload.value === '1') {
            return p.route.length === 2
          } else {
            return p.route.length >= 3
          }
        })

        if (filterStops.length === 0) {
          return {
            ...state,
            modalErr: true,
            allFlights: filterStops,
          }
        } else if (filterStops.length !== 0) {
          return {
            ...state,
            allFlights: filterStops,
          }
        }
      } else {
        const filterStops = action.payload.value === 'direct' ? state.flights.data.filter(p => {
          const filterDeparture = p.route?.filter(el => el.return === 0)
          const filterReturn = p.route?.filter(el => el.return === 1)
          return filterDeparture.length === 1 && filterReturn.length === 1
        }) : state.flights.data.filter(p => {
          const filterDeparture = p.route?.filter(el => el.return === 0)
          const filterReturn = p.route?.filter(el => el.return === 1)
          if (action.payload.value === '1') {
            return filterDeparture.length === 2 && filterReturn.length === 2
          } else {
            return filterDeparture.length >= 3 && filterReturn.length >= 3
          }
        })

        if (filterStops.length === 0) {
          return {
            ...state,
            modalErr: true,
            allFlights: filterStops,
          }
        } else if (filterStops.length !== 0) {
          return {
            ...state,
            allFlights: filterStops,
          }
        }
      }

    case PRICE_FILTER:
        const filterPrice = action.payload && state.flights.data.filter(p =>  parseInt( (p.price * 1.8).toFixed() )  <= parseInt( action.payload ) )
          
        if(filterPrice.length === 0 ){
          return{
            ...state,
            modalErr : true,
            allFlights: filterPrice
          }
        }else{
          return{
            ...state,
            allFlights: filterPrice,
          }
        }

    case DATE_FILTER:
      const filterDate = action.payload === 'date' ? state.flights.data.sort((a, b) => (a.local_departure > b.local_departure ? 1 : -1)) : state.flights.sort((a, b) => (a.local_departure > b.local_departure ? -1 : 1))
      return {
        ...state,
        allFlights: filterDate,
      }
    
    case AVAILABILITY_FILTER:
      const filterAvailability = action.payload && state.flights.data.filter(p => Object.values(p.availability)[0] <= action.payload)

      return {
        ...state,
        allFlights: filterAvailability
      }

    case FLIGHTS_NO_FOUND:
      return {
        ...state,
        allFlights: [],
        loading: false,
        modalErr: action.payload
      }

    case GET_PASSENGERS:
      return {
        ...state,
        passengers: action.payload
      }
    case GET_INPUTS:
      return {
        ...state,
        dataInputs: action.payload

      }
    case TOP_DESTINATION:

      return {
        ...state,
        destination: action.payload,
        loading: false
      }

    case GET_DATA:
      return {
        ...state,
        passengersInfo: [...state.passengersInfo, action.payload]
      }

    case RESET_DATA:
      return {
        ...state,
        passengersInfo: []
      }

    case GET_RETURN:
      return {
        ...state,
        return: action.payload
      }

    case RESET_RETURN:
      return {
        ...state,
        return: []
      }

    default:
      return { ...state };
  }
}