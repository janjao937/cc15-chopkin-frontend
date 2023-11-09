import React from "react";
import "./SeachBar.css";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import useMap from "../../Hooks/use-map";

function SearchBar() {
  const { setSelected } = useMap();
  const inputRef = useRef(null);
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutoComplete();
  const handleSelect = async (address) => {
    try {
      setValue(address, false);
      clearSuggestions();
      const result = await getGeocode({ address });
      const { lat, lng } = await getLatLng(result[0]);
      setSelected((prev) => {
        return { ...prev, lat, lng };
      });
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${myLocation.lat},${myLocation.lng}&destination=${selected.lat},${selected.lng}&key=${GOOGLE_MAPS_API}`;
      const res = googleAxios.get(url);
      console.log(res);
      setSelected((prev) => {
        return { ...prev, address: "" };
      });
      inputRef.current.blur();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Search an address"
        className="input"
        ref={inputRef}
      />
      <ComboboxPopover>
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

export default SearchBar;
