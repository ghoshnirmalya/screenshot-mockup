import useConfigStore from "@/stores/config";
import { FormControl, FormLabel, HStack, Switch } from "@chakra-ui/react";
import React, { FC } from "react";

const PreviewWindowControls: FC = () => {
  const { config, updateConfig } = useConfigStore();

  return (
    <FormControl>
      <HStack justify="space-between">
        <FormLabel htmlFor="show-transparent-preview-background" fontSize="sm">
          Use transparent Background for Preview window
        </FormLabel>
        <Switch
          id="show-transparent-preview-background"
          isChecked={config.isPreviewBackgroundTransparent}
          onChange={() =>
            updateConfig(
              "isPreviewBackgroundTransparent",
              !config.isPreviewBackgroundTransparent
            )
          }
        />
      </HStack>
    </FormControl>
  );
};

export default PreviewWindowControls;
