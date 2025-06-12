import { Box, Heading, Text } from "@chakra-ui/react";

const PageIntro = () => (
  <Box textAlign="center" mt={8} mb={8} px={4}>
    <Heading size="lg" mb={2} color="teal.500">
      Global Country Statistics
    </Heading>
    <Text fontSize="md" color="gray.600">
      Explore demographic and migration data for countries worldwide. Select a country and indicator to visualize its trends.
    </Text>
  </Box>
);

export default PageIntro;
