import React from 'react';
import { Box, Heading, List, ListItem } from '@chakra-ui/react';

const Reminders = ({ reminders }) => {
  return (
    <Box>
      <Heading as='h2' size='lg' mb={4}>
        Reminders
      </Heading>
      <List spacing={2}>
        {reminders.map((reminder, index) => (
          <ListItem key={index}>{reminder}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Reminders;
