import BackgroundImageControls from "@/components/sidebar/background-image-controls";
import BrowserControls from "@/components/sidebar/browser-controls";
import ColorControls from "@/components/sidebar/color-controls";
import DeviceControls from "@/components/sidebar/device-controls";
import DownloadAndResetButtons from "@/components/sidebar/download-and-reset-buttons";
import PreviewWindowControls from "@/components/sidebar/preview-window-controls";
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
import React, { Dispatch, FC, SetStateAction } from "react";

interface IProps {
  previewBackgroundColor: string;
  setPreviewBackgroundColor: Dispatch<SetStateAction<string>>;
  browserBackgroundColor: string;
  setBrowserBackgroundColor: Dispatch<SetStateAction<string>>;
  browserAddressBarBackgroundColor: string;
  setBrowserAddressBarBackgroundColor: Dispatch<SetStateAction<string>>;
  isBrowserAddressBarVisible: boolean;
  setBrowserAddressBarVisibility: Dispatch<SetStateAction<boolean>>;
  isBrowserShadowVisible: boolean;
  setBrowserShadowVisibility: Dispatch<SetStateAction<boolean>>;
  browserShadowSpread: number;
  setBrowserShadowSpread: Dispatch<SetStateAction<number>>;
  browserWidth: string;
  setBrowserWidth: Dispatch<SetStateAction<string>>;
  isPreviewBackgroundTransparent: boolean;
  setPreviewBackgroundTransparent: Dispatch<SetStateAction<boolean>>;
  image: string | ArrayBuffer | null;
  setImage: Dispatch<SetStateAction<string | ArrayBuffer | null>>;
  backgroundImage: string | ArrayBuffer;
  setBackgroundImage: Dispatch<SetStateAction<string | ArrayBuffer>>;
}

const Sidebar: FC<IProps> = ({
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
  browserWidth,
  setBrowserWidth,
  isPreviewBackgroundTransparent,
  setPreviewBackgroundTransparent,
  image,
  setImage,
  backgroundImage,
  setBackgroundImage,
}) => {
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
              <DeviceControls
                browserWidth={browserWidth}
                setBrowserWidth={setBrowserWidth}
              />
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
                <ColorControls
                  previewBackgroundColor={previewBackgroundColor}
                  setPreviewBackgroundColor={setPreviewBackgroundColor}
                  browserBackgroundColor={browserBackgroundColor}
                  setBrowserBackgroundColor={setBrowserBackgroundColor}
                  browserAddressBarBackgroundColor={
                    browserAddressBarBackgroundColor
                  }
                  setBrowserAddressBarBackgroundColor={
                    setBrowserAddressBarBackgroundColor
                  }
                />
                <BrowserControls
                  isBrowserAddressBarVisible={isBrowserAddressBarVisible}
                  setBrowserAddressBarVisibility={
                    setBrowserAddressBarVisibility
                  }
                  isBrowserShadowVisible={isBrowserShadowVisible}
                  setBrowserShadowVisibility={setBrowserShadowVisibility}
                  browserShadowSpread={browserShadowSpread}
                  setBrowserShadowSpread={setBrowserShadowSpread}
                />
                <PreviewWindowControls
                  isPreviewBackgroundTransparent={
                    isPreviewBackgroundTransparent
                  }
                  setPreviewBackgroundTransparent={
                    setPreviewBackgroundTransparent
                  }
                />
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
              <BackgroundImageControls
                backgroundImage={backgroundImage}
                setBackgroundImage={setBackgroundImage}
                previewBackgroundColor={previewBackgroundColor}
              />
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
        <DownloadAndResetButtons image={image} setImage={setImage} />
      </Box>
    </Box>
  );
};

export default Sidebar;
