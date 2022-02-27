import ColorPicker from "@/components/ui/color-picker";
import useConfigStore from "@/stores/config";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Switch,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { MdGraphicEq } from "react-icons/md";

const Settings: FC = () => {
  const { config, updateConfig } = useConfigStore();

  return (
    <Stack spacing={2}>
      <FormControl>
        <Stack spacing={4} w="100%">
          <HStack justifyContent="space-between" alignItems="center">
            <FormLabel
              htmlFor="show-browser-address-bar"
              w="75%"
              fontSize="sm"
              mb={0}
            >
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
      {!!config.isBrowserAddressBarVisible && (
        <FormControl>
          <HStack justify="space-between">
            <FormLabel
              htmlFor="browserAddressBarBackgroundColor"
              w="75%"
              fontSize="sm"
              mb={0}
            >
              Browser address bar background
            </FormLabel>
            <ColorPicker
              color={config.browserAddressBarBackgroundColor}
              setColor={(color) =>
                updateConfig("browserAddressBarBackgroundColor", color)
              }
              id="browserAddressBarBackgroundColor"
            />
          </HStack>
        </FormControl>
      )}
      <FormControl>
        <Stack spacing={4} w="100%">
          <HStack justifyContent="space-between" alignItems="center">
            <FormLabel htmlFor="show-box-shadow" fontSize="sm" mb={0}>
              Show box shadow
            </FormLabel>
            <Switch
              id="show-box-shadow"
              isChecked={config.isShadowVisible}
              onChange={() =>
                updateConfig("isShadowVisible", !config.isShadowVisible)
              }
            />
          </HStack>
        </Stack>
      </FormControl>
      {!!config.isShadowVisible && (
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
      )}
      <FormControl>
        <Stack spacing={4} w="100%">
          <HStack justifyContent="space-between" alignItems="flex-start">
            <VStack alignItems="flex-start" spacing={0}>
              <FormLabel
                htmlFor="show-container-background-color"
                fontSize="sm"
                mb={0}
                w="75%"
              >
                Show container background color
              </FormLabel>
              <FormHelperText fontSize="xs">
                Doesn&apos;t show up if background image is present.
              </FormHelperText>
            </VStack>
            <Switch
              id="show-container-background-color"
              isChecked={config.showContainerBackgroundColor}
              onChange={() =>
                updateConfig(
                  "showContainerBackgroundColor",
                  !config.showContainerBackgroundColor
                )
              }
            />
          </HStack>
        </Stack>
      </FormControl>
      {!!config.showContainerBackgroundColor && (
        <FormControl>
          <HStack justify="space-between">
            <FormLabel
              htmlFor="containerBackgroundColor"
              w="75%"
              fontSize="sm"
              mb={0}
            >
              Container background color
            </FormLabel>
            <ColorPicker
              color={config.containerBackgroundColor}
              setColor={(color) =>
                updateConfig("containerBackgroundColor", color)
              }
              id="containerBackgroundColor"
            />
          </HStack>
        </FormControl>
      )}
    </Stack>
  );
};

export default Settings;
