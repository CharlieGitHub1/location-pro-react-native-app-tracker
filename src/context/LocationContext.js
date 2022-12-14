import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  // locationReducer is a function that takes in the state and an action object and returns a new state
  switch (
    action.type // action.type is the action type
  ) {
    case "update_live_location": // update_live_location is the action type
      return { ...state, liveLocation: action.payload }; // return a new state object with the liveLocation property set to the location object
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {};

const stopRecording = (dispatch) => () => {};

const updateLocation = (dispatch) => {
  // updateLocation is a function that returns a function
  return (location) => {
    // the function that is returned takes in a location object
    dispatch(
      // dispatch is a function that takes in an action object
      {
        type: "update_live_location", // type is the action type
        payload: location, // payload is the location object
      }
    );
  };
};

export const { Provider, Context } = createDataContext(
  locationReducer, // locationReducer is a function that takes in the state and an action object and returns a new state
  {
    startRecording, // startRecording is a function that returns a function
    stopRecording, // stopRecording is a function that returns a function
    updateLocation, // updateLocation is a function that returns a function
  },
  {
    recording: false,
    liveLocation: null,
    locations: [],
  }
);
