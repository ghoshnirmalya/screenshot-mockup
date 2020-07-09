import React, { useState } from "react";
import { Box, Grid } from "@chakra-ui/core";
import UploadImageButton from "@/components/upload-image-button";
import ImagePreviewer from "@/components/image-previewer";
import Sidebar from "@/components/sidebar";
import { NextComponentType } from "next";
import Navbar from "@/components/navbar";

const Index: NextComponentType = () => {
  const [image, setImage] = useState<string | ArrayBuffer>("");
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

  return (
    <>
      <Navbar browserWidth={browserWidth} setBrowserWidth={setBrowserWidth} />
      <Grid
        templateColumns={["1fr", "1fr", "1fr", "3fr 1fr"]}
        gap={0}
        h={["auto", "auto", "auto", "calc(100vh - 74px)"]}
      >
        {!image && <UploadImageButton image={image} setImage={setImage} />}
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
          />
        )}
        <Box borderLeftWidth={1}>
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
          />
        </Box>
      </Grid>
    </>
  );
};

export default Index;
