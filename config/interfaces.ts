export interface ContextChildren {
  children: JSX.Element | JSX.Element[];
}

export interface PaginationDetails {
  currentPage: number;
  pageSize: number;
  total: number;
}

export interface BrandDetails {
  id: number;
  name: string;
  imageUrl: string;
}

export interface CarDetails {
  id: string;
  title: string;
  imageUrl: string;
  year: number;
  city: string;
  state: string;
  gradeScore: number;
  sellingCondition: string;
  hasWarranty: boolean;
  marketplacePrice: number;
  marketplaceOldPrice: number;
  hasFinancing: boolean;
  mileage: number;
  mileageUnit: string;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  stats: {
    webViewCount: number;
    webViewerCount: number;
    interestCount: number;
    testDriveCount: number;
    appViewCount: number;
    appViewerCount: number;
    processedLoanCount: number;
  };
  bodyTypeId: string;
  sold: boolean;
  hasThreeDImage: boolean;
  licensePlate: string;
  transmission: string;
  fuelType: string;
  marketplaceVisibleDate: string;
}

export interface CarExtraDetails {
  features: (string | number | boolean)[];
  carFeatures: (string | number | boolean)[];
  modelFeatures: (string | number | boolean)[];
  damageMedia: (string | number | boolean)[];
  id: string;
  year: number;
  insured: boolean;
  mileage: number;
  vin: string;
  marketplacePrice: number;
  marketplaceVisible: boolean;
  marketplaceVisibleDate: string;
  isFeatured: boolean;
  imageUrl: string;
  model: {
    modelFeatures: (string | number | boolean)[];
    id: number;
    name: string;
    imageUrl: string;
    wheelType: string;
    make: {
      id: number;
      name: string;
      imageUrl: string;
    };
    popular: boolean;
  };
  state: string;
  country: string;
  ownerType: string;
  transmission: string;
  fuelType: string;
  sellingCondition: string;
  bodyType: {
    id: number;
    name: string;
    imageUrl: string;
  };
  city: string;
  marketplaceOldPrice: number;
  createdAt: string;
  updatedAt: string;
  mileageUnit: string;
  hasWarranty: boolean;
  hasFinancing: boolean;
  interiorColor: string;
  exteriorColor: string;
  engineType: string;
  gradeScore: number;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  sold: boolean;
  hasThreeDImage: boolean;
  inspectorDetails: {
    inspectedMakes: [
      {
        count: number;
        name: string;
        imageUrl: string;
      }
    ];
    inspectorFullName: string;
    workshopName: string;
    totalInspection: number;
  };
  carName: string;
  financingSettings: {
    loanCalculator: {
      loanPercentage: number;
      ranges: {
        minInterestRate: number;
        maxInterestRate: number;
        minDownPayment: number;
        maxDownPayment: number;
        tenure: number;
      };
      defaultValues: {
        interestRate: number;
        downPayment: number;
        tenure: number;
      };
    };
  };
}

export interface BrandsAndCarsContextDataType {
  popularMakes: {
    makeList: BrandDetails[] | null;
    pagination: PaginationDetails | null;
  };
  carsList: {
    result: CarDetails[] | null;
    pagination: PaginationDetails | null;
  };
}

export interface ContentSegmentProps {
  segmentTitle: string;
  data:
    | BrandsAndCarsContextDataType["popularMakes"]
    | BrandsAndCarsContextDataType["carsList"]
    | undefined;
}

export interface popularMakeCarsProps {
  querySearch: CarDetails[];
}

export interface mediaElementType {
  id: number;
  name: string;
  url: string;
  createdAt: string;
  type: string;
}

export interface CarExtraDetailsProps {
  singleCarData: CarExtraDetails;
  singleCarMediaData: {
    carMediaList: mediaElementType[] | undefined;
  };
}

export interface VehicleDescription {
  "Engine Type": string | undefined;
  "Fuel Type": string | undefined;
  Transmission: string | undefined;
  "Wheel Type": string | undefined;
  "Exterior Color": string | undefined;
  "Interior Color": string | undefined;
  VIN: string | undefined;
  "Vehicle ID": string | undefined;
}
