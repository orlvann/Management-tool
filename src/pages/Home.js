import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Reminders from '../components/Reminders';
import PriorityChart from '../components/PriorityChart';

const Home = () => {
  const reminders = ['Task 1 due tomorrow', 'Task 2 due next week'];

  return (
    <Box>
      <Header />
      <Container maxW='container.lg' mt={4}>
        <Flex justify='space-between'>
          <Box w='45%'>
            <Reminders reminders={reminders} />
          </Box>
          <Box w='45%'>
            <PriorityChart />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
