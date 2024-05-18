import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const TaskItem = ({ task }) => {
  return (
    <Box p={4} bg='gray.100' borderRadius='md' mb={2}>
      <Text fontWeight='bold'>{task.title}</Text>
      <Text>Priority: {task.priority}</Text>
    </Box>
  );
};

export default TaskItem;
