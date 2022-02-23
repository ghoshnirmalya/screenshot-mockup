import useConfigStore from "@/stores/config";
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Switch,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { MdGraphicEq } from "react-icons/md";

const BrowserControls: FC = () => {
  const { config, updateConfig } = useConfigStore();

  return (
    <Stack spacing={2} w="100%">
      <FormControl>
        <Stack spacing={4} w="100%">
          <HStack justifyContent="space-between" alignItems="center">
            <FormLabel htmlFor="show-browser-address-bar" w="75%" fontSize="sm">
              Show browser address bar
            </FormLabel>
            <Switch
              id="show-browser-address-bar"
              isChecked={config.isBrowserAddressBarVisible}
              onChange={() =>
                updateConfig(
                  "isBrowserAddressBarVisible",
                  !config.isBrowserAddressBarVisible
                )
              }
            />
          </HStack>
        </Stack>
      </FormControl>
      <FormControl>
        <Stack spacing={4} w="100%">
          <HStack justifyContent="space-between" alignItems="center">
            <FormLabel htmlFor="show-browser-shadow" fontSize="sm">
              Show browser shadow
            </FormLabel>
            <Switch
              id="show-browser-shadow"
              isChecked={config.isBrowserShadowVisible}
              onChange={() =>
                updateConfig(
                  "isBrowserShadowVisible",
                  !config.isBrowserShadowVisible
                )
              }
            />
          </HStack>
        </Stack>
      </FormControl>
      <FormControl>
        <Stack spacing={4} w="100%">
          <HStack justifyContent="space-between" alignItems="center">
            <FormLabel htmlFor="browser-shadow-length" w="75%" fontSize="sm">
              Browser shadow length
            </FormLabel>
            <Slider
              w="75%"
              id="browser-shadow-length"
              defaultValue={config.browserShadowSpread}
              onChange={(value) => updateConfig("browserShadowSpread", value)}
              step={1}
              min={0}
              max={10}
            >
              <SliderTrack />
              <SliderFilledTrack />
              <SliderThumb boxSize={6}>
                <Box as={MdGraphicEq} />
              </SliderThumb>
            </Slider>
          </HStack>
        </Stack>
      </FormControl>
    </Stack>
  );
};

export default BrowserControls;
