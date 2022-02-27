import useConfigStore from "@/stores/config";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
} from "@chakra-ui/react";
import React, { FC, FormEvent, useRef } from "react";
import { MdDelete, MdFileUpload } from "react-icons/md";
import { MdGraphicEq } from "react-icons/md";

const BackgroundImage: FC = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const { config, updateConfig } = useConfigStore();

  const handleImageUpload = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataURL = reader.result;

        updateConfig("backgroundImage", dataURL);
      };
    }
  };

  const backgroundImageNode = () => {
    if (!config.backgroundImage) {
      return <Box backgroundColor="gray.100" minH={100} rounded="md" p={4} />;
    }

    return (
      <Box backgroundColor="gray.100" minH={100} rounded="md" p={4}>
        <Image
          src={config.backgroundImage}
          alt="Background image"
          rounded="md"
          mx="auto"
        />
      </Box>
    );
  };

  return (
    <Stack spacing={4}>
      {backgroundImageNode()}
      {!!config.backgroundImage && (
        <FormControl>
          <Stack spacing={4} w="100%">
            <HStack justifyContent="space-between" alignItems="center">
              <FormLabel htmlFor="browser-shadow-length" w="75%" fontSize="sm">
                Darken background
              </FormLabel>
              <Slider
                w="75%"
                id="browser-shadow-length"
                defaultValue={config.darkenBackgroundImage}
                onChange={(value) =>
                  updateConfig("darkenBackgroundImage", value)
                }
                step={0.1}
                min={0}
                max={0.5}
              >
                <SliderTrack />
                <SliderFilledTrack />
                <SliderThumb boxSize={6}>
                  <Box as={MdGraphicEq} />
                </SliderThumb>
              </Slider>
            </HStack>
          </Stack>
        </FormControl>
      )}
      <Stack spacing={4} isInline justifyContent="flex-end" w="100%">
        <Button
          onClick={() => hiddenFileInput.current?.click()}
          colorScheme="blue"
          leftIcon={<MdFileUpload />}
          size="sm"
        >
          {!config.backgroundImage ? "Upload" : "Change"}
        </Button>
        {!!config.backgroundImage && (
          <Button
            onClick={() => updateConfig("backgroundImage", "")}
            leftIcon={<MdDelete />}
            colorScheme="red"
            size="sm"
          >
            Remove
          </Button>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          multiple={false}
          ref={hiddenFileInput}
          style={{
            display: "none",
          }}
          id="background-image"
        />
      </Stack>
    </Stack>
  );
};

export default BackgroundImage;
