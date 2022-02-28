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
            <FormLabel htmlFor="width" w="75%" fontSize="sm">
              Width
            </FormLabel>
            <Slider
              w="75%"
              id="width"
              defaultValue={config.width}
              onChange={(value) => updateConfig("width", value)}
              step={10}
              min={50}
              max={100}
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
      <FormControl>
        <Stack spacing={4} w="100%">
          <HStack justifyContent="space-between" alignItems="center">
            <FormLabel htmlFor="show-shadow" fontSize="sm" mb={0}>
              Show shadow
            </FormLabel>
            <Switch
              id="show-shadow"
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
                defaultValue={config.shadowSpread}
                onChange={(value) => updateConfig("shadowSpread", value)}
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
                htmlFor="show-background-color"
                fontSize="sm"
                mb={0}
                w="75%"
              >
                Show background color
              </FormLabel>
              <FormHelperText fontSize="xs">
                Doesn&apos;t show up if background image is present.
              </FormHelperText>
            </VStack>
            <Switch
              id="show-background-color"
              isChecked={config.showBackgroundColor}
              onChange={() =>
                updateConfig("showBackgroundColor", !config.showBackgroundColor)
              }
            />
          </HStack>
        </Stack>
      </FormControl>
      {!!config.showBackgroundColor && (
        <FormControl>
          <HStack justify="space-between">
            <FormLabel htmlFor="backgroundColor" w="75%" fontSize="sm" mb={0}>
              Container background color
            </FormLabel>
            <ColorPicker
              color={config.backgroundColor}
              setColor={(color) => updateConfig("backgroundColor", color)}
              id="backgroundColor"
            />
          </HStack>
        </FormControl>
      )}
    </Stack>
  );
};

export default Settings;
