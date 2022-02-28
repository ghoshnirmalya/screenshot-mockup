import useConfigStore from "@/stores/config";
import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import Draggable from "react-draggable";

const Previewer: FC = () => {
  const { config } = useConfigStore();

  const browserAddressBarNode = () => {
    if (!config.isBrowserAddressBarVisible) {
      return false;
    }

    return (
      <Stack spacing={0}>
        <Flex
          align="center"
          h={8}
          bg={config.browserAddressBarBackgroundColor}
          px={4}
        >
          <Stack spacing={2} isInline>
            {["#fe5e55", "#febd2f", "#26c940"].map(
              (color: string, index: number) => {
                return (
                  <Box key={index} bg={color} rounded="full" h={3} w={3} />
                );
              }
            )}
          </Stack>
        </Flex>
      </Stack>
    );
  };

  return (
    <Box
      rounded="lg"
      overflow="hidden"
      shadow="md"
      id="snapshot-node"
      bg={
        !!config.showContainerBackgroundColor
          ? config.containerBackgroundColor
          : "white"
      }
      d="flex"
      justifyContent="center"
      alignItems="center"
      p={12}
      bgImage={
        config.backgroundImage
          ? `linear-gradient(rgba(0, 0, 0, ${config.darkenBackgroundImage}),rgba(0, 0, 0, ${config.darkenBackgroundImage})) , url(${config.backgroundImage})`
          : "none"
      }
      bgPos="center"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      w="full"
      minH="full"
      h="fit-content"
    >
      <Draggable>
        <Box
          shadow={
            !!config.isShadowVisible
              ? `0 ${config.browserShadowSpread}px 15px ${config.browserShadowSpread}px rgba(0,0,0,0.25)`
              : "none"
          }
          w={config.boxWidth}
          rounded="md"
          overflow="hidden"
          _hover={{
            cursor: "move",
          }}
        >
          {browserAddressBarNode()}
          <Image
            src={config.image}
            alt="Preview image"
            objectPosition="center"
            draggable={false}
          />
        </Box>
      </Draggable>
    </Box>
  );
};

export default Previewer;
