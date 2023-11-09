import React from "react";
import { createContext, useCallback, useState } from "react";
import googleAxios from "../config/axiosForGoogleMaps";

export const MapContext = createContext();
function MapContextProvider({ children }) {
  const [myLocation, setMyLocation] = useState();
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        setMap(map);
        setMyLocation(pos);
        setSelected(pos);
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${myLocation.lat},${myLocation.lng}&destination=${selected.lat},${selected.lng}&key=${GOOGLE_MAPS_API}`;
        googleAxios
          .get(url)
          .then((res) => {
            console.log(res);
            setSelected((prev) => {
              return { ...prev, address: "" };
            });
          })
          .catch(console.log);
      }
    );
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  const onClickMarker = (e) => {
    setSelected({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${myLocation.lat},${myLocation.lng}&destination=${selected.lat},${selected.lng}&key=${GOOGLE_MAPS_API}`;
    googleAxios
      .get(url)
      .then((res) => {
        console.log(res);
        setSelected((prev) => {
          return { ...prev, address: "" };
        });
      })
      .catch(console.log);
  };

  const sharedContexts = {
    myLocation,
    setMyLocation,
    selected,
    setSelected,
    loading,
    setLoading,
    map,
    setMap,
    onLoad,
    onUnmount,
    onClickMarker,
  };
  return (
    <MapContext.Provider value={sharedContexts}>{children}</MapContext.Provider>
  );
}

export default MapContextProvider;
