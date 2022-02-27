import useConfigStore from "@/stores/config";
import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import React, { FC } from "react";

const BoxWidth: FC = () => {
  const { config, updateConfig } = useConfigStore();

  return (
    <HStack justifyContent="space-between" alignItems="center">
      <Stack isInline spacing={4} align="center">
        {[
          {
            label: "50%",
            browserWidth: "50%",
          },
          {
            label: "100%",
            browserWidth: "100%",
          },
        ].map((device, index) => {
          return (
            <Box key={index}>
              <Button
                aria-label={device.label}
                fontSize="16px"
                colorScheme={
                  config.browserWidth === device.browserWidth ? "blue" : "gray"
                }
                borderWidth={1}
                onClick={() =>
                  updateConfig("browserWidth", device.browserWidth)
                }
                size="sm"
              >
                {device.label}
              </Button>
            </Box>
          );
        })}
      </Stack>
    </HStack>
  );
};

export default BoxWidth;
