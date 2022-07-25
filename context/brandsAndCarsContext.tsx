import { createContext } from "react";

// Interfaces and Types
import { BrandsAndCarsContextDataType } from "../config/interfaces";

const brandsAndCarsContext = createContext<BrandsAndCarsContextDataType | null>(
  null
);

export default brandsAndCarsContext;
