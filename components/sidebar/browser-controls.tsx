import React, { FC } from "react";
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
} from "@chakra-ui/react";
import { MdGraphicEq } from "react-icons/md";

interface IProps {
  isBrowserAddressBarVisible: any;
  setBrowserAddressBarVisibility: any;
  isBrowserShadowVisible: any;
  setBrowserShadowVisibility: any;
  browserShadowSpread: any;
  setBrowserShadowSpread: any;
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
    <Stack spacing={8}>
      <FormControl>
        <Stack spacing={4} isInline alignItems="center">
          <Switch
            id="show-browser-address-bar"
            isChecked={isBrowserAddressBarVisible}
            onChange={() =>
              setBrowserAddressBarVisibility(!isBrowserAddressBarVisible)
            }
          />
          <FormLabel htmlFor="show-browser-address-bar">
            Show Browser's Address Bar
          </FormLabel>
        </Stack>
      </FormControl>
      <FormControl>
        <Stack spacing={4} isInline alignItems="center">
          <Switch
            id="show-browser-shadow"
            isChecked={isBrowserShadowVisible}
            onChange={() => setBrowserShadowVisibility(!isBrowserShadowVisible)}
          />
          <FormLabel htmlFor="show-browser-shadow">
            Show Browser's Shadow
          </FormLabel>
        </Stack>
      </FormControl>
      <FormControl>
        <FormLabel>Shadow length of Browser</FormLabel>
        <Slider
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
      </FormControl>
    </Stack>
  );
};

export default BrowserControls;
