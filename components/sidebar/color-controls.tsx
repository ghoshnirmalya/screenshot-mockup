import React, { FC } from "react";
import { Stack, FormControl, FormLabel, Text, HStack } from "@chakra-ui/react";
import ColorPicker from "@/components/color-picker";

interface IProps {
  previewBackgroundColor: any;
  setPreviewBackgroundColor: any;
  browserBackgroundColor: any;
  setBrowserBackgroundColor: any;
  browserAddressBarBackgroundColor: any;
  setBrowserAddressBarBackgroundColor: any;
}

const ColorControls: FC<IProps> = ({
  previewBackgroundColor,
  setPreviewBackgroundColor,
  browserBackgroundColor,
  setBrowserBackgroundColor,
  browserAddressBarBackgroundColor,
  setBrowserAddressBarBackgroundColor,
}) => {
  return (
    <Stack spacing={0}>
      <FormControl>
        <HStack justify="space-between">
          <FormLabel htmlFor="previewBackgroundColor" w="50%">
            Preview window background
          </FormLabel>
          <ColorPicker
            color={previewBackgroundColor}
            setColor={setPreviewBackgroundColor}
            id="previewBackgroundColor"
          />
        </HStack>
      </FormControl>
      <FormControl>
        <HStack justify="space-between">
          <FormLabel htmlFor="browserBackgroundColor" w="50%">
            Browser background
          </FormLabel>
          <ColorPicker
            color={browserBackgroundColor}
            setColor={setBrowserBackgroundColor}
            id="browserBackgroundColor"
          />
        </HStack>
      </FormControl>
      <FormControl>
        <HStack justify="space-between">
          <FormLabel htmlFor="browserAddressBarBackgroundColor" w="50%">
            Browser address bar background
          </FormLabel>
          <ColorPicker
            color={browserAddressBarBackgroundColor}
            setColor={setBrowserAddressBarBackgroundColor}
            id="browserAddressBarBackgroundColor"
          />
        </HStack>
      </FormControl>
    </Stack>
  );
};

export default ColorControls;
