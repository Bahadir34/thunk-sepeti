import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.BASKET_LOADING:
      return { ...state, isLoading: true };
    case ACTION_TYPES.BASKET_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ACTION_TYPES.BASKET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        basket: action.payload,
      };

    case ACTION_TYPES.CREATE_ITEM:
      return { ...state, basket: state.basket.concat(action.payload) };
    default:
      return state;
  }
};

export default basketReducer;
