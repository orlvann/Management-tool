import React from 'react';
import { Box, Heading, List, ListItem } from '@chakra-ui/react';

const AssignedDocuments = ({ documents }) => {
  return (
    <Box p={4} bg='gray.100' borderRadius='md'>
      <Heading as='h3' size='md' mb={2}>
        Assigned Documents
      </Heading>
      <List spacing={2}>
        {documents.map((doc, index) => (
          <ListItem key={index}>{doc}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AssignedDocuments;
