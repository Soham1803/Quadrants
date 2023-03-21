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

    const [hairStyle, setHairStyle] = useState(0);
    const [specs, setSpecs] = useState(0);
    const [topOutfit, setTopOutfit] = useState(0);
    const [bottomOutfit, setBottomOutfit] = useState(0);
    const [footwear, setFootwear] = useState(0);

    return(
        <ModelCustomizationContext.Provider 
            value={{
                cameraMode,
                setCameraMode,

                hairStyle,
                setHairStyle,

                specs,
                setSpecs,

                topOutfit,
                setTopOutfit,
                
                bottomOutfit,
                setBottomOutfit,

                footwear,
                setFootwear
            }}
        >
            {children}
        </ModelCustomizationContext.Provider>
    );
};

export const useModelCustomization = () => {
    return useContext(ModelCustomizationContext);
}