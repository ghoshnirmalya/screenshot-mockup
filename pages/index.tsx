import React, { FormEvent, useState, useRef } from "react";
import Head from "next/head";
import {
  Button,
  Box,
  Image,
  Grid,
  Stack,
  FormControl,
  FormLabel,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Flex,
} from "@chakra-ui/core";
import { TwitterPicker } from "react-color";
import domtoimage from "dom-to-image";

const Home = () => {
  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState<string | ArrayBuffer>("");
  const [backgroundColor, setBackgroundColor] = useState("#EDF2F7");

  const handleImageUpload = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataURL = reader.result;

        setImage(dataURL);
      };
    }
  };

  const inputButtonNode = () => {
    if (!!image) {
      return false;
    }

    return (
      <Box bg="gray.100" d="flex" justifyContent="center" alignItems="center">
        <Button
          onClick={() => hiddenFileInput.current.click()}
          variantColor="cyan"
          size="lg"
          leftIcon="attachment"
        >
          Upload a file
        </Button>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          multiple={false}
          ref={hiddenFileInput}
          style={{
            display: "none",
          }}
        />
      </Box>
    );
  };

  const imagePreviewNode = () => {
    if (!image) {
      return false;
    }

    return (
      <Box
        bg={backgroundColor}
        d="flex"
        justifyContent="center"
        alignItems="center"
        p={12}
        id="snapshot-node"
      >
        <Box shadow="lg">
          <Stack spacing={0}>
            <Flex
              align="center"
              h={8}
              bg="black"
              borderTopLeftRadius="md"
              borderTopRightRadius="md"
              px={4}
            >
              <Stack spacing={2} isInline>
                <Box bg="#fe5e55" rounded="full" h={3} w={3} />
                <Box bg="#febd2f" rounded="full" h={3} w={3} />
                <Box bg="#26c940" rounded="full" h={3} w={3} />
              </Stack>
            </Flex>
          </Stack>
          <Image
            // @ts-ignore
            src={image}
            alt="Preview image"
            borderBottomLeftRadius="md"
            borderBottomRightRadius="md"
          />
        </Box>
      </Box>
    );
  };

  const generateAndDownloadImage = () => {
    domtoimage
      .toPng(document.getElementById("snapshot-node"), { quality: 0.95 })
      .then((dataUrl: string) => {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((error: Error) => {
        console.error("oops, something went wrong!", error);
      });
  };

  const sidebarNode = () => {
    return (
      <Box p={4}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Background Color</FormLabel>
            <Popover>
              <PopoverTrigger>
                <Box h={8} w={16} bg={backgroundColor} rounded="md" />
              </PopoverTrigger>
              <PopoverContent zIndex={4}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Background color</PopoverHeader>
                <PopoverBody>
                  <TwitterPicker
                    color={backgroundColor}
                    onChangeComplete={(color) => setBackgroundColor(color.hex)}
                    triangle="hide"
                    width="100%"
                  />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </FormControl>
          <FormControl>
            <Button onClick={generateAndDownloadImage}>Download</Button>
          </FormControl>
        </Stack>
      </Box>
    );
  };

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Grid
        templateColumns={["1fr", "1fr", "1fr", "3fr 1fr"]}
        gap={0}
        h={["auto", "auto", "auto", "calc(100vh - 74px)"]}
      >
        {inputButtonNode()}
        {imagePreviewNode()}
        <Box borderLeftWidth={1}>{sidebarNode()}</Box>
      </Grid>
    </>
  );
};

export default Home;
