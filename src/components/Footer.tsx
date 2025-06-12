import { Box, Text } from "@chakra-ui/react";

const Footer = () => {

  return (
    <Box bg="teal.700" py={4} mt="auto" textAlign="center">
      <Text fontSize="sm" color={"gray.300"}>
      &copy; 2025 Country Dashboard. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
