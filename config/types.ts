import { BrandsAndCarsContextDataType, CarDetails } from "./interfaces";

export type brandsAndCarsContextHook =
  () => BrandsAndCarsContextDataType | null;

export type BrandsContextDataType = CarDetails[];
