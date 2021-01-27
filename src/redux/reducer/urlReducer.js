import {ADD_CITY, ADD_IP, ADD_STREETS} from '../action';

const initinalState = {
  city: "",
  ip: "",
  streets: []
}

const urlReducer = (state = initinalState, action) => {
  switch(action.type){
    case ADD_CITY: {
      return {
        
        ...state,
        city: action.payload
      }
    }
    case ADD_IP: {
      return {
        ...state,
        ip: action.payload
      }
    }
    case ADD_STREETS:{
      return {
        ...state,
        streets: action.payload
      }
    }
    default:
      return state
  }
}

export default urlReducer