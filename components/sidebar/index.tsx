import React, { Dispatch, FC, SetStateAction } from "react";
import { Box, Image } from "@chakra-ui/react";
import DownloadAndResetButtons from "@/components/sidebar/download-and-reset-buttons";
import ColorControls from "@/components/sidebar/color-controls";
import BrowserControls from "@/components/sidebar/browser-controls";
import PreviewWindowControls from "@/components/sidebar/preview-window-controls";
import DeviceControls from "@/components/sidebar/device-controls";
import BackgroundImageControls from "@/components/sidebar/background-image-controls";

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
        <Box p={4} borderBottomWidth={1}>
          <BackgroundImageControls
            backgroundImage={backgroundImage}
            setBackgroundImage={setBackgroundImage}
            previewBackgroundColor={previewBackgroundColor}
          />
        </Box>
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
