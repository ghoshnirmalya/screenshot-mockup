import React, { useState } from "react";
import { Box, Grid } from "@chakra-ui/core";
import UploadImageButton from "@/components/upload-image-button";
import ImagePreviewer from "@/components/image-previewer";
import Sidebar from "@/components/sidebar";
import { NextComponentType } from "next";

const Index: NextComponentType = () => {
  const [image, setImage] = useState<string | ArrayBuffer>("");
  const [backgroundImage, setBackgroundImage] = useState<string | ArrayBuffer>(
    ""
  );
  const [previewBackgroundColor, setPreviewBackgroundColor] = useState(
    "#EDF2F7"
  );
  const [browserBackgroundColor, setBrowserBackgroundColor] = useState(
    "#0693E3"
  );
  const [
    browserAddressBarBackgroundColor,
    setBrowserAddressBarBackgroundColor,
  ] = useState("#000");
  const [browserWidth, setBrowserWidth] = useState("auto");
  const [isBrowserAddressBarVisible, setBrowserAddressBarVisibility] = useState(
    true
  );
  const [isBrowserShadowVisible, setBrowserShadowVisibility] = useState(true);
  const [browserShadowSpread, setBrowserShadowSpread] = useState(0);
  const [
    isPreviewBackgroundTransparent,
    setPreviewBackgroundTransparent,
  ] = useState(false);

  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr", "1fr 3fr"]}
      gap={0}
      h={["auto", "auto", "auto", "100vh"]}
    >
      <Box borderRightWidth={1} gridRow={[2, 2, 2, 1]}>
        <Sidebar
          previewBackgroundColor={previewBackgroundColor}
          setPreviewBackgroundColor={setPreviewBackgroundColor}
          browserBackgroundColor={browserBackgroundColor}
          setBrowserBackgroundColor={setBrowserBackgroundColor}
          browserAddressBarBackgroundColor={browserAddressBarBackgroundColor}
          setBrowserAddressBarBackgroundColor={
            setBrowserAddressBarBackgroundColor
          }
          isBrowserAddressBarVisible={isBrowserAddressBarVisible}
          setBrowserAddressBarVisibility={setBrowserAddressBarVisibility}
          isBrowserShadowVisible={isBrowserShadowVisible}
          setBrowserShadowVisibility={setBrowserShadowVisibility}
          browserShadowSpread={browserShadowSpread}
          setBrowserShadowSpread={setBrowserShadowSpread}
          browserWidth={browserWidth}
          setBrowserWidth={setBrowserWidth}
          isPreviewBackgroundTransparent={isPreviewBackgroundTransparent}
          setPreviewBackgroundTransparent={setPreviewBackgroundTransparent}
          image={image}
          setImage={setImage}
          backgroundImage={backgroundImage}
          backgroundImage={backgroundImage}
          setBackgroundImage={setBackgroundImage}
        />
      </Box>
      <Box
        minH={["50vh", "50vh", "50vh", "auto"]}
        bg="gray.100"
        d="flex"
        justifyContent="center"
        alignItems="center"
      >
        {!image && <UploadImageButton setImage={setImage} />}
        {!!image && (
          <ImagePreviewer
            previewBackgroundColor={previewBackgroundColor}
            browserBackgroundColor={browserBackgroundColor}
            browserWidth={browserWidth}
            image={image}
            browserAddressBarBackgroundColor={browserAddressBarBackgroundColor}
            isBrowserAddressBarVisible={isBrowserAddressBarVisible}
            isBrowserShadowVisible={isBrowserShadowVisible}
            browserShadowSpread={browserShadowSpread}
            isPreviewBackgroundTransparent={isPreviewBackgroundTransparent}
            backgroundImage={backgroundImage}
          />
        )}
      </Box>
    </Grid>
  );
};

export default Index;
