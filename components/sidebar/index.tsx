import React, { useRef, FormEvent } from "react";
import {
  Box,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/core";
import domtoimage from "dom-to-image";
import ColorPicker from "@/components/color-picker";

const Sidebar = ({
  backgroundColor,
  setBackgroundColor,
  browserBackgroundColor,
  setBrowserBackgroundColor,
  browserWidth,
  setBrowserWidth,
}) => {
  const generateAndDownloadImage = () => {
    domtoimage
      .toPng(document.getElementById("snapshot-node"), { quality: 0.95 })
      .then((dataUrl: string) => {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((error: Error) => {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <Box position="relative" h="full">
      <Box p={4} borderBottomWidth={1}>
        <Stack spacing={8}>
          <FormControl>
            <FormLabel>Background Color</FormLabel>
            <ColorPicker
              color={backgroundColor}
              setColor={setBackgroundColor}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Browser Background Color</FormLabel>
            <ColorPicker
              color={browserBackgroundColor}
              setColor={setBrowserBackgroundColor}
            />
          </FormControl>
        </Stack>
      </Box>
      <Box p={4} borderBottomWidth={1}>
        <FormControl>
          <FormLabel>Browser Width {`${browserWidth}%`}</FormLabel>
          <Slider
            defaultValue={browserWidth}
            min={40}
            max={100}
            step={1}
            onChange={(value) => setBrowserWidth(value)}
          >
            <SliderTrack />
            <SliderFilledTrack />
            <SliderThumb />
          </Slider>
        </FormControl>
      </Box>
      <Box position="absolute" bottom={0} p={4} w="full" borderTopWidth={1}>
        <Button
          onClick={generateAndDownloadImage}
          w="full"
          leftIcon="arrow-down"
          variantColor="cyan"
          size="lg"
        >
          Download
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
