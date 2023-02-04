import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from "../actions/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, ...action.payload };
    case EDIT_ITEM:
      return { ...state, ...action.payload };
    case DELETE_ITEM:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
