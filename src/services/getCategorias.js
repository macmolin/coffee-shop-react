import axios from "axios";
import { baseURL } from "../constants/baseURL";



export async function getCategorias() {
  try {
    const response = await axios.get(baseURL+'category');
    return response.data;
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    return [];
  }
}
