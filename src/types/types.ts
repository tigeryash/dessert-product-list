import { desserts } from "../lib/constants";

export type DessertItem = (typeof desserts)[number];
export type DessertItemImages = (typeof desserts)[number]["images"];

export type CartState = {
  [itemTitle: string]: {
    quantity: number;
    item: DessertItem;
  };
};
