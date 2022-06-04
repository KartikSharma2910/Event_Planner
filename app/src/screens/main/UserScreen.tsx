import { Avatar, Box, Heading, HStack } from "native-base";
import React from "react";

const UserScreen = () => {
  return (
    <Box>
      <HStack
        borderBottomColor="gray.200"
        borderBottomWidth="2"
        alignItems={"center"}
        w="100%"
        p="5"
        h="20"
        mt="5"
      >
        <Avatar bg="green.500" mr="1" size="lg">
          HS
        </Avatar>
        <Box pl="2">
          <Box fontSize="lg" fontWeight="bold">
             Kartik Sharma
          </Box>
          <Box fontSize="sm" color="gray.500">
            @kartik_sharma
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default UserScreen;
