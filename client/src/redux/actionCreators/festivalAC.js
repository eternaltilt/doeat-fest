import { INIT_FESTIVALS } from '../actionTypes/festivalAT';

export function initFestivalAC(payload) {
  return {
    type: INIT_FESTIVALS,
    payload,
  };
}
