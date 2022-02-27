import useConfigStore from "@/stores/config";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Stack,
} from "@chakra-ui/react";
import React, { FC } from "react";

const Layout: FC = () => {
  const { config, updateConfig } = useConfigStore();

  return (
    <Stack spacing={2}>
      <FormControl>
        <HStack justify="space-between">
          <FormLabel htmlFor="boxPosition" w="75%" fontSize="sm" mb={0}>
            Position of box
          </FormLabel>
          <HStack justifyContent="space-between" alignItems="center">
            <Stack isInline spacing={2} align="center">
              {[
                {
                  label: "Left",
                  value: "flex-start",
                },
                {
                  label: "Center",
                  value: "center",
                },
                {
                  label: "Right",
                  value: "flex-end",
                },
              ].map((device, index) => {
                return (
                  <Box key={index}>
                    <Button
                      aria-label={device.label}
                      fontSize="12px"
                      colorScheme={
                        config.boxPosition === device.value ? "blue" : "gray"
                      }
                      borderWidth={1}
                      onClick={() => updateConfig("boxPosition", device.value)}
                      size="xs"
                    >
                      {device.label}
                    </Button>
                  </Box>
                );
              })}
            </Stack>
          </HStack>
        </HStack>
      </FormControl>
    </Stack>
  );
};

export default Layout;
