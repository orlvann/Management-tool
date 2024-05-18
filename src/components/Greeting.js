import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Greeting = ({ username }) => {
  return (
    <Box mb={4}>
      <Text fontSize='2xl' fontWeight='bold'>
        Hello, {username}
      </Text>
    </Box>
  );
};

export default Greeting;
