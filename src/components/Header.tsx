"use client"
import { Box, Flex, Heading, Spacer} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  return (
    <Box bg="gray.100" px={4} py={4} shadow="sm" position="sticky" top="0" zIndex="1000">
      <Flex align="center">
        <Heading size="md" color="teal.400">
          Country Dashboard
        </Heading>

        <Spacer />

        <FontAwesomeIcon icon={faEarthAmericas} style={{color:"#38b2ac", fontSize:24, maxWidth: 24}}/>
      </Flex>
    </Box>
  );
};

export default Header;
