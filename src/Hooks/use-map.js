import { useContext } from "react";
import { MapContext } from "../contexts/MapContext";

export default useMap = () => {
  return useContext(MapContext);
};
