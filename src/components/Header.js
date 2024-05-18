import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import logo from '../logo.svg';

const Header = () => {
  return (
    <Box
      bg='teal.500'
      p={4}
      color='white'
      position='fixed'
      width='100%'
      top='0'
      zIndex='1000'
    >
      <Flex align='center'>
        <Image src={logo} boxSize='40px' alt='Logo' mr={2} />
        <Text fontWeight='bold' fontSize='xl'>
          Management Tool
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
