import { border } from '@chakra-ui/react';
import React, { useState } from 'react'
import { CameraModes, useModelCustomization } from '../../contexts/ModelCustomizationContext';




const AssetPicker = ({slides}) => {

    const { cameraMode, setCameraMode } = useModelCustomization();
    const { hairStyle, setHairStyle } = useModelCustomization();
    const { specs, setSpecs } = useModelCustomization();
    const { topOutfit, setTopOutfit } = useModelCustomization();
    const { bottomOutfit, setBottomOutfit } = useModelCustomization();
    const { footwear, setFootwear } = useModelCustomization();
    

    
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles ={
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        direction: 'row',
        height: '2rem',
        width: '20rem',
        marginTop: '0.5rem'
    }

    const slideStyles = {
        width: '2rem',
        height: '2rem',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: '0.25rem',
        backgroundColor: 'grey',
        // backgroundImage: `url(${slides[currentIndex].url})`,
        border: '5px blue'
    
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '20px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',

    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '20px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    }

    // const goToPrevious = () =>{
    //     let newIndex = currentIndex !== 0 ? currentIndex-- : currentIndex;
    //     setCurrentIndex(newIndex);
    // }

    // const goToNext = () => {
    //     let newIndex = currentIndex !== slides.length - 1 ? currentIndex++ : currentIndex;
    //     setCurrentIndex(newIndex);
    // }

    const prevHairStyle = () => {
        let newIndex = hairStyle;
        
        newIndex = newIndex === 0 ? newIndex : newIndex - 1;
        
        setHairStyle(newIndex);
        console.log(hairStyle);
    }

    const nextHairStyle = () => {
        let newIndex = hairStyle;
        
        newIndex = newIndex === 1 ? newIndex : newIndex + 1;
        
        setHairStyle(newIndex);
        console.log(hairStyle);
    }

    const prevGlasses = () => {
        let newIndex = specs;
        
        newIndex = newIndex === 0 ? newIndex : newIndex - 1;
        
        setSpecs(newIndex);
    }

    const nextGlasses = () => {
        let newIndex = specs;
        
        newIndex = newIndex === 1 ? newIndex : newIndex + 1;
        
        setSpecs(newIndex);
    }

    const prevUpperOutfit = () => {
        let newIndex = topOutfit;
        
        newIndex = newIndex === 0 ? newIndex : newIndex - 1;
        
        setTopOutfit(newIndex);
    }

    const nextUpperOutfit = () => {
        let newIndex = topOutfit;
        
        newIndex = newIndex === 1 ? newIndex : newIndex + 1;
        
        setTopOutfit(newIndex);
    }

    const prevLowerOutfit = (dir) => {
        let newIndex = bottomOutfit;
        
        newIndex = newIndex === 0 ? newIndex : newIndex - 1;
        
        setBottomOutfit(newIndex);
    }

    const nextLowerOutfit = () => {
        let newIndex = bottomOutfit;
        
        newIndex = newIndex === 1 ? newIndex : newIndex + 1;
        
        setBottomOutfit(newIndex);
    }

    const prevFootwear = () => {
        let newIndex = footwear;
        
        newIndex = newIndex === 0 ? newIndex : newIndex - 1;
        
        setFootwear(newIndex);
    }

    const nextFootwear = () => {
        let newIndex = footwear;
        
        newIndex = newIndex === 1 ? newIndex : newIndex + 1;
        
        setFootwear(newIndex);
    }

  return (
    <div className='asset-picker' style={sliderStyles}>
        {/* <div style={leftArrowStyles} onClick={goToPrevious} > ◀ </div>
        <div style={rightArrowStyles} onClick={goToNext} > ▶ </div> */}
        { cameraMode==='HEAD' && <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={prevHairStyle} > ◀ </div>
            <div style={rightArrowStyles} onClick={nextHairStyle} > ▶ </div>
            <div
                style={slideStyles} 
                title='Hair style'
            >

            </div>
        </div>}

        {cameraMode==='HEAD' && <div style={sliderStyles}>
                <div style={leftArrowStyles} onClick={prevGlasses} > ◀ </div>
                <div style={rightArrowStyles} onClick={nextGlasses} > ▶ </div>
                <div
                    style={slideStyles} 
                    title='Glasses'
                >
                </div>
            </div>
        }

        {cameraMode==='TOP' && <div style={sliderStyles}>
                <div style={leftArrowStyles} onClick={prevUpperOutfit} > ◀ </div>
                <div style={rightArrowStyles} onClick={nextUpperOutfit} > ▶ </div>
                <div
                    style={slideStyles}
                    title='Upper Outfit' 
                >
                </div>
            </div>
        }

        {cameraMode==='BOTTOM' && <div style={sliderStyles}>
                <div style={leftArrowStyles} onClick={prevLowerOutfit} > ◀ </div>
                <div style={rightArrowStyles} onClick={nextLowerOutfit} > ▶ </div>
                <div
                    style={slideStyles}
                    title='Lower Outfit' 
                >
                </div>
            </div>
        }

        {cameraMode==='BOTTOM' && <div style={sliderStyles}>
                <div style={leftArrowStyles} onClick={prevFootwear} > ◀ </div>
                <div style={rightArrowStyles} onClick={nextFootwear} > ▶ </div>
                <div
                    style={slideStyles} 
                    title='Foot wear'
                >
                </div>
            </div>
        }
    </div>
  )
}

export default AssetPicker