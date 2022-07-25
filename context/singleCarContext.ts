import { createContext } from "react";

// Interfaces and Types
import { CarExtraDetailsProps } from "../config/interfaces";

const singleCarContext = createContext<CarExtraDetailsProps | null>(null);

export default singleCarContext;
