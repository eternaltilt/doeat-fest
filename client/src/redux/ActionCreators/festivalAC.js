import { INIT_FESTIVAL, ADD_FESTIVAL } from '../ActionTypes/festivalAT';

export function festivalAC(payload) {
  return {
    type: INIT_FESTIVAL,
    payload,
  };
}

export function addFestivalAC(payload) {
  return {
    type: ADD_FESTIVAL,
    payload,
  }
}
