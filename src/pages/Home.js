import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Box, Container, SimpleGrid, IconButton, Flex } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';
import Greeting from '../components/Greeting';
import TaskReminders from '../components/TaskReminders';
import PriorityTasks from '../components/PriorityTasks';
import AssignedDocuments from '../components/AssignedDocuments';
import Calendar from '../components/Calendar';
import CollaborationTool from '../components/CollaborationTool';
import Header from '../components/Header';

const HomePage = () => {
  const { isOpen, onToggle } = useDisclosure();

  const username = 'User'; // Replace with dynamic username if available
  const reminders = ['Task 1 due tomorrow', 'Task 2 due next week'];
  const priorityTasks = ['High Priority Task 1', 'High Priority Task 2'];
  const documents = ['Document 1', 'Document 2'];

  return (
    <Box>
      <Header />
      <Flex direction='column' mt='64px'>
        {' '}
        <IconButton
          icon={<FiMenu />}
          onClick={onToggle}
          aria-label='Open Menu'
          position='fixed'
          top='80px'
          left='16px'
          zIndex='20'
        />
        <Sidebar isOpen={isOpen} onToggle={onToggle} />
        <Box
          flex='1'
          ml={{ base: 0, md: isOpen ? '250px' : '0' }}
          transition='margin-left 0.2s'
        >
          <Container maxW='container.lg' mt={4} pt={{ base: 16, md: 0 }}>
            <Greeting username={username} />
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <TaskReminders reminders={reminders} />
              <PriorityTasks tasks={priorityTasks} />
              <AssignedDocuments documents={documents} />
              <Calendar />
              <CollaborationTool />
            </SimpleGrid>
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePage;
