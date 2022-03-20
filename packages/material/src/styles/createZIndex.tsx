import { DeepPartial } from "@suid/types";
import { merge } from "@suid/utils/merge";

export type ZIndex = ZIndexOptions;

export type ZIndexOptions = {
  mobileStepper: number;
  speedDial: number;
  appBar: number;
  drawer: number;
  modal: number;
  snackbar: number;
  tooltip: number;
};

export const zIndexDefaults = createZIndexOptions({
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
});

export function createZIndexOptions(data: ZIndexOptions) {
  return data;
}

export function createZIndex(data?: DeepPartial<ZIndexOptions>) {
  const result: ZIndex = {
    ...merge(zIndexDefaults, data),
  };
  return result;
}
