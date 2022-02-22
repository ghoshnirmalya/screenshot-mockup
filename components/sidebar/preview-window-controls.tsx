import React, { FC } from "react";
import { Stack, FormControl, FormLabel, Switch } from "@chakra-ui/react";

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
      <Stack spacing={4} isInline alignItems="center">
        <Switch
          id="show-transparent-preview-background"
          isChecked={isPreviewBackgroundTransparent}
          onChange={() =>
            setPreviewBackgroundTransparent(!isPreviewBackgroundTransparent)
          }
        />
        <FormLabel htmlFor="show-transparent-preview-background">
          Use transparent Background for Preview window
        </FormLabel>
      </Stack>
    </FormControl>
  );
};

export default PreviewWindowControls;
