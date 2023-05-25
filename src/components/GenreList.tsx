
import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import { getCroppedImageUrl } from '../services/image-url';


const GenreList = () => {
    const { data } = useGenres();
  return (
    <List>
        {data.map(genre => 
          <ListItem paddingY='5px' key={genre.id}>
            <HStack>
              <Image objectFit='cover' boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} alt="" />
              <Text fontSize='large'>{genre.name}</Text>
            </HStack>
          </ListItem>
        )}
    </List>
  )
}

export default GenreList
