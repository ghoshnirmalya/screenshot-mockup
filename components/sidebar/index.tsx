import React from "react";
import { Box, Button, Stack, FormControl, FormLabel } from "@chakra-ui/core";
import domtoimage from "dom-to-image";
import ColorPicker from "@/components/color-picker";
import { MdFileDownload } from "react-icons/md";

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
      <Box position="absolute" bottom={0} p={4} w="full" borderTopWidth={1}>
        <Button
          onClick={generateAndDownloadImage}
          w="full"
          leftIcon={MdFileDownload}
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
