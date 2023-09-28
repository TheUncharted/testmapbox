import mapboxgl from 'mapbox-gl';
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';

import Mapbox from '@rnmapbox/maps';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
Mapbox.setAccessToken('pk');

const App = () => {
  const pointAnnotation = useRef<Mapbox.PointAnnotation>(null);
  return (
    <Mapbox.MapView style={styles.map}>
      <Mapbox.Camera
        defaultSettings={{
          centerCoordinate: [-74.00597, 40.71427],
          zoomLevel: 12,
        }}
      />
      <Mapbox.PointAnnotation
        id="annotation"
        coordinate={[-74.00597, 40.71427]}
        title="test"
        draggable
        ref={pointAnnotation}
      >
        <Mapbox.Callout title="This is a sample loading a remote image" />
      </Mapbox.PointAnnotation>
    </Mapbox.MapView>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 1920,
    width: 480,
  },
  map: {
    flex: 1,
  },
});
