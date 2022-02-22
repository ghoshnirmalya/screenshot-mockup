import React, { useRef, FormEvent, FC, SetStateAction, Dispatch } from "react";
import { Box, Button } from "@chakra-ui/react";

interface IProps {
  setImage: Dispatch<SetStateAction<string | ArrayBuffer | null>>;
}

const UploadImageButton: FC<IProps> = ({ setImage }) => {
  const hiddenFileInput = useRef(null);

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

  return (
    <Box>
      <Button
        // @ts-expect-error
        onClick={() => hiddenFileInput.current.click()}
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
