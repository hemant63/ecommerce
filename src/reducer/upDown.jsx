const initialState = [];

export const handleAddToCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      if (state.length > 0) {
        const item = state.find((item) => item.id === action.payload.id);
        if (!item) {
          return [...state, action.payload];
        } else {
          return state;
        }
      } else {
        return [...state, action.payload];
      }

    case "REMOVECART":
      state = state.filter((item) => item.id !== action.payload);
      return state;

    case "INCREASEQUANTITY":
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });

    case "DECREASEQUANTITY":
      return state.map((item) => {
        return item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    default:
      return state;
  }
};

export const handleUser = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      if (state.length > 0) {
        const item = state.find((item) => item.email === action.payload.email);
        if (!item) {
          return [...state, action.payload];
        } else {
          return alert("User already registered");
        }
      } else {
        return [...state, action.payload];
      }
    default:
      return state;
  }
};

const userState = {};

export const isLoggedIn = (state = userState, action) => {
  switch (action.type) {
    case "SIGNIN":
      return action.payload;
    case "SIGN_OUT":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
