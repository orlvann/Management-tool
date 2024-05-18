import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Box, Container, Heading, Flex, IconButton } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import Header from '../components/Header';
import TaskItem from '../components/TaskItem';
import Sidebar from '../components/Sidebar';

const TaskListPage = () => {
  const { isOpen, onToggle } = useDisclosure();
  const tasks = [
    { title: 'Task 1', priority: 'High' },
    { title: 'Task 2', priority: 'Medium' },
    { title: 'Task 3', priority: 'Low' },
  ];

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
            <Heading as='h1' mb={4}>
              Task List
            </Heading>
            {tasks.map((task, index) => (
              <TaskItem key={index} task={task} />
            ))}
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default TaskListPage;
