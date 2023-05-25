import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface Props {
    onSelectPlatform: (platform: Platform | null) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
  const {data, error} = usePlatforms();

  if(error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name || 'All Platforms' }
        </MenuButton>
        <MenuList>
            <MenuItem onClick={() => onSelectPlatform(null)} key={1}>All Platforms</MenuItem>
            {/* for some reason id 2 (playstation) is the only platform that returns 
            nothing when filtering for it in the games apiso leaving it out until the 
            api resvoles this*/}
            {data.filter(platform => platform.id !== 2).map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector
