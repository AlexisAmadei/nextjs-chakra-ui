'use client';
import { Box, Flex, Heading, Highlight } from "@chakra-ui/react";
import { ColorModeButton } from "../components/ui/color-mode";

export default function Home() {
  return (
    <Box
      px={6}
      py={5}
      height="100%"
      maxHeight="100vh"
      boxSizing="border-box"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        width="100%"
        borderRadius={'md'}
        py={1}
      >
        <Heading as="h1" size="2xl">
          <Highlight query={'KIWI'} styles={{ color: 'teal.400' }}>
            KIWI FLIX
          </Highlight>
        </Heading>

        <ColorModeButton />
      </Flex>
    </Box>
  );
}
