import React, { Dispatch, FC, SetStateAction } from "react";
import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  HStack,
} from "@chakra-ui/react";
import { MdGraphicEq } from "react-icons/md";

interface IProps {
  isBrowserAddressBarVisible: boolean;
  setBrowserAddressBarVisibility: Dispatch<SetStateAction<boolean>>;
  isBrowserShadowVisible: boolean;
  setBrowserShadowVisibility: Dispatch<SetStateAction<boolean>>;
  browserShadowSpread: number;
  setBrowserShadowSpread: Dispatch<SetStateAction<number>>;
}

const BrowserControls: FC<IProps> = ({
  isBrowserAddressBarVisible,
  setBrowserAddressBarVisibility,
  isBrowserShadowVisible,
  setBrowserShadowVisibility,
  browserShadowSpread,
  setBrowserShadowSpread,
}) => {
  return (
    <Stack spacing={2}>
      <FormControl>
        <Stack spacing={4} w="100%">
          <HStack justifyContent="space-between" alignItems="center">
            <FormLabel htmlFor="show-browser-address-bar" w="50%">
              Show browser address bar
            </FormLabel>
            <Switch
              id="show-browser-address-bar"
              isChecked={isBrowserAddressBarVisible}
              onChange={() =>
                setBrowserAddressBarVisibility(!isBrowserAddressBarVisible)
              }
            />
          </HStack>
        </Stack>
      </FormControl>
      <FormControl>
        <Stack spacing={4} w="100%">
          <HStack justifyContent="space-between" alignItems="center">
            <FormLabel htmlFor="show-browser-shadow">
              Show browser shadow
            </FormLabel>
            <Switch
              id="show-browser-shadow"
              isChecked={isBrowserShadowVisible}
              onChange={() =>
                setBrowserShadowVisibility(!isBrowserShadowVisible)
              }
            />
          </HStack>
        </Stack>
      </FormControl>
      <FormControl>
        <Stack spacing={4} w="100%">
          <HStack justifyContent="space-between" alignItems="center">
            <FormLabel htmlFor="browser-shadow-length" w="50%">
              Browser shadow length
            </FormLabel>
            <Slider
              w="50%"
              id="browser-shadow-length"
              defaultValue={browserShadowSpread}
              onChange={(value) => setBrowserShadowSpread(value)}
              step={1}
              min={0}
              max={10}
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
    </Stack>
  );
};

export default BrowserControls;
