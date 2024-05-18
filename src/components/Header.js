import React from 'react';
import { Box, Flex, Link, Image } from '@chakra-ui/react';
import logo from '../logo.svg';

const Header = () => {
  return (
    <Box bg='teal.500' p={4} color='white'>
      <Flex justify='space-between' align='center'>
        <Flex align='center'>
          <Image src={logo} boxSize='40px' alt='Logo' mr={2} />
          <Box fontWeight='bold' fontSize='xl'>
            Management Tool
          </Box>
        </Flex>
        <Flex>
          <Link href='/' p={2} color='white'>
            Home
          </Link>
          <Link href='/tasks' p={2} color='white'>
            Task List
          </Link>
          <Link href='/collaboration' p={2} color='white'>
            Collaboration
          </Link>
          <Link href='/whiteboard' p={2} color='white'>
            Whiteboard
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
