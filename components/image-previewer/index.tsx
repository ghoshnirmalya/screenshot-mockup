import React from "react";
import { Box, Button, Stack, Flex, Image } from "@chakra-ui/core";

const ImagePreviewer = ({
  backgroundColor,
  browserBackgroundColor,
  browserWidth,
  image,
}) => {
  return (
    <Box
      id="snapshot-node"
      bg={backgroundColor}
      d="flex"
      justifyContent="center"
      alignItems="center"
      p={12}
    >
      <Box shadow="lg" w={browserWidth}>
        <Stack spacing={0}>
          <Flex
            align="center"
            h={8}
            bg="black"
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            px={4}
          >
            <Stack spacing={2} isInline>
              <Box bg="#fe5e55" rounded="full" h={3} w={3} />
              <Box bg="#febd2f" rounded="full" h={3} w={3} />
              <Box bg="#26c940" rounded="full" h={3} w={3} />
            </Stack>
          </Flex>
        </Stack>
        <Flex
          align="center"
          justify="center"
          bg={browserBackgroundColor}
          borderBottomLeftRadius="md"
          borderBottomRightRadius="md"
        >
          <Image
            // @ts-ignore
            src={image}
            alt="Preview image"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default ImagePreviewer;
