import type { NextApiRequest, NextApiResponse } from "next";

import axiosModules from "../../../config/axios";
import { SINGLE_CAR } from "../../../config/constant";
import { CarExtraDetails } from "../../../config/interfaces";

const { axios, AxiosError } = axiosModules;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<CarExtraDetails | Error | typeof AxiosError>
) => {
  const { pid } = req.query;

  await axios
    .get(`${SINGLE_CAR}/${pid}`)
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch(({ err }) => {
      res.status(400).json(err);
    });
};

export default handler;
