import Previewer from "@/components/ui/previewer";
import Sidebar from "@/components/ui/sidebar";
import Onboarding from "@/components/ui/sidebar/onboarding";
import UploadImageButton from "@/components/ui/upload-image-button";
import useConfigStore from "@/stores/config";
import { Box, Grid } from "@chakra-ui/react";
import { NextComponentType } from "next";
import React from "react";

const Index: NextComponentType = () => {
  const { config } = useConfigStore();

  if (!config.image) {
    return <Onboarding />;
  }

  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr", "1fr 3fr"]}
      gap={0}
      h={["auto", "auto", "auto", "100vh"]}
    >
      <Box
        borderRightWidth={1}
        gridRow={[2, 2, 2, 1]}
        h={["50vh", "50vh", "50vh", "auto"]}
      >
        <Sidebar />
      </Box>
      <Box
        h={["50vh", "50vh", "50vh", "100vh"]}
        bg="gray.100"
        d="flex"
        justifyContent="center"
        alignItems="center"
        padding={12}
        overflow="hidden"
      >
        {!config.image && <UploadImageButton />}
        {!!config.image && <Previewer />}
      </Box>
    </Grid>
  );
};

export default Index;
