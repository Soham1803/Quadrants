import { createContext, useState, useContext } from "react";

const ModelCustomizationContext = createContext({});

export const CameraModes = {
    FREE:"FREE",
    HEAD:"HEAD",
    TOP:"TOP",
    BOTTOM:"BOTTOM"
};

export const ModelCustomizationProvider = ({children}) =>{
    const [cameraMode, setCameraMode] = useState(CameraModes.FREE);

    return(
        <ModelCustomizationContext.Provider 
            value={{
                cameraMode,
                setCameraMode
            }}
        >
            {children}
        </ModelCustomizationContext.Provider>
    );
};

export const useModelCustomization = () => {
    return useContext(ModelCustomizationContext);
}