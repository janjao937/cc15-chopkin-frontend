import { createContext } from "react";

export const GoogleMapContext = createContext();

export default function GoogleMapContextProvider({children}){
    


    return (
        <GoogleMapContext.Provider value={{}}>{children}</GoogleMapContext.Provider>
    );
}