import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';


const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode();
  const isChecked = colorMode === 'dark';

  return (
    <HStack>
        <Switch colorScheme='green' isChecked={isChecked} onChange={toggleColorMode}/>
        {isChecked ? <BsMoonStarsFill /> : <BsSunFill/>}
    </HStack>
  )
}

export default ColorModeSwitch
