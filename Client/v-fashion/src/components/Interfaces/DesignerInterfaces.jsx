import React from 'react'
import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { CameraModes,
         useModelCustomization,
        } from '../../contexts/ModelCustomizationContext';
import AssetPicker from './AssetPicker';



const DesignerInterfaces = () => {

  const { cameraMode, setCameraMode } = useModelCustomization();

  return (
    <Flex
      direction='column'
      alignItems='center'
      margin='0.5rem'
    >
      <ButtonGroup
        alignItems='center'
        colorScheme='purple'
        size={{'base':'sm', 'sm':'sm'}}
        spacing={{'base':'0.5rem', 'md':'1rem', 'sm':'1rem'}}
      >
      {Object.keys(CameraModes).map((mode) => (
          <Button
            key={mode}
            variant={mode === cameraMode ? 'solid' : 'outline'}
            onClick={()=>setCameraMode(mode)}
          >
            {console.log(cameraMode)}
            {mode}
          </Button>

      ))}
      </ButtonGroup>
      
      <AssetPicker />
    </Flex>
  )
}

export default DesignerInterfaces;