import useConfigStore from "@/stores/config";
import { Box, Button, Image, Stack } from "@chakra-ui/react";
import React, { FC, FormEvent, useRef } from "react";
import { MdDelete, MdFileUpload } from "react-icons/md";

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
      return (
        <Box
          backgroundColor={config.previewBackgroundColor}
          h={100}
          rounded="md"
        />
      );
    }

    return (
      <Image
        src={config.backgroundImage}
        alt="Background image"
        rounded="md"
        boxSize="100px"
        objectFit="cover"
        htmlHeight={100}
        mx="auto"
      />
    );
  };

  return (
    <Stack spacing={4}>
      {backgroundImageNode()}
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
