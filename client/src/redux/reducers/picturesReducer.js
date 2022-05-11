import { INIT_PICTURES } from '../ActionTypes/picturesAT';

const initialState = { pictures: []};

export function picturesReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_PICTURES:
      return { ...state, pictures: action.payload};
    default:
      return state;
  }
}
