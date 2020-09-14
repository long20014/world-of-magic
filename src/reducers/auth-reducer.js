import {LOGIN, LOGOUT} from 'actions/type';
import { getIsLoggedIn } from 'utils';

const initialState = {
  isLoggedIn: getIsLoggedIn()
}

export default function(state = initialState, action) {  
  switch (action.type) {
    case LOGIN:      
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      };
    default:
      return state;
  }
};