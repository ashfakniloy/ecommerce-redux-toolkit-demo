import { API_URL } from "@/config";

export async function getProducts(): Promise<ProductProps[] | null> {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      console.log("error", data);
      return null;
    }
  } catch (error) {
    console.log("error catch", error);
    return null;
  }
}
