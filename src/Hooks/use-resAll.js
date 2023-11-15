import { useContext } from "react";
import { ResAllContext } from "../contexts/ResAllContext";

export default function useRes() {
  return useContext(ResAllContext);
}
