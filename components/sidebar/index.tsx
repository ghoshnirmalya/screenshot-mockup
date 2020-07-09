import React from "react";
import {
  Box,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/core";
import domtoimage from "dom-to-image";
import ColorPicker from "@/components/color-picker";
import { MdFileDownload, MdGraphicEq } from "react-icons/md";

const Sidebar = ({
  previewBackgroundColor,
  setPreviewBackgroundColor,
  browserBackgroundColor,
  setBrowserBackgroundColor,
  browserAddressBarBackgroundColor,
  setBrowserAddressBarBackgroundColor,
  isBrowserAddressBarVisible,
  setBrowserAddressBarVisibility,
  isBrowserShadowVisible,
  setBrowserShadowVisibility,
  browserShadowSpread,
  setBrowserShadowSpread,
}) => {
  const generateAndDownloadImage = () => {
    domtoimage
      .toPng(document.getElementById("snapshot-node"), { quality: 0.95 })
      .then((dataUrl: string) => {
        let link = document.createElement("a");

        link.download = "screenshot-mockup.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error: Error) => {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <Box pos="relative" height="calc(100vh - 74px)">
      <Box height="calc(100vh - 74px - 81px)" overflowY="scroll">
        <Box p={4} borderBottomWidth={1}>
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
        </Box>
        <Box p={4} borderBottomWidth={1}>
          <FormControl>
            <Stack spacing={4} isInline alignItems="center">
              <Switch
                id="show-browser-address-bar"
                isChecked={isBrowserAddressBarVisible}
                onChange={() =>
                  setBrowserAddressBarVisibility(!isBrowserAddressBarVisible)
                }
              />
              <FormLabel htmlFor="show-browser-address-bar">
                Show Browser's Address Bar
              </FormLabel>
            </Stack>
          </FormControl>
        </Box>
        <Box p={4} borderBottomWidth={1}>
          <Stack spacing={8}>
            <FormControl>
              <Stack spacing={4} isInline alignItems="center">
                <Switch
                  id="show-browser-shadow"
                  isChecked={isBrowserShadowVisible}
                  onChange={() =>
                    setBrowserShadowVisibility(!isBrowserShadowVisible)
                  }
                />
                <FormLabel htmlFor="show-browser-shadow">
                  Show Browser's Shadow
                </FormLabel>
              </Stack>
            </FormControl>
            <FormControl>
              <FormLabel>Shadow length of Browser</FormLabel>
              <Slider
                defaultValue={browserShadowSpread}
                onChange={(value) => setBrowserShadowSpread(value)}
                step={1}
                min={0}
                max={10}
              >
                <SliderTrack />
                <SliderFilledTrack />
                <SliderThumb size={6}>
                  <Box as={MdGraphicEq} />
                </SliderThumb>
              </Slider>
            </FormControl>
          </Stack>
        </Box>
      </Box>
      <Box position="absolute" bottom={0} p={4} w="full" borderTopWidth={1}>
        <Button
          onClick={generateAndDownloadImage}
          w="full"
          leftIcon={MdFileDownload}
          variantColor="cyan"
          size="lg"
        >
          Download Image
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
