import BackgroundImageControls from "@/components/ui/sidebar/background-image-controls";
import BrowserControls from "@/components/ui/sidebar/browser-controls";
import ColorControls from "@/components/ui/sidebar/color-controls";
import DeviceControls from "@/components/ui/sidebar/device-controls";
import DownloadAndResetButtons from "@/components/ui/sidebar/download-and-reset-buttons";
import PreviewWindowControls from "@/components/ui/sidebar/preview-window-controls";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";

const Sidebar: FC = () => {
  return (
    <Box top={0} pos="sticky" height={["auto", "auto", "auto", "100vh"]}>
      <Box
        height={["auto", "auto", "auto", "calc(100vh - 145px)"]}
        overflowY="scroll"
      >
        <Box p={4}>
          <Image src="/images/logo.svg" alt="Screenshot Mockup" />
        </Box>
        <Accordion allowMultiple defaultIndex={[0, 1]}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  Browser width
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <DeviceControls />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  Advanced settings
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack spacing={2}>
                <ColorControls />
                <BrowserControls />
                <PreviewWindowControls />
              </VStack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  Background image
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <BackgroundImageControls />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box
        position={["relative", "relative", "relative", "absolute"]}
        bottom={0}
        p={4}
        w="full"
        borderTopWidth={1}
      >
        <DownloadAndResetButtons />
      </Box>
    </Box>
  );
};

export default Sidebar;
