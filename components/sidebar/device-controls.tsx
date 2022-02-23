import { Box, HStack, IconButton, Stack } from "@chakra-ui/react";
import React, { Dispatch, FC, SetStateAction } from "react";
import {
  MdDesktopMac,
  MdPhoneAndroid,
  MdSettingsEthernet,
  MdTabletMac,
} from "react-icons/md";

interface IProps {
  browserWidth: string;
  setBrowserWidth: Dispatch<SetStateAction<string>>;
}

const DeviceControls: FC<IProps> = ({ browserWidth, setBrowserWidth }) => {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <Stack isInline spacing={4} align="center">
        {[
          {
            label: "Desktop",
            icon: <MdDesktopMac />,
            browserWidth: "100%",
          },
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
                fontSize="16px"
                colorScheme={
                  browserWidth === device.browserWidth ? "blue" : "gray"
                }
                borderWidth={1}
                icon={device.icon}
                onClick={() => setBrowserWidth(device.browserWidth)}
                size="sm"
              />
            </Box>
          );
        })}
      </Stack>
    </HStack>
  );
};

export default DeviceControls;
