import React from "react";
import { Box, IconButton, Stack, Image } from "@chakra-ui/core";
import { MdDesktopMac, MdPhoneAndroid, MdTabletMac } from "react-icons/md";

const Navbar = ({ browserWidth, setBrowserWidth }) => {
  return (
    <Box>
      <Box
        w="full"
        mx="auto"
        d="flex"
        justifyContent="space-between"
        p={4}
        borderWidth={1}
      >
        <Stack
          isInline
          spacing={4}
          align="center"
          justifyContent="space-between"
          w="full"
        >
          <Box>
            <Stack isInline spacing={4} align="center">
              <Box>
                <Image src="/images/logo.png" alt="Screenshot Mockup" />
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack isInline spacing={4} align="center">
              {[
                { label: "Desktop", icon: MdDesktopMac, browserWidth: "100%" },
                { label: "Tablet", icon: MdTabletMac, browserWidth: "60%" },
                { label: "Phone", icon: MdPhoneAndroid, browserWidth: "40%" },
              ].map((device, index) => {
                return (
                  <Box key={index}>
                    <IconButton
                      aria-label={device.label}
                      fontSize="20px"
                      borderWidth={1}
                      icon={device.icon}
                      onClick={() => setBrowserWidth(device.browserWidth)}
                    />
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
