import type { NextApiRequest, NextApiResponse } from "next";

import axiosModules from "../../../config/axios";
import { CARS_LIST } from "../../../config/constant";
import { CarDetails } from "../../../config/interfaces";

const { axios, AxiosError } = axiosModules;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<CarDetails[] | Error | typeof AxiosError>
) => {
  await axios
    .get(CARS_LIST)
    .then(({ data }) => {
      const carsList = data.result;
      res.status(200).json(carsList);
    })
    .catch(({ err }) => {
      res.status(400).json(err);
    });
};

export default handler;
