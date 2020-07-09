import React from "react";
import { TwitterPicker } from "react-color";
import {
  Popover,
  PopoverTrigger,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Box,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/core";

const ColorPicker = ({ color, setColor }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Stack>
          <InputGroup>
            <Input
              type="input"
              roundedLeft="0"
              placeholder="#eee"
              value={color}
              isReadOnly
            />
            <InputRightElement w={10}>
              <Box h={8} w={8} bg={color} rounded="md" borderWidth={1} />
            </InputRightElement>
          </InputGroup>
        </Stack>
      </PopoverTrigger>
      <PopoverContent zIndex={4}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Background color</PopoverHeader>
        <PopoverBody>
          <TwitterPicker
            color={color}
            onChangeComplete={(color) => setColor(color.hex)}
            triangle="hide"
            width="100%"
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;
