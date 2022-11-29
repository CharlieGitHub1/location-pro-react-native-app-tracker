import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import apiTracker from "../api/trackServer";
import { navigate } from "../navRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload }; // overwrites the errorMessage property
    case "signup":
      return { errorMessage: "", token: action.payload }; // overwrites the errorMessage and token properties
    case "signin":
      return { errorMessage: "", token: action.payload }; // overwrites the errorMessage and token properties
    case "clear_error_message":
      return { ...state, errorMessage: "" }; // overwrites the errorMessage
    case "signout":
      return { token: null, errorMessage: "" }; // overwrites the token and errorMessage properties
    default:
      return state;
  }
};

const trySigningInLocally = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signin", payload: token });
      navigate("primaryFlow");
    } else {
      navigate("loginFlow");
    }
  };
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await apiTracker.post("/signup", { email, password }); // make a post request to the signup route
      await AsyncStorage.setItem("token", response.data.token); // store the token in the device's storage
      dispatch({ type: "signup", payload: response.data.token }); // dispatch the action to update the state
      navigate("primaryFlow");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Uh oh! You just messed up! 😑",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await apiTracker.post("/signin", { email, password }); // make a post request to the signin route
      await AsyncStorage.setItem("token", response.data.token); // store the token in the device's storage
      dispatch({ type: "signin", payload: response.data.token }); // dispatch the action to update the state
      navigate("primaryFlow");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Uh oh! You just messed up! 😑",
      });
    }
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clear_error_message" });
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    navigate("loginFlow");
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, trySigningInLocally },
  { token: null, errorMessage: "" }
);
