import create from "zustand";
import { devtools } from "zustand/middleware";

const DEFAULT_CONFIG = {
  image: "",
  backgroundImage: "",
  previewBackgroundColor: "#EDF2F7",
  browserBackgroundColor: "#0693E3",
  browserAddressBarBackgroundColor: "#000000",
  browserWidth: "auto",
  isBrowserAddressBarVisible: true,
  isBrowserShadowVisible: true,
  browserShadowSpread: 0,
  isPreviewBackgroundTransparent: false,
};

interface ConfigState {
  config: any;
  updateConfig: (key: string, value: unknown) => void;
}

const useConfigStore = create<ConfigState>(
  devtools(
    (set, get) => ({
      config: DEFAULT_CONFIG,
      updateConfig: (key: string, value) =>
        set(
          (state) => {
            state.config[key] = value;

            return { config: state.config };
          },
          false,
          "config/updateConfig"
        ),
    }),
    { name: "ConfigStore" }
  )
);

export default useConfigStore;
