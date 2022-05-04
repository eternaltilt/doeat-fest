import { INIT_FESTS } from '../actionTypes/festsAT';

export function initFestsAC(payload) {
  return {
    type: INIT_FESTS,
    payload,
  };
}
