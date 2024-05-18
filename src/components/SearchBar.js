import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';

const SearchBar = ({ value, onChange, placeholder = 'Search' }) => {
  const { colorMode } = useColorMode();
  const bgColor = 'white';
  const borderColor = colorMode === 'dark' ? 'gray.600' : 'gray.200';

  return (
    <InputGroup
      bg={bgColor}
      borderColor={borderColor}
      borderRadius='md'
      boxShadow='sm'
    >
      <InputLeftElement pointerEvents='none'>
        <SearchIcon color='gray.500' />
      </InputLeftElement>
      <Input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        bg={bgColor}
        color='black'
        borderColor={borderColor}
      />
    </InputGroup>
  );
};

export default SearchBar;
