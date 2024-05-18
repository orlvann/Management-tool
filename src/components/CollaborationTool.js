import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const CollaborationTool = () => {
  return (
    <Box p={4} bg='gray.100' borderRadius='md'>
      <Heading as='h3' size='md' mb={2}>
        Collaboration Tool & Whiteboard
      </Heading>
      {/* Placeholder for collaboration tool */}
      <Box height='200px' bg='white' borderRadius='md'>
        Collaboration content goes here
      </Box>
    </Box>
  );
};

export default CollaborationTool;
