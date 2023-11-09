import React from "react";
import googleAxios from "../../config/axiosForGoogleMaps";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { GOOGLE_MAPS_API, LIBRARIES } from "../../../env";
import useMap from "../../Hooks/use-map";
import SearchBar from "./SearchBar";

function MapComponent() {
  const containerStyle = { width: "400px", height: "400px" };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API,
    libraries: LIBRARIES,
  });

  const { selected, setSelected, onLoad, onUnmount, onClickMarker } = useMap();

  return isLoaded ? (
    <>
      <div className="flex flex-col items-center">
        <SearchBar />
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={selected}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={onClickMarker}
        >
          {selected && <MarkerF position={selected} />}
        </GoogleMap>
      </div>
    </>
  ) : (
    <></>
  );
}

export default MapComponent;
