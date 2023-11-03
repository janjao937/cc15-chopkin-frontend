import { useContext } from "react";
import { ResContext } from "../contexts/ResContext";

export default function useRes() {
	return useContext(ResContext);
}
