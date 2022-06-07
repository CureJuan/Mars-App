import { LOGOUT, SET_AUTH } from "../actions/auth";

export const initialState = {
  isLoggedIn: false,
  jwt: null, // token enviar en cada request HTTP (cabecera) + storage
};
export const authReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH: {
      const { jwt } = action.payload;
      return {
        IsloggedIn: true,
        jwt,
      };
    }
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
