import React from "react";
import { Button, Stack } from "@chakra-ui/core";
import domtoimage from "dom-to-image";
import { MdFileDownload, MdDelete } from "react-icons/md";

const DownloadAndResetButtons = ({ image, setImage }) => {
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
    <Stack spacing={4} justifyContent="space-between">
      <Button
        onClick={generateAndDownloadImage}
        isDisabled={!image}
        leftIcon={MdFileDownload}
        variantColor="cyan"
        size="lg"
      >
        Download Image
      </Button>
      <Button
        onClick={() => setImage("")}
        isDisabled={!image}
        leftIcon={MdDelete}
        variantColor="red"
        size="lg"
      >
        Change Image
      </Button>
    </Stack>
  );
};

export default DownloadAndResetButtons;
