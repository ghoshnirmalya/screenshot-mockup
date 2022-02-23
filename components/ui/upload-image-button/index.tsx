import useConfigStore from "@/stores/config";
import { Box, Button } from "@chakra-ui/react";
import React, { FC, FormEvent, useRef } from "react";

const UploadImageButton: FC = () => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const { updateConfig } = useConfigStore();

  const handleImageUpload = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataURL = reader.result;

        updateConfig("image", dataURL);
      };
    }
  };

  return (
    <Box>
      <Button
        onClick={() => hiddenFileInput.current?.click()}
        colorScheme="blue"
        size="lg"
      >
        Upload an image
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

export default UploadImageButton;
