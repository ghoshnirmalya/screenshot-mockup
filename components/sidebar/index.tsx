import React from "react";
import { Box, Image } from "@chakra-ui/core";
import DownloadAndResetButtons from "@/components/sidebar/download-and-reset-buttons";
import ColorControls from "@/components/sidebar/color-controls";
import BrowserControls from "@/components/sidebar/browser-controls";
import PreviewWindowControls from "@/components/sidebar/preview-window-controls";
import DeviceControls from "@/components/sidebar/device-controls";

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
  browserWidth,
  setBrowserWidth,
  isPreviewBackgroundTransparent,
  setPreviewBackgroundTransparent,
  image,
  setImage,
}) => {
  return (
    <Box top={0} pos="sticky" height="100vh">
      <Box height="calc(100vh - 81px)" overflowY="scroll">
        <Box p={4} borderBottomWidth={1}>
          <Image src="/images/logo.svg" alt="Screenshot Mockup" />
        </Box>
        <Box p={4} borderBottomWidth={1}>
          <DeviceControls
            browserWidth={browserWidth}
            setBrowserWidth={setBrowserWidth}
          />
        </Box>
        <Box p={4} borderBottomWidth={1}>
          <ColorControls
            previewBackgroundColor={previewBackgroundColor}
            setPreviewBackgroundColor={setPreviewBackgroundColor}
            browserBackgroundColor={browserBackgroundColor}
            setBrowserBackgroundColor={setBrowserBackgroundColor}
            browserAddressBarBackgroundColor={browserAddressBarBackgroundColor}
            setBrowserAddressBarBackgroundColor={
              setBrowserAddressBarBackgroundColor
            }
          />
        </Box>
        <Box p={4} borderBottomWidth={1}>
          <BrowserControls
            isBrowserAddressBarVisible={isBrowserAddressBarVisible}
            setBrowserAddressBarVisibility={setBrowserAddressBarVisibility}
            isBrowserShadowVisible={isBrowserShadowVisible}
            setBrowserShadowVisibility={setBrowserShadowVisibility}
            browserShadowSpread={browserShadowSpread}
            setBrowserShadowSpread={setBrowserShadowSpread}
          />
        </Box>
        <Box p={4} borderBottomWidth={1}>
          <PreviewWindowControls
            isPreviewBackgroundTransparent={isPreviewBackgroundTransparent}
            setPreviewBackgroundTransparent={setPreviewBackgroundTransparent}
          />
        </Box>
      </Box>
      <Box position="absolute" bottom={0} p={4} w="full" borderTopWidth={1}>
        <DownloadAndResetButtons image={image} setImage={setImage} />
      </Box>
    </Box>
  );
};

export default Sidebar;
