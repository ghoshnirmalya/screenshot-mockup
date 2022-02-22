import React, {
  useState,
  useEffect,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import {
  Button,
  Stack,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import domtoimage from "dom-to-image";
import { MdFileDownload, MdDelete, MdMoreHoriz } from "react-icons/md";

interface IProps {
  image: string | ArrayBuffer | null;
  setImage: Dispatch<SetStateAction<string | ArrayBuffer | null>>;
}

const DownloadAndResetButtons: FC<IProps> = ({ image, setImage }) => {
  const [imageType, setImageType] = useState("png");

  const supportedImageTypes = [
    { id: "jpeg", label: "Download jpg file" },
    { id: "png", label: "Download png file" },
    { id: "svg", label: "Download svg file" },
  ];

  useEffect(() => {
    !!image && generateAndDownloadImage();
  }, [imageType]);

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
            onClick={() => setImage("")}
            isDisabled={!image}
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
        isDisabled={!image}
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
