import React, { FC } from "react";
import { Box, Stack, Flex, Image } from "@chakra-ui/react";

interface IProps {
  previewBackgroundColor: any;
  browserBackgroundColor: any;
  browserAddressBarBackgroundColor: any;
  browserWidth: any;
  image: any;
  isBrowserAddressBarVisible: any;
  isBrowserShadowVisible: any;
  browserShadowSpread: any;
  isPreviewBackgroundTransparent: any;
  backgroundImage: any;
}

const ImagePreviewer: FC<IProps> = ({
  previewBackgroundColor,
  browserBackgroundColor,
  browserAddressBarBackgroundColor,
  browserWidth,
  image,
  isBrowserAddressBarVisible,
  isBrowserShadowVisible,
  browserShadowSpread,
  isPreviewBackgroundTransparent,
  backgroundImage,
}) => {
  const browserAddressBarNode = () => {
    if (!isBrowserAddressBarVisible) {
      return false;
    }

    return (
      <Stack spacing={0}>
        <Flex
          align="center"
          h={8}
          bg={browserAddressBarBackgroundColor}
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
        !!isPreviewBackgroundTransparent
          ? "transparent"
          : previewBackgroundColor
      }
      d="flex"
      justifyContent="center"
      alignItems="center"
      p={12}
      bgImage={`url(${backgroundImage})`}
      bgPos="center"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      w="full"
    >
      <Box
        shadow={
          !!isBrowserShadowVisible
            ? `0 ${browserShadowSpread}px 15px ${browserShadowSpread}px rgba(0,0,0,0.25)`
            : "none"
        }
        w={browserWidth}
      >
        {browserAddressBarNode()}
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
            borderRadius={!isBrowserAddressBarVisible ? "md" : 0}
            borderBottomLeftRadius="md"
            borderBottomRightRadius="md"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default ImagePreviewer;
