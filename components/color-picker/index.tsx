import React, { FC } from "react";
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
} from "@chakra-ui/react";

interface IProps {
  color: any;
  setColor: any;
  id: any;
}

const ColorPicker: FC<IProps> = ({ color, setColor, id }) => {
  return (
    <Box width={48}>
      <Popover>
        <PopoverTrigger>
          <Stack>
            <InputGroup>
              <Input
                type="input"
                placeholder="#eee"
                value={color}
                isReadOnly
                id={id}
                size="sm"
              />
              <InputRightElement boxSize={8}>
                <Box h={6} w={6} bg={color} rounded="md" borderWidth={1} />
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
    </Box>
  );
};

export default ColorPicker;
