import { userTypeAcion } from "./userType";

export const setCurrentUser = (user) => ({
  type: userTypeAcion.SET_CURRENT_USER,
  payload: user,
});
