// Import React Stuff
import React, { createContext, useContext, useState, ReactNode } from "react";

// Interfaces and Types
import {
  BrandsAndCarsContextData,
  ContextChildren,
} from "../config/interfaces";

const initialData: BrandsAndCarsContextData = {
  carsList: {
    result: null,
    pagination: null,
  },
  popularMakes: {
    makeList: null,
    pagination: null,
  },
};

const brandsAndCarsContext = createContext({
  brandsAndCarsRes: initialData,
  setBrandsAndCarsRes: (brandsAndCarsRes: BrandsAndCarsContextData) => {},
});

export const BrandsAndCarsContextProvider = ({ children }: ContextChildren) => {
  const [brandsAndCarsRes, setBrandsAndCarsRes] = useState(initialData);

  return (
    <brandsAndCarsContext.Provider
      value={{ brandsAndCarsRes, setBrandsAndCarsRes }}
    >
      {children}
    </brandsAndCarsContext.Provider>
  );
};

export const useBrandsAndCarsContextContext = () => {
  return useContext(brandsAndCarsContext);
};

/* 
Working well

// Interfaces and Types
import {
  BrandsAndCarsContextData,
  ContextChildren,
} from "../config/interfaces";

const brandsAndCarsContext = createContext({
  brandsAndCarsRes: null,
  setBrandsAndCarsRes: (brandsAndCarsRes: null) => {},
});

export const BrandsAndCarsContextProvider = ({ children }: ContextChildren) => {
  const [brandsAndCarsRes, setBrandsAndCarsRes] = useState(null);

  return (
    <brandsAndCarsContext.Provider
      value={{ brandsAndCarsRes, setBrandsAndCarsRes }}
    >
      {children}
    </brandsAndCarsContext.Provider>
  );
};

export const useBrandsAndCarsContextContext = () => {
  return useContext(brandsAndCarsContext);
}; */

/* // Interfaces
import {
  BrandsAndCarsContextData,
  ContextChildren,
} from "../config/interfaces";
import { brandsAndCarsContextHook } from "../config/types";

// Initialize Context
const brandsAndCarsContext = createContext<BrandsAndCarsContextData | null>(
  null
);

export const brandsAndCarsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [brandsAndCarsRes, setBrandsAndCarsRes] = useState<
    BrandsAndCarsContextData | null
  >(null);

  return (
    <brandsAndCarsContext.Provider
      value={{ brandsAndCarsRes, setBrandsAndCarsRes }}
    >
      {children}
    </brandsAndCarsContext.Provider>
  );
};
export const useBrandsAndCarsData: brandsAndCarsContextHook = () =>
  useContext(brandsAndCarsContext); */
