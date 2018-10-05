import {RECEIVE_CURRENT_USER }
from '../actions/session_actions';
import {merge} from 'lodash';

const usersReducer = (state = { search_results: []}, action) => {
  Object.freeze(state);


  switch (action.type) {

    case RECEIVE_CURRENT_USER:
    const newUser =
    merge({},state,action.currentUser);
    return newUser;
    
    default:
       return state;
  }
};

export default usersReducer;
