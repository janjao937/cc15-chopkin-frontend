import { useCallback, useState, useRef } from "react";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import "./SearchBar.css";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { GOOGLE_MAPS_API, LIBRARIES } from "../../../env";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import useRes from "../../Hooks/use-res";

function MapComponent() {
  const containerStyle = { width: "400px", height: "400px" };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API,
    libraries: LIBRARIES,
  });

  // const [myLocation, setMyLocation] = useState(null);
  const { selected, setSelected } = useRes();
  const [loading, setLoading] = useState(false);
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
  const onClickMarker = async (e) => {
    try {
      setSelected({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    } catch (error) {
      console.log(error);
    }
  };

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

export function PlacesAutoComplete({ setSelected }) {
  const inputRef = useRef(null);
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutoComplete();
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    console.log("ไอ้สัส");
    const result = await getGeocode({ address });
    const { lat, lng } = await getLatLng(result[0]);
    setSelected({ lat, lng });
    inputRef.current.blur();
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Search an address"
        className="input"
        ref={inputRef}
      />
      <ComboboxPopover className="box">
        <ComboboxList className="list">
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption
                key={place_id}
                value={description}
                className="option"
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
