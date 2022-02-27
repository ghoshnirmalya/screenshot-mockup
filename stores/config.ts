import create from "zustand";
import { devtools } from "zustand/middleware";

const DEFAULT_CONFIG = {
  image: "",
  backgroundImage: "",
  darkenBackgroundImage: "0.5",
  boxWidth: "50%",
  browserAddressBarBackgroundColor: "#0693E3",
  isBrowserAddressBarVisible: false,
  isShadowVisible: false,
  browserShadowSpread: 0,
  containerBackgroundColor: "#8ED1FC",
  showContainerBackgroundColor: false,
  boxPosition: "center",
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
