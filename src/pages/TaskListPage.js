import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import Header from '../components/Header';
import TaskItem from '../components/TaskItem';

const TaskListPage = () => {
  const tasks = [
    { title: 'Task 1', priority: 'High' },
    { title: 'Task 2', priority: 'Medium' },
    { title: 'Task 3', priority: 'Low' },
  ];

  return (
    <Box>
      <Header />
      <Container maxW='container.lg' mt={4}>
        <Heading as='h1' mb={4}>
          Task List
        </Heading>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </Container>
    </Box>
  );
};

export default TaskListPage;
