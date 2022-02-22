import { FormControl, FormLabel, HStack, Switch } from "@chakra-ui/react";
import React, { FC } from "react";

interface IProps {
  isPreviewBackgroundTransparent: any;
  setPreviewBackgroundTransparent: any;
}

const PreviewWindowControls: FC<IProps> = ({
  isPreviewBackgroundTransparent,
  setPreviewBackgroundTransparent,
}) => {
  return (
    <FormControl>
      <HStack justify="space-between">
        <FormLabel htmlFor="show-transparent-preview-background">
          Use transparent Background for Preview window
        </FormLabel>
        <Switch
          id="show-transparent-preview-background"
          isChecked={isPreviewBackgroundTransparent}
          onChange={() =>
            setPreviewBackgroundTransparent(!isPreviewBackgroundTransparent)
          }
        />
      </HStack>
    </FormControl>
  );
};

export default PreviewWindowControls;
