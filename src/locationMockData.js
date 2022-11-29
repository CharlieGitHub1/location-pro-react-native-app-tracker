import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const grabLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -95.286047 + increment * tenMetersWithDegrees,
      latitude: 29.563566 + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: grabLocation(counter),
  });
  counter++;
}, 1000);
