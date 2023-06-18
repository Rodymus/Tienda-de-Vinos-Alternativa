import { Box, Flex, Heading, Spacer, MenuItem, MenuList, Menu, MenuButton, Button } from '@chakra-ui/react';
import CartWidget from './cart/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="1">
        <Box>
          <Link to="/">
            <Heading size="md">Tienda de Vinos</Heading>
          </Link>
        </Box>
        <Spacer />
      <Menu>
        <MenuButton
        as={Button}
        size="lg"
        variant="outline"
        colorScheme="blue"
        >
          Categorias
        </MenuButton>
        <MenuList>
          <Link to={'/category/tinto'}>
            <MenuItem>Tinto</MenuItem>
          </Link>
          <Link to={'/category/blanco'}>
            <MenuItem>Blanco</MenuItem>
          </Link>
          <Link to={'/category/rosado'}>
            <MenuItem>Rosado</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Spacer />
        <CartWidget />
      </Flex>

      {/*<Box boxSize='800px'>
      <Image src='https://res.cloudinary.com/da5x6tuuw/image/upload/v1684969081/una-botella-de-vino-tinto_l7snoz.jpg' alt='' />
  </Box>*/}
    </>
  );
};

export default NavBar;
