import React, { useState } from 'react';
import { Box, Flex, Image, Text, IconButton } from '@chakra-ui/react';
import { FiCalendar } from 'react-icons/fi';
import SearchBar from './SearchBar';
import logo from '../logo.svg';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

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
      <Flex justify='space-between' align='center'>
        <Flex align='center'>
          <Image src={logo} boxSize='40px' alt='Logo' mr={2} />
          <Text fontWeight='bold' fontSize='xl'>
            Management Tool
          </Text>
        </Flex>
        <Flex align='center' display={{ base: 'none', md: 'flex' }}>
          <IconButton
            as='a'
            href='/calendar'
            icon={<FiCalendar />}
            aria-label='Go to Calendar'
            colorScheme='teal'
            mr={4}
          />
          <SearchBar value={searchValue} onChange={setSearchValue} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
