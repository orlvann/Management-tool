import React from 'react';
import { Box, Heading, List, ListItem } from '@chakra-ui/react';

const TaskReminders = ({ reminders }) => {
  return (
    <Box p={4} bg='gray.100' borderRadius='md'>
      <Heading as='h3' size='md' mb={2}>
        Task List Reminders
      </Heading>
      <List spacing={2}>
        {reminders.map((reminder, index) => (
          <ListItem key={index}>{reminder}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskReminders;
