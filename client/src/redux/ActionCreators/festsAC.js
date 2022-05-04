import { INIT_FESTS } from '../ActionTypes/festsAT';

export function initFestsAC(payload) {
  return {
    type: INIT_FESTS,
    payload,
  };
}
