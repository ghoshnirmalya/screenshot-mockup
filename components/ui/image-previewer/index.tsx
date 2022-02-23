import useConfigStore from "@/stores/config";
import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import React, { FC } from "react";

const ImagePreviewer: FC = () => {
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
          borderTopLeftRadius="md"
          borderTopRightRadius="md"
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
      id="snapshot-node"
      bg={
        !!config.isPreviewBackgroundTransparent
          ? "transparent"
          : config.previewBackgroundColor
      }
      d="flex"
      justifyContent="center"
      alignItems="center"
      p={12}
      bgImage={`url(${config.backgroundImage})`}
      bgPos="center"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      w="full"
    >
      <Box
        shadow={
          !!config.isBrowserShadowVisible
            ? `0 ${config.browserShadowSpread}px 15px ${config.browserShadowSpread}px rgba(0,0,0,0.25)`
            : "none"
        }
        w={config.browserWidth}
      >
        {browserAddressBarNode()}
        <Flex
          align="center"
          justify="center"
          bg={config.browserBackgroundColor}
          borderBottomLeftRadius="md"
          borderBottomRightRadius="md"
        >
          <Image
            src={config.image}
            alt="Preview image"
            borderRadius={!config.isBrowserAddressBarVisible ? "md" : 0}
            borderBottomLeftRadius="md"
            borderBottomRightRadius="md"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default ImagePreviewer;
