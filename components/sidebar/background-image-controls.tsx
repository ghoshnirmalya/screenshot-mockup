import React, { useRef, FormEvent, FC, Dispatch, SetStateAction } from "react";
import {
  Box,
  Button,
  Image,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { MdFileUpload, MdDelete } from "react-icons/md";

interface IProps {
  backgroundImage: string;
  setBackgroundImage: Dispatch<SetStateAction<string | ArrayBuffer>>;
  previewBackgroundColor: any;
}

const BackgroundImageControls: FC<IProps> = ({
  backgroundImage,
  setBackgroundImage,
  previewBackgroundColor,
}) => {
  const hiddenFileInput = useRef(null);

  const handleImageUpload = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataURL = reader.result;

        setBackgroundImage(dataURL!);
      };
    }
  };

  const backgroundImageNode = () => {
    if (!backgroundImage) {
      return (
        <Box backgroundColor={previewBackgroundColor} h={100} rounded="md" />
      );
    }

    return (
      <Image
        src={backgroundImage}
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
    <Stack spacing={8}>
      <FormControl>
        <FormLabel htmlFor="background-image">Background Image</FormLabel>
        <Stack spacing={4}>
          {backgroundImageNode()}
          <Stack spacing={0} isInline justifyContent="space-between">
            <Button
              // @ts-expect-error
              onClick={() => hiddenFileInput.current.click()}
              colorScheme="blue"
              leftIcon={<MdFileUpload />}
              size="sm"
            >
              {!backgroundImage ? "Upload" : "Change"}
            </Button>
            {!!backgroundImage && (
              <Button
                onClick={() => setBackgroundImage("")}
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
      </FormControl>
    </Stack>
  );
};

export default BackgroundImageControls;
