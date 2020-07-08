import React, { useState } from "react";
import { Box, Grid } from "@chakra-ui/core";
import UploadImageButton from "@/components/upload-image-button";
import ImagePreviewer from "@/components/image-previewer";
import Sidebar from "@/components/sidebar";
import { NextComponentType } from "next";
import Navbar from "@/components/navbar";

const Index: NextComponentType = () => {
  const [image, setImage] = useState<string | ArrayBuffer>("");
  const [backgroundColor, setBackgroundColor] = useState("#EDF2F7");
  const [browserBackgroundColor, setBrowserBackgroundColor] = useState(
    "#0693E3"
  );
  const [browserWidth, setBrowserWidth] = useState(100);

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
            backgroundColor={backgroundColor}
            browserBackgroundColor={browserBackgroundColor}
            browserWidth={browserWidth}
            image={image}
          />
        )}
        <Box borderLeftWidth={1}>
          <Sidebar
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
            browserBackgroundColor={browserBackgroundColor}
            setBrowserBackgroundColor={setBrowserBackgroundColor}
            browserWidth={browserWidth}
            setBrowserWidth={setBrowserWidth}
          />
        </Box>
      </Grid>
    </>
  );
};

export default Index;
