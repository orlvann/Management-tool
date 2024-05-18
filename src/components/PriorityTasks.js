import React from 'react';
import { Box, Heading, List, ListItem } from '@chakra-ui/react';

const PriorityTasks = ({ tasks }) => {
  return (
    <Box p={4} bg='gray.100' borderRadius='md'>
      <Heading as='h3' size='md' mb={2}>
        Priority Tasks
      </Heading>
      <List spacing={2}>
        {tasks.map((task, index) => (
          <ListItem key={index}>{task}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PriorityTasks;
