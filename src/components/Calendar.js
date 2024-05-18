import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Calendar = () => {
  return (
    <Box p={4} bg='gray.100' borderRadius='md'>
      <Heading as='h3' size='md' mb={2}>
        Calendar with Features
      </Heading>
      <Box height='200px' bg='white' borderRadius='md'>
        Calendar content goes here
      </Box>
    </Box>
  );
};

export default Calendar;
