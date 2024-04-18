export const addTocart = (payload) => {
  return {
    type: "ADDTOCART",
    payload: payload,
  };
};

export const removeCart = (payload) => {
  return {
    type: "REMOVECART",
    payload: payload,
  };
};

export const incQuantity = (payload) => {
  return {
    type: "INCREASEQUANTITY",
    payload: payload,
  };
};

export const decquantity = (payload) => {
  return {
    type: "DECREASEQUANTITY",
    payload: payload,
  };
};

export const register = (payload) => {
  return {
    type: "REGISTER",
    payload: payload,
  };
};

export const signIn = (payload) => {
  return {
    type: "SIGNIN",
    payload: payload,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
