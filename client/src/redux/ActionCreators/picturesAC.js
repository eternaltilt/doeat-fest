import { INIT_PICTURES } from '../ActionTypes/picturesAT';

export function initPicturesAC(payload) {
  return {
    type: INIT_PICTURES,
    payload,
  };
}
