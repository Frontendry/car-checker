import type { NextApiRequest, NextApiResponse } from "next";

import axiosModules from "../../../config/axios";
import { CARS_LIST } from "../../../config/constant";
import { CarDetails } from "../../../config/interfaces";

const { axios, AxiosError } = axiosModules;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<CarDetails[] | Error | typeof AxiosError>
) => {
  const { pid } = req.query;

  await axios
    .get(CARS_LIST)
    .then(({ data }) => {
      const carsList = data.result;

      const querySearch = carsList.filter((car: CarDetails) =>
        car["title"]
          .toLowerCase()
          .includes(typeof pid === "string" ? pid.toLowerCase() : "")
      );

      res.status(200).json(querySearch);
    })
    .catch(({ err }) => {
      res.status(400).json(err);
    });
};

export default handler;
