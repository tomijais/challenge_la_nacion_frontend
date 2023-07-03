import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { API_BASE_URL } from "../../contants";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    
    try {
      const response = await axios.get(API_BASE_URL);
      console.log(response);
      
      const productos = response.data;
      res.status(200).json(productos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener los productos" });
    }
  };