import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CalendarComponent from '../components/Calendar';
import { useDisclosure } from '@chakra-ui/react';

const CalendarPage = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Header />
      <Sidebar isOpen={isOpen} onToggle={onToggle} />
      <Box
        ml={{ base: 0, md: isOpen ? '250px' : '0' }}
        transition='margin-left 0.3s ease'
        mt={{ base: '64px', md: '64px' }}
      >
        <Container maxW='container.lg' mt={4}>
          <CalendarComponent />
        </Container>
      </Box>
    </Box>
  );
};

export default CalendarPage;
