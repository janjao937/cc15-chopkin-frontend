import React from "react";

function ShowOnlyMap() {
  const containerStyle = { width: "400px", height: "400px" };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API,
    libraries: LIBRARIES,
  });

  // const [myLocation, setMyLocation] = useState(null);
  const { selected, setSelected } = useRes();
  const [map, setMap] = useState(null);
  const onLoad = useCallback((map) => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        setMap(map);
        // setMyLocation(pos);
        setSelected(pos);
      }
    );
    // const bounds = new window.google.maps.LatLngBounds(center);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
    setSelected(null);
  }, []);

  console.log(selected);
  //

  return isLoaded ? (
    <>
      <div className="ctn">
        <PlacesAutoComplete setSelected={setSelected} />
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={selected}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {selected && <MarkerF position={selected} />}
        </GoogleMap>
      </div>
    </>
  ) : (
    <></>
  );
}

export default ShowOnlyMap;
