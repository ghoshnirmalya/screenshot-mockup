import BackgroundImage from "@/components/ui/sidebar/background-image";
import BoxWidth from "@/components/ui/sidebar/box-width";
import DownloadAndResetButtons from "@/components/ui/sidebar/download-and-reset-buttons";
import Settings from "@/components/ui/sidebar/settings";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
} from "@chakra-ui/react";
import React, { FC } from "react";

const SIDEBAR_ITEMS = [
  {
    title: "Box width",
    component: BoxWidth,
  },
  {
    title: "Settings",
    component: Settings,
  },

  {
    title: "Background image",
    component: BackgroundImage,
  },
];

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
          {SIDEBAR_ITEMS.map(({ title, component: Component }, index) => {
            return (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="semibold">
                      {title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Component />
                </AccordionPanel>
              </AccordionItem>
            );
          })}
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
