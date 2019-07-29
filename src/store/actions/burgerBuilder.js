import * as actions from "./actions";

export const addIngredient = ingredientName => {
  return {
    type: actions.ADD_INGREDIENT,
    ingredientName
  };
};

export const removeIngredient = ingredientName => {
  return {
    type: actions.REMOVE_INGREDIENT,
    ingredientName
  };
};

export const setIngredients = ingredients => {
  return {
    type: actions.SET_INGREDIENTS,
    ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actions.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = ingredients => {
  return { type: actions.BURGER_INIT_INGREDIENTS };
};
