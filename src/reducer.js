export const initialState = {
  basket: [],
  user: null,
};

export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
const reducer = (state, action) => {
  console.log("action", action, state);
  switch (action.type) {
    case ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.item] };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "REMOVE_FROM_BASKET":
      let newBasketList = [...state.basket];
      let index = state.basket.findIndex((item) => item.id == action.id);
      console.log("index", index);
      if (index >= 0) {
        newBasketList.splice(index, 1);
      }
      console.log("new_array", newBasketList);
      return { ...state, basket: newBasketList };
    default:
      return state;
  }
};
export default reducer;
