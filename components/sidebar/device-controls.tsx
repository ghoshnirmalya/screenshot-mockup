import React, { FC } from "react";
import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  IconButton,
} from "@chakra-ui/react";
import {
  MdDesktopMac,
  MdPhoneAndroid,
  MdTabletMac,
  MdSettingsEthernet,
} from "react-icons/md";

interface IProps {
  browserWidth: any;
  setBrowserWidth: any;
}

const DeviceControls: FC<IProps> = ({ browserWidth, setBrowserWidth }) => {
  return (
    <FormControl>
      <FormLabel>Browser width</FormLabel>
      <Stack isInline spacing={4} align="center">
        {[
          { label: "Desktop", icon: <MdDesktopMac />, browserWidth: "100%" },
          { label: "Tablet", icon: <MdTabletMac />, browserWidth: "60%" },
          { label: "Phone", icon: <MdPhoneAndroid />, browserWidth: "40%" },
          {
            label: "Auto",
            icon: <MdSettingsEthernet />,
            browserWidth: "auto",
          },
        ].map((device, index) => {
          return (
            <Box key={index}>
              <IconButton
                aria-label={device.label}
                fontSize="20px"
                colorScheme={
                  browserWidth === device.browserWidth ? "blue" : "gray"
                }
                borderWidth={1}
                icon={device.icon}
                onClick={() => setBrowserWidth(device.browserWidth)}
              />
            </Box>
          );
        })}
      </Stack>
    </FormControl>
  );
};

export default DeviceControls;
