import React from "react";
import { View, StyleSheet, Image } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const TrackMap = () => {
  const points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 29.563566 + i * 0.001,
      longitude: -95.286047 + i * 0.001,
    });
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          longitude: -95.286047,
          latitude: 29.563566,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}
        style={styles.mapStyle}
      >
        <Polyline coordinates={points} />
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
