// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NomesDeDeusType } from "../../../types";
import { SetentaEDoisNomes } from "./data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NomesDeDeusType>
) {
  res.status(200).json(SetentaEDoisNomes);
}
