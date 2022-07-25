// Node Modules
import { useContext } from "react";

// Context
import singleCarContext from "../../../context/singleCarContext";

// Interface
import { VehicleDescription } from "../../../config/interfaces";

const ContentSectionCarSingleRight = () => {
  // Commafy Number Utility
  const numberWithCommas = (x: number) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const singleCarData = useContext(singleCarContext);

  const carDetails = singleCarData?.singleCarData;

  const availabilty = carDetails?.sold;

  const carName = carDetails?.carName;

  const marketPrice = carDetails?.marketplacePrice;

  const carMilage = `${
    carDetails && carDetails.mileage ? numberWithCommas(carDetails.mileage) : ""
  } ${carDetails?.mileageUnit}`;

  const location = `${carDetails?.city}, ${carDetails?.state}, ${carDetails?.country}`;

  const vehicleDescription: VehicleDescription = {
    "Engine Type": carDetails?.engineType,
    "Fuel Type": carDetails?.fuelType,
    Transmission: carDetails?.transmission,
    "Wheel Type": carDetails?.model?.wheelType,
    "Exterior Color": carDetails?.exteriorColor,
    "Interior Color": carDetails?.interiorColor,
    VIN: carDetails?.vin,
    "Vehicle ID": carDetails?.id,
  };

  /*   const vehicleDescriptionKeys = Object.keys(
    vehicleDescription
  ) as (keyof typeof vehicleDescription)[];

  console.log(vehicleDescriptionKeys); */

  const vehicleDescriptionEntries = Object.entries(vehicleDescription);

  return (
    <div className="col-lg-7 single-right-left simpleCart_shelfItem">
      {carName && <h3>{carName}</h3>}

      {marketPrice && (
        <p className="mb-3">
          <span className="item_price">
            KES - {numberWithCommas(marketPrice)}
          </span>
        </p>
      )}

      <div className="single-infoagile">
        <ul>
          <li className="mb-3">
            Availability - {availabilty ? "Sold" : "Available"}
          </li>
          {carMilage && <li className="mb-3">Mileage - {carMilage}</li>}
          {location && <li className="mb-3">Location - {location}</li>}
        </ul>
      </div>

      <div className="product-single-w3l">
        {vehicleDescriptionEntries && (
          <h3 className="my-4">Vehicle Description</h3>
        )}

        {vehicleDescriptionEntries && (
          <table className="table table-striped">
            <tbody>
              {vehicleDescriptionEntries.map(
                (vehicleDescriptionEntry, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <span>{vehicleDescriptionEntry[0]}</span>
                        <span className="ml-auto">
                          {vehicleDescriptionEntry[1]}
                        </span>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ContentSectionCarSingleRight;
