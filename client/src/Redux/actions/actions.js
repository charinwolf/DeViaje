import { GET_FLIGHTS_INFO, GET_FLIGHTS_INFO_FROM, GET_INPUTS, FLIGHTS_NO_FOUND, STOP_FILTER,
       DATE_FILTER, PRICE_FILTER, AVAILABILITY_FILTER, TOP_DESTINATION, GET_PASSENGERS, SHOW_LOADING, CLEAR_STATES, GET_DATA, RESET_DATA, GET_RETURN, RESET_RETURN, GET_PASSENGERSINFO  } from "./constants";

import { axiosWithOutToken } from '../../services/axios'

//german - vuelos de iva y vuelta -- con fecha exacta
export const getFlightsInfoToFromExact = (payload) => {
  
  return  async (dispatch) => {
    let fechaModificada = payload.dateFrom.split("-").reverse().join("/");
    let fechaModificada2 = payload.dateTo.split("-").reverse().join("/");
    
    dispatch({
      type:CLEAR_STATES
    })

    dispatch({
      type: SHOW_LOADING
    })
    try {
        const response = await axiosWithOutToken(
            `/getflights?fly_from=${payload.fly_from}&fly_to=${payload.fly_to}&date_from=${fechaModificada}&date_to=${fechaModificada}&return_from=${fechaModificada2}&return_to=${fechaModificada2}`
        )
        if(response.data.status === 400 ){
          return dispatch({
            type: FLIGHTS_NO_FOUND,
            payload: true,
          });
        }
        return dispatch({
            type: GET_FLIGHTS_INFO_FROM,
            payload: response.data
        });
      } catch ( err ) {
        console.log( err.response );
        return dispatch({
            type: FLIGHTS_NO_FOUND,
            payload: true,
        });
      }
    };
};
//german-fin

//german- vuelos solo de ida-- con fecha exacta
export const getFlightsInfoExact = (payload) => {
  
  return async (dispatch) => {
    let fechaModificada = payload.dateFrom.split("-").reverse().join("/");
   // let fechaModificada2 = payload.dateTo.split("-").reverse().join("/");

    dispatch({
      type:CLEAR_STATES
    })
    dispatch({
      type: SHOW_LOADING
    })
    
    try {
        const response = await axiosWithOutToken(
            `/getflights?fly_from=${payload.fly_from}&fly_to=${payload.fly_to}&date_from=${fechaModificada}&date_to=${fechaModificada}`
        )
        if(response.data.status === 400 ){
          return dispatch({
            type: FLIGHTS_NO_FOUND,
            payload: true,
          });
        }
        return dispatch({
            type: GET_FLIGHTS_INFO,
            payload: response.data,
        });  
    } catch ( err ) {
        console.log( err.response );
        return dispatch({
            type: FLIGHTS_NO_FOUND,
            payload: true,
        });
      }
    };
};

//german-fin

export const getFlightsInfo = (payload) => {
  
  return async (dispatch) => {
    let fechaModificada = payload.dateFrom.split("-").reverse().join("/");
    let fechaModificada2 = payload.dateTo.split("-").reverse().join("/");

    dispatch({
      type:CLEAR_STATES
    })
    dispatch({
      type: SHOW_LOADING
    })
    
    try {
        const response = await axiosWithOutToken(
            `/getflights?fly_from=${payload.fly_from}&fly_to=${payload.fly_to}&date_from=${fechaModificada}&date_to=${fechaModificada2}`
        )
        if(response.data.status === 400 ){
          return dispatch({
            type: FLIGHTS_NO_FOUND,
            payload: true,
          });
        }
        return dispatch({
            type: GET_FLIGHTS_INFO,
            payload: response.data,
        });  
    } catch ( err ) {
        console.log( err.response );
        return dispatch({
            type: FLIGHTS_NO_FOUND,
            payload: true,
        });
      }
    };
};

export const getFlightsInfoToFrom = (payload) => {
  
  return  async (dispatch) => {
    let fechaModificada = payload.dateFrom.split("-").reverse().join("/");
    let fechaModificada2 = payload.dateTo.split("-").reverse().join("/");
    
    dispatch({
      type:CLEAR_STATES
    })

    dispatch({
      type: SHOW_LOADING
    })
    try {
        const response = await axiosWithOutToken(
            `/getflights?fly_from=${payload.fly_from}&fly_to=${payload.fly_to}&date_from=${fechaModificada}&date_to=${fechaModificada2}&return_from=${fechaModificada}&return_to=${fechaModificada2}`
        )
        if(response.data.status === 400 ){
          return dispatch({
            type: FLIGHTS_NO_FOUND,
            payload: true,
          });
        }
        return dispatch({
            type: GET_FLIGHTS_INFO_FROM,
            payload: response.data
        });
      } catch ( err ) {
        console.log( err.response );
        return dispatch({
            type: FLIGHTS_NO_FOUND,
            payload: true,
        });
      }
    };
};

export const topdestination = (payload) => {
  console.log('payload acion', payload)
  return async (dispatch) => {
    
    const modDateFrom = payload.dateFrom.split('-').reverse().join('/')
    const modDateTo = payload.dateTo.split('-').reverse().join('/')
    dispatch({
      type:CLEAR_STATES
    })

    dispatch({
      type: SHOW_LOADING
    })

    try {
       const response = await axiosWithOutToken(
        `/getflights?fly_from=${payload.fly_from}&fly_to=${payload.fly_to}&date_from=${modDateFrom}&date_to=${modDateTo}`
       )
      return dispatch({
            type: GET_FLIGHTS_INFO,
            payload: response.data,
      });  
    } catch ( err ) {
        console.log( err.response );
        return dispatch({
            type: FLIGHTS_NO_FOUND,
            payload: true,
        });
      }
    };
};

export const  rutaTop = () => {
  return async (dispatch) => {
    try {
        const response = await axiosWithOutToken(`topdestination?city=bariloche&q=8`)
        return dispatch({
            type: TOP_DESTINATION,
            payload: response,
        });  
    } catch ( err ) {
        console.log( err.response );
        return dispatch({
            type: FLIGHTS_NO_FOUND,
            payload: true,
        });
      }
    };
};

export function stopsFilter (value){
  return{
      type: STOP_FILTER,
      payload: value
  }
}
     
export const hideModalErr = () => {
  return {
    type: FLIGHTS_NO_FOUND,
    payload: false,
  }
} 

export const dateFilter = (value) => {
  return {
    type: DATE_FILTER,
    payload: value
  }
} 

export const priceFilter = (value) => {
  return {
    type: PRICE_FILTER,
    payload: value
  }
} 

export const availabilityFilter = (value) => {
  return {
    type: AVAILABILITY_FILTER,
    payload: value
  }
} 

export const getPassengers = (payload) => {
  return{
    type: GET_PASSENGERS,
    payload
  }
}

export const setValuesInputs = (value) => {
  return{
    type: GET_INPUTS,
    payload: value
  }
}

export const getData = (payload) => {
  return{
    type: GET_DATA,
    payload
  }
}

export function resetData(){
  return{
    type: RESET_DATA
  }
}

export function getReturn(payload){
  return{
    type: GET_RETURN,
    payload
  }
}

export function resetReturn(){
  return{
    type: RESET_RETURN
  }
}