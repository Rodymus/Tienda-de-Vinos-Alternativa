import { Image, Card, CardHeader, Box, CardFooter, Stack, Text, Heading, Divider, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const ProductCard = ({elemento}) => {
  return (
    
    <Card className="card">
      <Box>
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{elemento.title}</Heading>
      <Image boxSize='300px' src={elemento.img} />
        <Text color='blue.600' fontSize='2xl'>$ {elemento.price}</Text>
      </Stack>
      <Divider />
      <CardFooter>
        <Button variant='solid' colorScheme='blue'>
          Ver detalle
        </Button>        
      </CardFooter>
      </Box>
    </Card>
  )
}

export default ProductCard