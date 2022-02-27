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
          <FormLabel
            htmlFor="boxHorizontalAlignment"
            w="75%"
            fontSize="sm"
            mb={0}
          >
            Horizontal alignment of box
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
                        config.boxHorizontalAlignment === device.value
                          ? "blue"
                          : "gray"
                      }
                      borderWidth={1}
                      onClick={() =>
                        updateConfig("boxHorizontalAlignment", device.value)
                      }
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
      <FormControl>
        <HStack justify="space-between">
          <FormLabel
            htmlFor="boxHorizontalAlignment"
            w="75%"
            fontSize="sm"
            mb={0}
          >
            Vertical alignment of box
          </FormLabel>
          <HStack justifyContent="space-between" alignItems="center">
            <Stack isInline spacing={2} align="center">
              {[
                {
                  label: "Top",
                  value: "flex-start",
                },
                {
                  label: "Center",
                  value: "center",
                },
                {
                  label: "Bottom",
                  value: "flex-end",
                },
              ].map((device, index) => {
                return (
                  <Box key={index}>
                    <Button
                      aria-label={device.label}
                      fontSize="12px"
                      colorScheme={
                        config.boxVerticalAlignment === device.value
                          ? "blue"
                          : "gray"
                      }
                      borderWidth={1}
                      onClick={() =>
                        updateConfig("boxVerticalAlignment", device.value)
                      }
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
      <FormControl>
        <HStack justify="space-between">
          <FormLabel
            htmlFor="boxHorizontalAlignment"
            w="75%"
            fontSize="sm"
            mb={0}
          >
            Padding of container
          </FormLabel>
          <HStack justifyContent="space-between" alignItems="center">
            <Stack isInline spacing={2} align="center">
              {[
                {
                  label: "Large",
                  value: 12,
                },
                {
                  label: "Small",
                  value: 6,
                },
                {
                  label: "None",
                  value: 0,
                },
              ].map((device, index) => {
                return (
                  <Box key={index}>
                    <Button
                      aria-label={device.label}
                      fontSize="12px"
                      colorScheme={
                        config.containerPadding === device.value
                          ? "blue"
                          : "gray"
                      }
                      borderWidth={1}
                      onClick={() =>
                        updateConfig("containerPadding", device.value)
                      }
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
