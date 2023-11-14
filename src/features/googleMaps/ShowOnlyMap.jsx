import React from "react";
import { useCallback, useState, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { GOOGLE_MAPS_API, LIBRARIES } from "../../../env";
import useRes from "../../Hooks/use-res";

function ShowOnlyMap({ center }) {
  const containerStyle = { width: "200px", height: "200px" };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API,
    libraries: LIBRARIES,
  });

  // const [myLocation, setMyLocation] = useState(null);
  const { selected, setSelected } = useRes();
  const mockUpLatLng = { lat: 15.899060875391841, lng: 104.185759044869 };
  //   const [map, setMap] = useState(null);
  //   const onLoad = useCallback((map) => {
  //     navigator?.geolocation.getCurrentPosition(
  //       ({ coords: { latitude: lat, longitude: lng } }) => {
  //         const pos = { lat, lng };
  //         setMap(map);
  //         // setMyLocation(pos);
  //         setSelected(pos);
  //       }
  //     );
  // const bounds = new window.google.maps.LatLngBounds(center);
  //   }, []);

  //   const onUnmount = useCallback((map) => {
  //     setMap(null);
  //     setSelected(null);
  //   }, []);

  //   console.log(selected);
  //   //

  return isLoaded ? (
    <>
      <div className="ctn">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          options={{
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            fullscreenControl: false,
          }}
          //   onLoad={onLoad}
          //   onUnmount={onUnmount}
        >
          {selected && <MarkerF position={center} />}
        </GoogleMap>
      </div>
    </>
  ) : (
    <></>
  );
}

export default ShowOnlyMap;
