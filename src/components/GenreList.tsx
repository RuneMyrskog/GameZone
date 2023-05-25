
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import { getCroppedImageUrl } from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner/>
  if (error) return null;
  return (
    <List>
        {data.map(genre => 
          <ListItem paddingY='5px' key={genre.id}>
            <HStack>
              <Image objectFit='cover' boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} alt="" />
              <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant='link' fontSize='large'>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        )}
    </List>
  )
}

export default GenreList
