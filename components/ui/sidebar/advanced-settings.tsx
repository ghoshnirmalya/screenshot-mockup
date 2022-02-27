import ColorPicker from "@/components/ui/color-picker";
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

const AdvancedSettings: FC = () => {
  const { config, updateConfig } = useConfigStore();

  return (
    <Stack spacing={2}>
      <FormControl>
        <HStack justify="space-between">
          <FormLabel
            htmlFor="previewBackgroundColor"
            w="75%"
            fontSize="sm"
            mb={0}
          >
            Preview window background
          </FormLabel>
          <ColorPicker
            color={config.previewBackgroundColor}
            setColor={(color) => updateConfig("previewBackgroundColor", color)}
            id="previewBackgroundColor"
          />
        </HStack>
      </FormControl>
      <FormControl>
        <HStack justify="space-between">
          <FormLabel
            htmlFor="browserBackgroundColor"
            w="75%"
            fontSize="sm"
            mb={0}
          >
            Browser background
          </FormLabel>
          <ColorPicker
            color={config.browserBackgroundColor}
            setColor={(color) => updateConfig("browserBackgroundColor", color)}
            id="browserBackgroundColor"
          />
        </HStack>
      </FormControl>
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
      <FormControl>
        <HStack justify="space-between">
          <FormLabel
            htmlFor="show-transparent-preview-background"
            fontSize="sm"
          >
            Use transparent Background for Preview window
          </FormLabel>
          <Switch
            id="show-transparent-preview-background"
            isChecked={config.isPreviewBackgroundTransparent}
            onChange={() =>
              updateConfig(
                "isPreviewBackgroundTransparent",
                !config.isPreviewBackgroundTransparent
              )
            }
          />
        </HStack>
      </FormControl>
    </Stack>
  );
};

export default AdvancedSettings;
