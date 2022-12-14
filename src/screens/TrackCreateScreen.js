import React, { useState, useEffect, useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import TrackMap from "../components/TrackMap";
import Spacer from "../components/Spacer";
import "../locationMockData";

const TrackCreateScreen = () => {
  const { updateLocation } = useContext(LocationContext);
  const [error, setError] = useState(null);
  const beginWatch = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          updateLocation(location);
        }
      );

      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    beginWatch();
  }, []);

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <Spacer />
      {error ? (
        <Text style={styles.text}>
          Location services must be enabled before creating a track 😉
        </Text>
      ) : null}
      <TrackMap />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#011627",
    color: "#fdfffc",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    marginHorizontal: 15,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "white",
  },
});

export default TrackCreateScreen;
