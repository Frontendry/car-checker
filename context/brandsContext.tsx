import { createContext } from "react";

// Interfaces and Types
import { BrandsContextDataType } from "../config/types";

const brandsContext = createContext<BrandsContextDataType | null>(null);

export default brandsContext;
