import ColorPicker from "@/components/ui/color-picker";
import useConfigStore from "@/stores/config";
import { FormControl, FormLabel, HStack, Stack } from "@chakra-ui/react";
import React, { FC } from "react";

const ColorControls: FC = () => {
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
    </Stack>
  );
};

export default ColorControls;
