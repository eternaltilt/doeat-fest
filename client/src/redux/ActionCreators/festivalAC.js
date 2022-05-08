import { FESTIVAL, ADD_FESTIVAL } from '../ActionTypes/festivalAT';

export function festivalAC(payload) {
  return {
    type: FESTIVAL, // ИСПРАВИТЬ НА ИНИТ 
    payload,
  };
}

export function addFestivalAC(payload) {
  return {
    type: ADD_FESTIVAL,
    payload,
  }
}
