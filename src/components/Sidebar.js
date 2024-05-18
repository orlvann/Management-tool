import React from 'react';
import { Flex, List, ListItem, ListIcon, Link, Box } from '@chakra-ui/react';
import {
  FiHome,
  FiList,
  FiUsers,
  FiClipboard,
  FiCalendar,
} from 'react-icons/fi';
import { useColorMode } from '@chakra-ui/react';

const Sidebar = ({ isOpen, onToggle }) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.700' : 'white';
  const borderColor = colorMode === 'dark' ? 'gray.600' : 'gray.200';

  return (
    <Flex
      bg={bgColor}
      borderColor={borderColor}
      direction='column'
      position='fixed'
      left={isOpen ? '0' : '-250px'}
      top='0'
      p='5'
      h='100vh'
      shadow='md'
      width='250px'
      overflowY='auto'
      transition='left 0.2s'
      zIndex='10'
    >
      <Box mb='55' />
      {isOpen && (
        <List spacing={2}>
          <ListItem>
            <Link href='/' display='flex' alignItems='center'>
              <ListIcon as={FiHome} />
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/tasks' display='flex' alignItems='center'>
              <ListIcon as={FiList} />
              Task List
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/collaboration' display='flex' alignItems='center'>
              <ListIcon as={FiUsers} />
              Collaboration Tool
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/whiteboard' display='flex' alignItems='center'>
              <ListIcon as={FiClipboard} />
              Whiteboard
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/calendar' display='flex' alignItems='center'>
              <ListIcon as={FiCalendar} />
              Calendar
            </Link>
          </ListItem>
        </List>
      )}
    </Flex>
  );
};

export default Sidebar;
