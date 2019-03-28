
import apiFirebase from '../config/api.firebase';

export const ADD_OBJET= 'add objet';
export const DELETE_OBJET = 'delete objet';

export const TRY_ADD_OBJET = 'try add objet';
export const ADD_OBJET_SUCCESS = 'add objet success';
export const ADD_OBJET_ERROR = 'add objet error';

export const TRY_DEL_OBJET = 'try del objet';
export const DEL_OBJET_SUCCESS = 'del objet success';
export const DEL_OBJET_ERROR = 'del objet error';

export const REQUEST_OBJET = 'request objet';
export const FETCH_OBJET = 'fetch objet';
export const FETCH_OBJET_SUCCESS = 'fetch objet success';
export const FETCH_OBJET_ERROR = 'fetch objet error';


export const TryAddObjet = (objet) => {
  return (dispatch, getState) => {
    const objets = [ ...getState().objets.data, objet ];
    return apiFirebase.put('objets.json', objets).then(
      response => dispatch(addObjetSuccess(objet)),
      error => dispatch(addObjetError(error))
    )
  }
}

export const addObjetSuccess = (objet) => {
  return {
    type: ADD_OBJET_SUCCESS,
    objet
  }
}

export const addObjetError = (error) => {
  return {
    type: ADD_OBJET_ERROR,
    error
  }
} 

export const TryDelObjet = (index) => {
  return (dispatch, getState) => {
    const objets = [ ...getState().objets.data.filter((t, i) => i !== index)]
    return apiFirebase.put('objets.json', objets).then(
      response => dispatch(deleteObjetSuccess(index)),
      error => dispatch(delObjetError(error))
    )
  }
}

export const deleteObjetSuccess = index => {
  return {
    type: DEL_OBJET_SUCCESS,
    index
  }
};

export const delObjetError = (error) => {
  return {
    type: DEL_OBJET_ERROR,
    error
  }
} 

export const requestObjet = () => {
  return {
    type: REQUEST_OBJET
  }
}

export const fetchObjetSuccess = (objets) => {
  return {
    type: FETCH_OBJET_SUCCESS,
    objets
  }
}

export const fetchObjetError = (error) => {
  return {
    type: FETCH_OBJET_ERROR,
    error
  }
}

export const fetchObjet = () => {
  return dispatch => {
    dispatch(requestObjet());
    return apiFirebase.get('objets.json').then(
      response => {
        const data = response.data;
        dispatch(fetchObjetSuccess(data));
      },
      error => {
        dispatch(fetchObjetError(error));
      }
    )
  }
}