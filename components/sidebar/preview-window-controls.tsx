import { FormControl, FormLabel, HStack, Switch } from "@chakra-ui/react";
import React, { Dispatch, FC, SetStateAction } from "react";

interface IProps {
  isPreviewBackgroundTransparent: boolean;
  setPreviewBackgroundTransparent: Dispatch<SetStateAction<boolean>>;
}

const PreviewWindowControls: FC<IProps> = ({
  isPreviewBackgroundTransparent,
  setPreviewBackgroundTransparent,
}) => {
  return (
    <FormControl>
      <HStack justify="space-between">
        <FormLabel htmlFor="show-transparent-preview-background" fontSize="sm">
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
