import * as actions from './actions';

export const objets = (state ={
    data: [],
    loading: false,
    error: null
  }, action) => {
  switch (action.type) {
    case actions.ADD_OBJET_SUCCESS:
       return {
        ...state,
        data: [...state.data, action.objet]
      };
    
    case actions.DEL_OBJET_SUCCESS:
      return {
        ...state,
        data: state.data.filter((t, i) => i !== action.index)
      };
    case actions.REQUEST_OBJET: 
      return {
        ...state,
        loading: true
      }
    case actions.FETCH_OBJET_SUCCESS: 
      if (action.objets) {
        return {
          ...state,
          data: action.objets,
          loading: false,
          error: null
        }
      } else {
        return {
          ...state,
          loading: false
        }
      }
    case actions.FETCH_OBJET_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
