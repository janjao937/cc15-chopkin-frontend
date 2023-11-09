import React from "react";
import SearchBar from "./SearchBar";
import MapComponent from "./MapComponent";
import MapContextProvider from "../../contexts/MapContext";

function GoogleMaps() {
  return (
    <>
      <MapContextProvider>
        <div>
          <MapComponent />
        </div>
      </MapContextProvider>
    </>
  );
}

export default GoogleMaps;
