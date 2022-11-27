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
    default:
      return state;
  }
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
  return ({ email, password }) => {
    // try to sign in
    // handle success by updating state
    // handle failure by showing error message (somehow)
  };
};

const signout = (dispatch) => {
  return () => {
    // somehow sign out!
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
