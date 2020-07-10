import React from "react";
import { Stack, FormControl, FormLabel } from "@chakra-ui/core";
import ColorPicker from "@/components/color-picker";

const ColorControls = ({
  previewBackgroundColor,
  setPreviewBackgroundColor,
  browserBackgroundColor,
  setBrowserBackgroundColor,
  browserAddressBarBackgroundColor,
  setBrowserAddressBarBackgroundColor,
}) => {
  return (
    <Stack spacing={8}>
      <FormControl>
        <FormLabel>Background Color of Preview window</FormLabel>
        <ColorPicker
          color={previewBackgroundColor}
          setColor={setPreviewBackgroundColor}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Background Color of Browser</FormLabel>
        <ColorPicker
          color={browserBackgroundColor}
          setColor={setBrowserBackgroundColor}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Background Color of Browser's Address Bar</FormLabel>
        <ColorPicker
          color={browserAddressBarBackgroundColor}
          setColor={setBrowserAddressBarBackgroundColor}
        />
      </FormControl>
    </Stack>
  );
};

export default ColorControls;
