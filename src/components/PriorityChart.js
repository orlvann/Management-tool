import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const PriorityChart = () => {
  return (
    <Box>
      <Heading as='h2' size='lg' mb={4}>
        Priority Levels
      </Heading>
      <Box bg='gray.100' p={4} borderRadius='md'>
        Chart will go here
      </Box>
    </Box>
  );
};

export default PriorityChart;
