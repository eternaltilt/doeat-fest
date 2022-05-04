import { FESTIVAL } from '../ActionTypes/festivalAT';

export function festivalAC(payload) {
  return {
    type: FESTIVAL,
    payload,
  };
}
