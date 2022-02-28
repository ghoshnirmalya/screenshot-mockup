import create from "zustand";
import { devtools } from "zustand/middleware";

const DEFAULT_CONFIG = {
  image: "",
  backgroundImage: "",
  darkenBackgroundImage: "0.5",
  width: "50",
  isShadowVisible: false,
  shadowSpread: 0,
  backgroundColor: "#8ED1FC",
  showBackgroundColor: true,
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
