import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  Box,
  Button,
  Textarea,
  Select,
  VStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Tooltip } from 'react-tooltip';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventDetails, setEventDetails] = useState('');
  const [assignedUser, setAssignedUser] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDateChange = (date) => {
    setDate(date);
    setSelectedDate(date);
    onOpen();
  };

  const addEvent = () => {
    setEvents([...events, { date, eventDetails, assignedUser }]);
    setEventDetails('');
    setAssignedUser('');
    onClose();
  };

  const eventsForSelectedDate = events.filter(
    (event) =>
      new Date(event.date).toDateString() ===
      new Date(selectedDate).toDateString()
  );

  const getTileContent = ({ date, view }) => {
    if (view === 'month') {
      const dayEvents = events.filter(
        (event) =>
          new Date(event.date).toDateString() === new Date(date).toDateString()
      );

      if (dayEvents.length > 0) {
        return (
          <div>
            <span data-tip data-for={date.toDateString()}></span>
            <Tooltip id={date.toDateString()} place='top' effect='solid'>
              {dayEvents.map((event, index) => (
                <div key={index}>
                  <Text>{`Event: ${event.eventDetails}`}</Text>
                  <Text>{`Assigned to: ${event.assignedUser}`}</Text>
                </div>
              ))}
            </Tooltip>
          </div>
        );
      }
    }
  };

  const getTileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dayEvents = events.filter(
        (event) =>
          new Date(event.date).toDateString() === new Date(date).toDateString()
      );

      const isToday =
        new Date().toDateString() === new Date(date).toDateString();

      if (isToday) {
        return 'highlight-today';
      }

      if (dayEvents.length > 0) {
        return 'highlight';
      }
    }
    return '';
  };

  return (
    <Box bg='white' p={4} borderRadius='md' boxShadow='sm'>
      <style>
        {`
          .highlight {
            background-color: #47BCB1; 
            color: white;
            border-radius: 8px;
          }
          .highlight-today {
            background-color: #81E6D9; 
            color: white;
            border-radius: 8px;
          }
        `}
      </style>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileContent={getTileContent}
        tileClassName={getTileClassName}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Text>{`Events for ${
                selectedDate ? new Date(selectedDate).toDateString() : ''
              }`}</Text>
              {eventsForSelectedDate.map((event, index) => (
                <Box
                  key={index}
                  border='1px'
                  borderRadius='md'
                  p={2}
                  width='100%'
                >
                  <Text>{`Event: ${event.eventDetails}`}</Text>
                  <Text>{`Assigned to: ${event.assignedUser}`}</Text>
                </Box>
              ))}
              <Textarea
                placeholder='Event Details'
                value={eventDetails}
                onChange={(e) => setEventDetails(e.target.value)}
              />
              <Select
                placeholder='Assign User'
                value={assignedUser}
                onChange={(e) => setAssignedUser(e.target.value)}
              >
                <option value='User 1'>User 1</option>
                <option value='User 2'>User 2</option>
                <option value='User 3'>User 3</option>
              </Select>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='teal' onClick={addEvent}>
              Add Event
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CalendarComponent;
