import type { NextApiRequest, NextApiResponse } from "next";

import axiosModules from "../../../config/axios";
import { POPULAR_MAKES } from "../../../config/constant";
import { BrandDetails } from "../../../config/interfaces";

const { axios, AxiosError } = axiosModules;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<BrandDetails[] | Error | typeof AxiosError>
) => {
  await axios
    .get(POPULAR_MAKES)
    .then(({ data }) => {
      const brandsList = data.makeList;
      res.status(200).json(brandsList);
    })
    .catch(({ err }) => {
      res.status(400).json(err);
    });
};

export default handler;
