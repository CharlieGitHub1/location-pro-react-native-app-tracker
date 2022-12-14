import React, { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Circle } from "react-native-maps";

const TrackMap = () => {
  const {
    state: { liveLocation },
  } = useContext(LocationContext);

  if (!liveLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  // initialLocation = {
  //   longitude: -95.286047,
  //   latitude: 29.563566,
  // };

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          ...liveLocation.coords,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}
        // region={{
        //   ...liveLocation.coords,
        //   longitudeDelta: 0.01,
        //   latitudeDelta: 0.01,
        // }}
        style={styles.mapStyle}
      >
        <Circle
          center={liveLocation.coords}
          radius={30}
          strokeColor="rgba(103, 50, 255, 1)"
          fillColor="rgba(103, 50, 255, 0.25)"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#011627",
    color: "#fdfffc",
    flex: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "white",
  },
  mapStyle: {
    height: 400,
  },
});

export default TrackMap;
