import useConfigStore from "@/stores/config";
import { Box, Image } from "@chakra-ui/react";
import React, { FC } from "react";
import Draggable from "react-draggable";

const Previewer: FC = () => {
  const { config } = useConfigStore();

  return (
    <Box
      rounded="lg"
      overflow="hidden"
      shadow="md"
      id="snapshot-node"
      bg={!!config.showBackgroundColor ? config.backgroundColor : "white"}
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
      h="full"
    >
      <Draggable>
        <Box
          shadow={
            !!config.isShadowVisible
              ? `0 ${config.shadowSpread}px 15px ${config.shadowSpread}px rgba(0,0,0,0.25)`
              : "none"
          }
          w={`${config.width}%`}
          rounded="md"
          overflow="hidden"
          _hover={{
            cursor: "move",
          }}
        >
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
