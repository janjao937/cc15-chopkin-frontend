import { useContext } from "react";
import { MapContext } from "../contexts/MapContext";

const useMap = () => {
  return useContext(MapContext);
};

export default useMap;
