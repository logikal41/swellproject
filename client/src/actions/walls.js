import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';


export const createWall = ( {id, name, description} , callBack ) => {
  return dispatch => {
  axios.post('../api/walls', { area_id: id, name, description })
    .then( res => {
      dispatch(setHeaders(res.headers));
      callBack();
    })
    .catch( err => {
      dispatch(setFlash('Failed to create wall', 'red'));
    })  
  } 
}

export const getWall = id => {
  return dispatch => {
    axios.get(`/api/walls/${id}`)
    .then( res => {
      dispatch({ type: 'GET_ACTIVE_LIST', payload: res.data.routes })
      dispatch({ type: 'GET_ACTIVE_SELECTION', payload: res.data.wall })
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {
      dispatch(setFlash('Failed to get wall information', 'red'));
    })
  }
}

export const deleteWall = (id, callBack) => {
  return dispatch => {
  axios.delete(`../api/walls/${id}`)
    .then( res => {
      dispatch(setHeaders(res.headers));
    })
    .then( () => callBack() )
    .catch( err => {
      dispatch(setFlash('Failed to delete Wall', 'red'));
    })  
  } 
}

export const updateWall = ({id, name, description}, callBack) => {
  return dispatch => {
  axios.put(`../../api/walls/${id}`, { name, description })
    .then( res => {
      dispatch(setHeaders(res.headers));
      callBack();
    })
    .catch( err => {
      dispatch(setFlash('Failed to update area', 'red'));
    })  
  } 
}
