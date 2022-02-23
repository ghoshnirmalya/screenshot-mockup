import useConfigStore from "@/stores/config";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import domtoimage from "dom-to-image";
import React, { FC, useState } from "react";
import { MdDelete, MdFileDownload, MdMoreHoriz } from "react-icons/md";

const DownloadAndResetButtons: FC = () => {
  const [imageType, setImageType] = useState("png");
  const { config, updateConfig } = useConfigStore();

  const supportedImageTypes = [
    { id: "jpeg", label: "Download jpg file" },
    { id: "png", label: "Download png file" },
    { id: "svg", label: "Download svg file" },
  ];

  const generateAndDownloadImage = () => {
    if (imageType === "jpeg") {
      domtoimage
        .toJpeg(document.getElementById("snapshot-node")!)
        .then((dataUrl: string) => {
          let link = document.createElement("a");

          link.download = "screenshot-mockup.jpg";
          link.href = dataUrl;
          link.click();
        })
        .catch((error: Error) => {
          console.error("oops, something went wrong!", error);
        });
    } else if (imageType === "png") {
      domtoimage
        .toPng(document.getElementById("snapshot-node")!)
        .then((dataUrl: string) => {
          let link = document.createElement("a");

          link.download = "screenshot-mockup.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((error: Error) => {
          console.error("oops, something went wrong!", error);
        });
    } else {
      domtoimage
        .toSvg(document.getElementById("snapshot-node")!)
        .then((dataUrl: string) => {
          let link = document.createElement("a");

          link.download = "screenshot-mockup.svg";
          link.href = dataUrl;
          link.click();
        })
        .catch((error: Error) => {
          console.error("oops, something went wrong!", error);
        });
    }
  };

  return (
    <Stack spacing={4}>
      <Box>
        <Stack spacing={4} justifyContent="space-between" isInline>
          <Button
            onClick={() => updateConfig("image", "")}
            isDisabled={!config.image}
            leftIcon={<MdDelete />}
            colorScheme="red"
            size="sm"
          >
            Change Image
          </Button>
          <Menu>
            <MenuButton as={Button} size="sm">
              <Box as={MdMoreHoriz} size="32px" />
            </MenuButton>
            <MenuList>
              {supportedImageTypes.map((type) => {
                return (
                  <MenuItem key={type.id} onClick={() => setImageType(type.id)}>
                    {type.label}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </Stack>
      </Box>
      <Button
        onClick={generateAndDownloadImage}
        isDisabled={!config.image}
        leftIcon={<MdFileDownload />}
        colorScheme="blue"
        size="lg"
      >
        Download Image
      </Button>
    </Stack>
  );
};

export default DownloadAndResetButtons;
